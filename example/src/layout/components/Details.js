import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Styled from '../styled/Details';
import 'highlight.js/styles/atom-one-light.css';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: null
    }
  }
  componentDidMount() {
    this.props.markdown.then((markdown) => {
      this.setState({ markdown: markdown })
    })
  }
  renderMarkDown = (markdown) => {
    if(markdown) {
      return (
        <div className="details__markdown">
          <Highlight innerHTML={true}>
            {this.state.markdown}
          </Highlight>
        </div>
      )
    }
  }
  render() {
    return (
      <Styled className="details">
        <section className="details__readme"> 
          <header className="details__header"><i className="fas fa-book" />README.md</header>
          {this.renderMarkDown(this.state.markdown)}
        </section>
      </Styled>
    )
  }
}