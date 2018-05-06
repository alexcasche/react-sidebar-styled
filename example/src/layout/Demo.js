import React from 'react'

const Demo = ({updateOption}) => {
  const handleClick = (e, option) => {
    e.target.parentNode.childNodes.forEach((el) => {
      el.classList.remove('active')
    })
    e.target.classList.add('active')
    updateOption(option)
  }
  return (
    <div className="demo">
      <h1>React <span>Sidebar</span></h1>
      <div className='demo__toggle'>
        <button onClick={(e) => handleClick(e, {side: 'left'})} className='demo__toggle--left active'>left</button>
        <button onClick={(e) => handleClick(e, {side: 'right'})} className='demo__toggle--right'>right</button>
      </div>
      <div className="demo__buttons">
        <button onClick={(e) => handleClick(e, {effect: 'slide'})} className='demo__button active'>Slide</button>
        <button onClick={(e) => handleClick(e, {effect: 'push'})} className='demo__button'>Push</button>
        <button onClick={(e) => handleClick(e, {effect: 'fall'})} className='demo__button'>Fall</button>
        <button onClick={(e) => handleClick(e, {effect: 'reveal'})} className='demo__button'>Reveal</button>
        <button onClick={(e) => handleClick(e, {effect: 'diverge'})} className='demo__button'>Diverge</button>
        <button onClick={(e) => handleClick(e, {effect: 'uncover'})} className='demo__button'>Uncover</button>
        <button onClick={(e) => handleClick(e, {effect: 'shrink'})} className='demo__button'>Shrink</button>
        <button onClick={(e) => handleClick(e, {effect: 'grow'})} className='demo__button'>Grow</button>
        <button onClick={(e) => handleClick(e, {effect: 'press'})} className='demo__button'>Press</button>
      </div>
    </div>
  );
}

export default Demo;