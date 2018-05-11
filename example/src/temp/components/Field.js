import React, { Component } from 'react';
import Styled from '../styled/Field'

export default class Field extends Component {
  render() {
    return (
      <Styled className="field">
        {this.props.children}
      </Styled>
    )
  }
}