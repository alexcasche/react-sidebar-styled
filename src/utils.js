export function getStyles(props, state) {
  const container = containerStyles(props, state)
  const menu = menuStyles(props, state)
  const page = pageStyles(props, state)
  const btn = btnStyles(props)
  const overlay = overlayStyles(props, state)
  return {
    container: container,
    menu: menu,
    page: page,
    btn: btn,
    overlay: overlay
  }
}

function containerStyles(props, state) {
  const { side, effect, speed, timing } = props
  const { isOpen, sliding, menuWidth } = state
  return {
    ...containerTransform(side, effect, isOpen, menuWidth),
    ...containerTransition(effect, speed, timing, sliding)
  }
}
function containerTransform(side, effect, isOpen, menuWidth) {
  let start; let finish;
  if(effect === 'push') {
    start = side === ''
    finish = side === 'left' ? `translate3d(${menuWidth}, 0, 0)` : `translate3d(-${menuWidth}, 0, 0)`
  }
  return { transform: !isOpen ? start : finish }
}
function containerTransition(effect, speed, timing, sliding) {
  let transition;
  if(effect === 'push') {
    transition = sliding ? `all ${speed}ms ${timing}` : 'none'
  }
  return { transition: transition }
}

function menuStyles(props, state) {
  const { side, effect, speed, timing } = props
  const { isOpen, sliding } = state
  return {
    visibility: isOpen || sliding ? 'visible' : 'hidden',
    ...menuPosition(side, effect),
    ...menuTransform(side, effect, isOpen),
    ...menuTransition(effect, speed, timing, sliding)
  }
}
function menuPosition(side, effect) {
  let left; let right; let zIndex;
  left = side === 'left' ? 0 : ''
  right = side === 'right' ? 0 : ''
  if(effect === "reveal" || effect === "fall") {
    zIndex = '1000'
  }
  return { left: left, right: 0, zIndex: zIndex }
}
function menuTransform(side, effect, isOpen) {
  let start; let finish;
  if(effect === 'slide' || effect === 'shrink' || effect === 'push') {
    start = side === 'left' ? 'translate3d(-100%, 0, 0)' : 'translate3d(100%, 0, 0)'
    finish = 'translateX(0)'
  }
  if(effect === 'fall') {
    start = side === 'left' ? 'translate3d(0, -100%, 0)' : 'translate3d(0, -100%, 0)'
    finish = side === 'left' ? 'translate3d(0, 0, 0)' : 'translate3d(0, 0, 0)'
  }
  if(effect === 'push') {
    finish = start
  }
  return { transform: !isOpen ? start : finish }
}
function menuTransition(effect, speed, timing, sliding) {
  let transition;
  if(effect !== 'push') {
    transition = sliding ? `all ${speed}ms ${timing}` : 'none'
  }
  return { transition: transition }
}

function pageStyles(props, state) {
  const { side, effect, speed, timing } = props
  const { isOpen, sliding, menuWidth } = state
  return {
    ...pageTransform(side, effect, isOpen, menuWidth),
    ...pageTransition(effect, speed, timing, sliding)
  }
}
function pageTransition(effect, speed, timing, sliding) {
  let transition;
  if(effect === 'reveal' || effect === 'fall' || effect === 'shrink') {
    transition = sliding ? `all ${speed}ms ${timing}` : 'none'
  }
  return { transition: transition }
}
function pageTransform(side, effect, isOpen, menuWidth) {
  let start; let finish;
  if(effect === 'reveal' || effect === 'fall') {
    finish = side === 'left' ? `translate3d(${menuWidth}, 0, 0)` : `translate3d(-${menuWidth}, 0, 0)`
  }
  if(effect === 'shrink') {
    finish = `translate3d(0, 0, -${menuWidth})`
  }
  return { transform: !isOpen ? start : finish }
}

function btnStyles(props) {
  let left; let right;
  const { side } = props
  return {
    left: side === 'left' ? 0 : '',
    right: side === 'right' ? 0 : ''
  }
}

function overlayStyles(props, state) {
  const { speed, timing, overlay } = props
  const { isOpen } = state
  return { 
    opacity: isOpen && overlay ? .75 : 0,
    pointerEvents: isOpen ? 'auto' : 'none',
    transition: `all ${speed}ms ${timing}`
  }
}