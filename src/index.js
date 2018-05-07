import React, { Component } from 'react'
import { propTypes, defaultProps } from './props'
import { getStyles } from './utils'
import './index.scss'

export default class Sidebar extends Component {
  static propTypes = propTypes
  static defaultProps = defaultProps
  constructor(props) {
    super(props);
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
    const styles = getStyles(this.state, this.props)
    const openClass = this.state.isOpen ? ' sidebar--open': ''
    const ButtonOpen = this.props.icons[0]
    const ButtonClose = this.props.icons[1]
    return (
      <div className={`sidebar ${openClass}`} style={styles.sidebar}>
        <div className="sidebar__container" style={styles.container}>
          <div className="sidebar__menu" ref={this.menuRef} style={styles.menu}>
            <button className="sidebar__btn-close">
              <ButtonOpen />
            </button>
            <div className="sidebar__nav">
              {this.props.children[0]}
            </div>
          </div>
          <div className="sidebar__page" style={styles.page}>
            <button className="sidebar__btn-open" onClick={this.toggleMenu} style={styles.btn}>
              <ButtonClose />
            </button>
            {this.props.children[1]}
            <div className="sidebar__overlay" onClick={this.toggleMenu} style={styles.overlay} />
          </div>
        </div>
      </div>
    )
  }
}