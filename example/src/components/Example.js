import React, { Component } from 'react'
import Flex from '../package'
import Layout from '../layout/Layout'

const options = {
  breakPoints: [ 640, 900, 1280 ],
  rowItems: [ 2, 3, 4 ]
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
      <Layout {...this.state} updateOption={this.updateOption}>
        <Flex {...this.state}>
          <div className="box">Item 1</div>
          <div className="box">Item 2</div>
          <div className="box">Item 3</div>
          <div className="box">Item 4</div>
        </Flex>
      </Layout>
    )
  }
}
