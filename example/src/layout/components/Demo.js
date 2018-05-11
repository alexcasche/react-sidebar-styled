import React, { Component } from 'react';
import Styled from '../styled/Demo';
import FieldSet from '../../temp/components/FieldSet';
import Toggle from '../../temp/components/Toggle';
import Select from '../../temp/components/Select';
import options from '../options';

export default class Demo extends Component {
  toggleSide = () => { 
    this.props.updateOption({
      side: this.props.side === 'left' ? 'right' : 'left'
    })
  }
  updateSidebar = (sidebar) => {
    this.props.updateOption({
      sidebar: sidebar
    })
  }
  render() {
    const { side } = this.props;
    return (
      <Styled className='demo'>
        <h1>React <span>Sidebar</span></h1>
        <p>Styled off-canvas sidebar component for React with a variety of CSS transitions.</p>
        <FieldSet>
          <Toggle options={['left', 'right']} active={side} onChange={this.toggleSide} />
        </FieldSet>
        <FieldSet>
          <Select id="effect" 
            onChange={this.updateSidebar} 
            options={options.sidebar} 
            label="Sidebar" 
            placeholder="Select sidebar..."
            default={this.props.sidebar}
          />
          {/*<Select id="effect" options={options} label="Menu" placeholder="Select menu..."/>*/}
        </FieldSet>
      </Styled>
    );
  }
}