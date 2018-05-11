import React, { Component } from 'react';
import Styled from '../styled/Toggle'

export default class Field extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      active: 0
    }
  }
  componentDidMount() {
    const { options, active } = this.props;
    this.setState({
      active: active ? options.indexOf(active) : 0
    })
  }
  handleToggle = () => {
    this.props.onChange();
    this.setState((prevState, props) => ({
      active: prevState.active === 0 ? 1 : 0
    }));
  }
  render() {
    const { active } = this.state;
    const { options } = this.props;
    const activeClass = (index) => {
      if(active === index) return 'active'
    }
    return (
      <Styled className="toggle">
        <button onClick={this.handleToggle} className={activeClass(0)}>{options[0]}</button>
        <button onClick={this.handleToggle} className={activeClass(1)}>{options[1]}</button>
      </Styled>
    )
  }
}