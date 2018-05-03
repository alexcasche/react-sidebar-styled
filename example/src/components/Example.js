import React, { Component } from 'react'
import Layout from '../layout/Layout'
import Menu from './Menu'
import Sidebar from 'react-sidebar'
import './Example.css'

const options = {
  side: "left",
  effect: "slide",
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
      <Layout state={this.state} updateOption={this.updateOption}>
        <Sidebar {...this.state}>
          <Menu />
          <main />
        </Sidebar>
      </Layout>
    )
  }
}
