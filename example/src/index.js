import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as Sidebar from 'react-sidebar-styled'
import Layout from './layout/Layout'
import './style.css'
import './old.css'

const options = {
  side: "left",
  effect: "slide"
}

export default class Example extends Component {
  constructor() {
    super();
    this.state = {...options}
    this.components = {
      diverge: Sidebar.diverge,
      fall: Sidebar.fall,
      grow: Sidebar.grow,
      press: Sidebar.press,
      push: Sidebar.push,
      reveal: Sidebar.reveal,
      shrink: Sidebar.shrink,
      slide: Sidebar.slide,
      uncover: Sidebar.uncover
    }
  }
  updateOption = (option) => {
    this.setState({...this.state, ...option})
  }
  render () {
    const RenderSidebar = this.components[this.state.effect];
    return (
      <RenderSidebar {...this.state}>
        <div>Menu Goes Here</div>
        <Layout {...this.state} updateOption={this.updateOption} />
      </RenderSidebar>
    )
  }
}


ReactDOM.render(<Example />, document.getElementById('root'))