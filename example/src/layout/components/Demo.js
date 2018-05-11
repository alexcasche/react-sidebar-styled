import React from 'react';
import Styled from '../styled/Demo';
import FieldSet from '../../temp/components/FieldSet';
import Select from '../../temp/components/Select';
import options from '../options';

const Demo = (props) => {
  const toggleSide = (option) => {
    const container = document.querySelector('.sidebar__menu');
    container.style.display = 'none';
    setTimeout(() => container.style.display = 'block');
    toggleOption(option);
  }
  const toggleOption = (option) => {
    props.updateOption(option)
  }
  const updateSelect = (e) => {
    let option = {};
    option[e.target.id] = e.target.value.toLowerCase();
    props.updateOption(option);
  }
  const leftToggle = props.side === 'left' ? ' active' : '';
  const rightToggle = props.side === 'right' ? ' active' : '';
  return (
    <Styled className='demo'>
      <h1>React <span>Sidebar</span></h1>
      <p>Styled off-canvas sidebar component for React with a variety of CSS transitions.</p>
      <FieldSet>
        <button onClick={() => toggleSide({side: 'left'})} className={`field demo__toggle${leftToggle}`}>left</button>
        <button onClick={() => toggleSide({side: 'right'})} className={`field demo__toggle${rightToggle}`}>right</button>
      </FieldSet>
      <FieldSet>
        <Select id="effect" options={options} label="Sidebar" placeholder="Select sidebar..."/>
        <Select id="effect" options={options} label="Menu" placeholder="Select menu..."/>
      </FieldSet>
    </Styled>
  );
}

export default Demo;