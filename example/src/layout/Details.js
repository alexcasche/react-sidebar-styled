import React, { PureComponent } from 'react'
import marked from 'marked'
import readMe from 'react-sidebar/README.md'
import Highlight from 'react-highlight'
import 'highlight.js/styles/atom-one-light.css'

export default class Details extends PureComponent {
  constructor() {
    super()
    this.state = {
      markdown: null
    }
  }

  componentWillMount() {
    fetch(readMe)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdown: marked(text)
        })
      })
  }
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
      <div className="details">
        <section className="details__readme"> 
          <header className="details__header"><i className="fas fa-book" />README.md</header>
          {this.renderMarkDown(this.state.markdown)}
        </section>
      </div>
    )
  }
}