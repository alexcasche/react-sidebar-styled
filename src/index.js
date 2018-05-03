import React, { Component } from 'react'
import { propTypes, defaultProps } from './props'
import { menuStyles, overlayStyles } from './utils'
import './style.scss'

export default class Sidebar extends Component {
  static propTypes = propTypes
  static defaultProps = defaultProps
  constructor() {
    super();
    this.state = {
      isOpen: false,
      sliding: false
    }
    this.menuRef = React.createRef()
  }
  toggleMenu = () => {
    this.setState({ sliding: true, isOpen: !this.state.isOpen })
    setTimeout(() => this.setState({ sliding: false }), this.props.speed)
  }
  componentDidMount() {
    const menuLinks = this.menuRef.current.querySelectorAll("a, button")
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener('click', this.toggleMenu)
    })
  }
  render() {
    return (
      <div className="sidebar" >
        <button className="sidebar__btn-open" onClick={this.toggleMenu}>
          <i className="fas fa-bars" />
        </button>
        <div className="sidebar__menu" ref={this.menuRef} style={menuStyles(this.props, this.state)}>
          <button className="sidebar__btn-close">
            <i className="fas fa-times" />
          </button>
          {this.props.children[0]}
        </div>
        <div className="sidebar__overlay" onClick={this.toggleMenu} style={overlayStyles(this.props, this.state)} />
        <div className="sidebar__page">
          {this.props.children[1]}
        </div>
      </div>
    )
  }
}