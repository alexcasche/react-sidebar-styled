import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Styled from '../styled/Details';
import 'highlight.js/styles/atom-one-light.css';

export default class Details extends Component {
  renderMarkDown = (markdown) => {
    if(markdown) {
      return (
        <div className="details__markdown">
          <Highlight innerHTML={true}>
            {markdown}
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
          {this.renderMarkDown(this.props.markdown)}
        </section>
      </Styled>
    )
  }
}