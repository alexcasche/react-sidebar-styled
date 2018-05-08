import React, { Component } from 'react'

class Demo extends Component {
  constructor() {
    super()
    this.state = {
      errors: null
    }
  }
  handleSubmit = () => {
    const inputResults = validateInput()
    if(inputResults.errors) this.setState({ errors: inputResults.errors })
    else this.props.updateOption({
      breakPoints: inputResults.breaks,
      rowItems: inputResults.items
    })
  }
  renderErrors = () => {
    if(this.state.errors) return <div className="demo__errors">{this.state.errors}</div>
    else return null
  }
  render() {
    const { children, breakPoints, rowItems } = this.props;
    return (
      <div className="demo">
        <h1>Reactrix <span>Flex</span></h1>
        <div className="demo__options">
          {this.renderErrors()}
          <div className="demo__fieldset">
            <div className="demo__field">
              <input className="demo__input" placeholder={`Breaks: ${breakPoints.join(', ')}`} />
            </div>
            <div className="demo__field">
              <input className="demo__input" placeholder={`Items: ${rowItems.join(', ')}`} />
            </div>
            <div className="demo__field">
              <button className="demo__button--submit" onClick={() => this.handleSubmit()}>Submit</button>
            </div>
          </div>
        </div>
        {children}
      </div>
    )
  }
}
function validateInput() {
  const inputs = document.querySelectorAll('.demo__input')
  const breaksInput = inputs[0].value.replace(/\s+/g, '').split(',')
  const itemsInput = inputs[1].value.replace(/\s+/g, '').split(',') 
  const breaks = breaksInput.map(input => parseInt(input, 10))
  const items = itemsInput.map(input => parseInt(input, 10))
  let errors = [];
  if(breaks.length !== items.length) {
    errors[0] = ("Every break point needs row items.")
  }
  for(let i = 0; i < breaks.length; i++) {
    if(!Number.isInteger(parseInt(breaks[i], 10)) || !Number.isInteger(parseInt(items[i],10))) {
      errors[1] = ("All values must integers.");
    }
  }
  return {
    errors: errors.join(" "),
    breaks: breaks,
    items: items
  }
}

export default Demo;