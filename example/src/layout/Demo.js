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
        <button onClick={(e) => handleClick(e, {effect: 'slide-out'})} className='demo__button active'>Slide Out</button>
        <button onClick={(e) => handleClick(e, {effect: 'slide-down'})} className='demo__button'>Slide Down</button>
        <button onClick={(e) => handleClick(e, {effect: 'slide-corner'})} className='demo__button'>Slide Corner</button>
        <button onClick={(e) => handleClick(e, {effect: 'push-out'})} className='demo__button'>Push Out</button>
        <button onClick={(e) => handleClick(e, {effect: 'push-down'})} className='demo__button'>Push Down</button>
        <button onClick={(e) => handleClick(e, {effect: 'push-corner'})} className='demo__button'>Push Corner</button>
        <button onClick={(e) => handleClick(e, {effect: 'reveal'})} className='demo__button'>Reveal</button>
      </div>
    </div>
  );
}

export default Demo;