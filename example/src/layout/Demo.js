import React from 'react'

const Demo = ({updateOption}) => {
  const toggleSide = (option) => {
    const container = document.querySelector('.sidebar__menu');
    container.style.display = 'none';
    setTimeout(() => container.style.display = 'block');
    toggleOption(option);
  }
  const toggleOption = (option) => {
    updateOption(option)
  }
  return (
    <div className="demo">
      <h1>React <span>Sidebar</span></h1>
      <div className='demo__toggle'>
        <button onClick={() => toggleSide({side: 'left'})} className='demo__toggle--left'>left</button>
        <button onClick={() => toggleSide({side: 'right'})} className='demo__toggle--right'>right</button>
      </div>
      <div className="demo__buttons">
        <button onClick={() => toggleOption({effect: 'slide'})} className='demo__button'>Slide</button>
        <button onClick={() => toggleOption({effect: 'push'})} className='demo__button'>Push</button>
        <button onClick={() => toggleOption({effect: 'fall'})} className='demo__button'>Fall</button>
        <button onClick={() => toggleOption({effect: 'reveal'})} className='demo__button'>Reveal</button>
        <button onClick={() => toggleOption({effect: 'diverge'})} className='demo__button'>Diverge</button>
        <button onClick={() => toggleOption({effect: 'uncover'})} className='demo__button'>Uncover</button>
        <button onClick={() => toggleOption({effect: 'shrink'})} className='demo__button'>Shrink</button>
        <button onClick={() => toggleOption({effect: 'grow'})} className='demo__button'>Grow</button>
        <button onClick={() => toggleOption({effect: 'press'})} className='demo__button'>Press</button>
      </div>
    </div>
  );
}

export default Demo;