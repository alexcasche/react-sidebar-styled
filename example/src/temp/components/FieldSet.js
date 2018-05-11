import React, { Component } from 'react';
import Styled from '../styled/FieldSet'

export default class FieldSet extends Component {
  render() {
    return (
      <Styled className="fieldset">
        {this.props.children}
      </Styled>
    )
  }
}