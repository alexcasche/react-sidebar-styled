import React, { Component } from 'react'
import Sidebar from 'react-sidebar'
import Menu from './Menu'
import Layout from '../layout/Layout'
import './Example.css'

const options = {
  side: "left",
  effect: "slide-out",
  speed: 250,
  timing: 'ease-in-out'
}

export default class Example extends Component {
  constructor() {
    super();
    this.state = {...options}
  }
  updateOption = (option) => {
    this.setState({...this.state, ...option})
  }
  render () {
    return (
      <Sidebar {...this.state}>
        <Menu />
        <Layout updateOption={this.updateOption} />
      </Sidebar>
    )
  }
}
