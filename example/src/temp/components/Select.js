import React, { Component } from 'react'
import Field from '../components/Field'
import Styled from '../styled/Select'

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: null,
      text: this.props.placeholder
    }
  }
  componentDidMount() {
    if(this.props.default) {
      this.setState({ value: this.props.default })
    }
  }
  render() {
    const { value, text } = this.state;
    const { options, label, placeholder } = this.props;
    const placeholderClass = !value && placeholder ? ' placeholder' : ''; 
    return (
      <Field>
        <Styled className='select' id={this.props.id}>
          <label className='select__label'>{label}</label>
          <button className={`select__dropdown${placeholderClass}`}>
            <span className='select__text'>{text}</span>
            <span className='select__icon'></span>
          </button>
        </Styled>
      </Field>
    )
  }
}