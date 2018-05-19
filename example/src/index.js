import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked';
import readMe from 'react-styled-sidebar/README.md';
import * as Sidebar from 'react-styled-sidebar'
import Header from './layout/components/Header'
import Demo from './layout/components/Demo'
import Details from './layout/components/Details'
import './style.css'
import './old.css'

export default class Example extends Component {
  constructor() {
    super();
    this.state = { sidebar: 'slide', side: 'left' }
  }
  componentWillMount() {
    this.markdown = fetch(readMe).then(response => {
      return response.text() }).then(text => {
      return marked(text);
    })
  }
  updateOption = (option) => {
    const body = document.body;
    this.setState({...this.state, ...option}, () => {
      body.classList.add('freeze');
      setTimeout(() => { body.classList.remove('freeze')}, );
    })
  }
  render () {
    const RenderSidebar = sidebars[this.state.sidebar];
    return (
      <RenderSidebar {...this.state}>
        <div>Menu Goes Here</div>
        <div>
          <Header/>
          <Demo {...this.state} updateOption={this.updateOption} />
          <Details markdown={this.markdown} />
        </div>
      </RenderSidebar>
    )
  }
}

const sidebars = {
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

ReactDOM.render(<Example />, document.getElementById('root'))