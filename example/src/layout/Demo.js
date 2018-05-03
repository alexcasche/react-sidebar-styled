import React from 'react'

const Demo = ({state, children, updateOption}) => {
  const toggleClass = {
    left: state.side === 'left' ? 'demo__toggle--active' : '',
    right: state.side === 'right' ? 'demo__toggle--active': ''
  }
  return (
    <div className="demo">
      <h1>React <span>Sidebar</span></h1>
      {children}
      <div className="demo__control">
        <button onClick={() => updateOption({side: "left"})} className={`demo__toggle demo__toggle--left ${toggleClass.left}`}>left</button>
        <button onClick={() => updateOption({side: "right"})} className={`demo__toggle demo__toggle--right ${toggleClass.right}`}>right</button>
      </div>
    </div>
  );
}

export default Demo;