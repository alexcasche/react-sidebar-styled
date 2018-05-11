import React, { Component } from 'react'
import Field from '../components/Field'
import Dropdown from '../components/Dropdown'
import Styled from '../styled/Select'

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  componentDidMount() {
    if(this.props.default) {
      this.setState({ ...this.state, value: this.props.default })
    } else if (this.props.placeholder) {
      this.setState({ ...this.state, value: this.props.placeholder })
    }
  }
  updateSelection = (e) => {
    const value = e.target.textContent;
    this.setState({ value: value })
    this.props.onChange(value);
  }
  render() { 
    return (
      <Field>
        <Dropdown {...this.state} {...this.props} updateSelection={this.updateSelection} />
        <Styled className='select' value={this.state.value}>
          <select>
            {this.props.options.map((option, index) => {
              return (
                <option key={`opt-${index}`} className='select__option'>
                  {option}
                </option>
              )
            })}
          </select>
        </Styled>
      </Field>
    )
  }
}