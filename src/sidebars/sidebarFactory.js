'use strict'

import React, { Component } from 'react'
import { propTypes, defaultProps } from './sidebarProps'

export default Styled => {
  class SideBar extends Component {
    static propTypes = propTypes
    static defaultProps = defaultProps
    constructor(props) {
      super(props)
      this.state = {
        isOpen: false,
        active: false,
        menuWidth: false,
      }
      this.menuRef = React.createRef()
    }
    componentDidMount() {
      this.setState({ menuWidth: `${this.menuRef.current.clientWidth}px` })
    }
    handleSlide = () => {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.setState((prevState, props) => {
          return { active: !prevState.isOpen ? false : true }
        })
      }, this.props.speed)
    }
    toggleMenu = () => {
      this.setState(
        { isOpen: !this.state.isOpen, active: true },
        this.handleSlide()
      )
    }
    render() {
      return (
        <Styled className="sidebar" {...this.state} {...this.props}>
          <div className="sidebar__container">
            <div className="sidebar__menu" ref={this.menuRef}>
              <div className="sidebar__close">
                <button
                  className="sidebar__close-btn"
                  onClick={this.toggleMenu}
                >
                  {this.props.icons[0]()}
                </button>
              </div>
              {this.props.children[0]}
            </div>
            <div className="sidebar__page">
              {this.props.children[1]}
              <div className="sidebar__open">
                <button className="sidebar__open-btn" onClick={this.toggleMenu}>
                  {this.props.icons[1]()}
                </button>
              </div>
              <div className="sidebar__overlay" onClick={this.toggleMenu} />
            </div>
          </div>
        </Styled>
      )
    }
  }
  return SideBar
}
