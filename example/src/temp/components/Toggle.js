import React, { Component } from 'react';
import Styled from '../styled/Toggle'

export default class Field extends Component {
  render() {
    return (
      <Styled className="toggle">
        {this.props.children}
      </Styled>
    )
  }
}