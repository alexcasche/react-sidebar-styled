import React, { Component } from 'react'
import Styled from '../styled/Dropdown'

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false
    }
  }
  toggleDropdown = () => {
    this.setState((prevState, props) => ({
      isOpen: !prevState.isOpen
    }));
  }
  handleChange = (e) => {

  }
  render() { 
    const { value, options, label, placeholder } = this.props;
    const placeholderClass = !value && placeholder ? ' placeholder' : '';
    return (
      <Styled className='dropdown' {...this.state}>
        <div className="dropdown__overlay" onClick={this.toggleDropdown} />
        <label className='dropdown__label'>{label}</label>
        <button className='dropdown__trigger' onClick={this.toggleDropdown}>
          <span className={`dropdown__text${placeholderClass}`}>{value}</span>
          <span className='dropdown__icon'></span>
        </button>
        <div className='dropdown__content'>
          {options.map((option, index) => {
            const optionClass = value === option ? ' active' : ''
            return (
              <button 
                key={`drop-${index}`} 
                className={`dropdown__option${optionClass}`}
                onClick={(e) => this.props.updateSelection(e)}
              >
                {option}
              </button>
            )
          })}
        </div>
      </Styled>
    )
  }
}