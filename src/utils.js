export function getStyles(state, props) {
  const sidebar = sidebarStyles(state)
  const container = containerStyles(state, props)
  const menu = menuStyles(state, props)
  const page = pageStyles(state, props)
  const btn = btnStyles(props)
  const overlay = overlayStyles(state, props)
  return {
    sidebar: sidebar,
    container: container,
    menu: menu,
    page: page,
    btn: btn,
    overlay: overlay
  }
}

function sidebarStyles(state) {
  const { isOpen, sliding } = state  
  return {
    overflowY: isOpen || sliding ? 'hidden' : '',
    maxHeight: isOpen || sliding ? '100vh' : ''
  }
}

function containerStyles(state, props) {
  const { isOpen, sliding, menuWidth } = state
  const { side, effect, speed, timing } = props
  return {
    perspectiveOrigin: side === 'left' ? '0% 50%' : '100% 50%',
    ...containerTransform(isOpen, menuWidth, side, effect),
    transition: sliding ? `all ${speed}ms ${timing}` : 'none'
  }
}
function containerTransform(isOpen, menuWidth, side, effect) {
  let start; let finish;
  if(effect === 'push') {
    start = side === ''
    finish = side === 'left' ? `translate3d(${menuWidth}, 0, 0)` : `translate3d(-${menuWidth}, 0, 0)`
  }
  return { transform: !isOpen ? start : finish }
}

function menuStyles(state, props) {
  const { isOpen, sliding, menuWidth } = state
  const { side, effect, speed, timing } = props
  return {
    visibility: isOpen || sliding ? 'visible' : 'hidden',
    ...menuPosition(side, effect),
    ...menuTransform(isOpen, menuWidth, side, effect),
  }
}
function menuPosition(side, effect) {
  let left; let right; let zIndex;
  left = side === 'left' ? 0 : ''
  right = side === 'right' ? 0 : ''
  if(['fall', 'reveal', 'diverge', 'uncover', 'grow'].indexOf(effect) !== -1) {
    zIndex = '1'
  }
  return { left: left, right: right, zIndex: zIndex }
}
function menuTransform(isOpen, menuWidth, side, effect) {
  let start; let finish;
  if(['slide', 'push', 'shrink', 'press'].indexOf(effect) !== -1) {
    start = side === 'left' ? 'translate3d(-100%, 0, 0)' : 'translate3d(100%, 0, 0)'
  }
  if(effect === 'push') {
    finish = start
  }
  if(effect === 'uncover') {
    start = side === 'left' ? 'translate3d(-50%, 0, 0)' : 'translate3d(50%, 0, 0)'
  }
  if(effect === 'fall') {
    start = side === 'left' ? 'translate3d(0, -100%, 0)' : 'translate3d(0, -100%, 0)'
    finish = side === 'left' ? 'translate3d(0, 0, 0)' : 'translate3d(0, 0, 0)'
  }
  if(effect === 'diverge') {
    start = side ==='left' ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)'
    finish = side === 'left' ? 'translate3d(0, 0, 0)' : 'translate3d(0, 0, 0)'
  }
  if(effect === 'grow') {
    start = `translate3d(0, 0, -${menuWidth})`
  }
  return { transform: !isOpen ? start : finish }
}

function pageStyles(state, props) {
  const { isOpen, sliding, menuWidth } = state
  const { side, effect, speed, timing } = props
  return {
    ...pageTransform(isOpen, menuWidth, side, effect)
  }
}
function pageTransform(isOpen, menuWidth, side, effect) {
  let start; let finish; let origin;
  if(['fall', 'reveal', 'diverge', 'uncover', 'grow'].indexOf(effect) !== -1) {
    finish = side === 'left' ? `translate3d(${menuWidth}, 0, 0)` : `translate3d(-${menuWidth}, 0, 0)`
  }
  if(['shrink'].indexOf(effect) !== -1) {
    finish = `translate3d(0, 0, -${menuWidth})`
  }
  if(effect === 'press') {
    finish = side === 'left' ? 'rotateY(-10deg)' : 'rotateY(10deg)'
    origin = side === 'left' ? '100% 50%' : '0% 50%'
  }
  return { 
    transform: !isOpen ? start : finish,
    transformOrigin: origin
  }
}

function btnStyles(props) {
  let left; let right;
  const { side } = props
  return {
    left: side === 'left' ? 0 : '',
    right: side === 'right' ? 0 : ''
  }
}

function overlayStyles(state, props) {
  const { isOpen } = state
  const { speed, timing, overlay } = props
  return { 
    opacity: isOpen && overlay ? .75 : 0,
    pointerEvents: isOpen ? 'auto' : 'none'
  }
}