import React, { Component } from 'react'
import { propTypes, defaultProps } from './props'
import { btnStyles, menuStyles, overlayStyles, pageStyles } from './utils'
import './style.scss'

export default class Sidebar extends Component {
  static propTypes = propTypes
  static defaultProps = defaultProps
  constructor() {
    super();
    this.state = {
      isOpen: false,
      sliding: false,
      menuWidth: undefined
    }
    this.menuRef = React.createRef()
  }
  toggleMenu = () => {
    this.setState({ sliding: true, isOpen: !this.state.isOpen })
    setTimeout(() => this.setState({ sliding: false }), this.props.speed)
  }
  componentDidMount() {
    const menuWidth = `${this.menuRef.current.clientWidth}px`
    const menuLinks = this.menuRef.current.querySelectorAll("a, button")
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener('click', this.toggleMenu)
    })
    this.setState({menuWidth: menuWidth})
  }
  render() {
    return (
      <div className="sidebar" style={{backgroundColor: this.props.menuColor}}>
        <div className="sidebar__menu" ref={this.menuRef} style={menuStyles(this.props, this.state)}>
          <button className="sidebar__btn-close">
            <i className="fas fa-times" />
          </button>
          {this.props.children[0]}
        </div>
        <div className="sidebar__page" style={pageStyles(this.props, this.state)}>
        <button className="sidebar__btn-open" onClick={this.toggleMenu} style={btnStyles(this.props)}>
          <i className="fas fa-bars" />
        </button>
          <div className="sidebar__overlay" onClick={this.toggleMenu} style={overlayStyles(this.props, this.state)} />
          {this.props.children[1]}
          <div className="sidebar__overlay" onClick={this.toggleMenu} style={overlayStyles(this.props, this.state)} />
        </div>
      </div>
    )
  }
}