export function btnStyles(props) {
  let left; let right;
  const { side } = props
  return {
    left: side === 'left' ? 0 : '',
    right: side === 'right' ? 0 : ''
  }
}

export function menuStyles(props, state) {
  const { menuColor, side, effect, speed, timing } = props
  console.log(menuColor)
  const { isOpen, sliding } = state
  return {
    backgroundColor: menuColor,
    ...menuPosition(side, effect),
    ...menuTransform(side, effect, isOpen),
    ...menuTransition(speed, timing, sliding)
  }
}
function menuPosition(side, effect) {
  let left; let right; let zIndex;
  left = side === 'left' ? 0 : ''
  right = side === 'right' ? 0 : ''
  if(effect === "reveal") {
    zIndex = '1000'
  }
  return { left: left, right: 0, zIndex: zIndex }
}
function menuTransform(side, effect, isOpen) {
  let start; let finish;
  if(effect === 'slide-out' || effect === 'push-out') {
    start = side === 'left' ? 'translateX(-100%)' : 'translateX(100%)'
    finish = 'translateX(0)'
  }
  if(effect === 'slide-down' || effect === 'push-down') {
    start = side === 'left' ? 'translate(0, -100%)' : 'translate(0, -100%)'
    finish = 'translate(0, 0)'
  }
  return { transform: !isOpen ? start : finish }
}
function menuTransition(speed, timing, sliding) {
  let transition;
  transition = sliding ? `transform ${speed}ms ${timing}` : 'none'
  return { transition: transition }
}

export function overlayStyles(props, state) {
  const { speed, timing, showOverlay, overlayColor, overlayOpacity } = props
  const { isOpen } = state
  return { 
    backgroundColor: overlayColor,
    opacity: isOpen && showOverlay ? overlayOpacity : 0,
    pointerEvents: isOpen ? 'auto' : 'none',
    transition: `opacity ${speed} ${timing}`
  }
}

export function pageStyles(props, state) {
  const { side, effect, speed, timing } = props
  const { isOpen, sliding, menuWidth } = state
  return {
    ...pageTransform(side, effect, isOpen, menuWidth),
    ...pageTransition(speed, timing, sliding)
  }
}
function pageTransition(speed, timing, sliding) {
  let transition;
  transition = sliding ? `transform ${speed}ms ${timing}` : 'none'
  return { transition: transition }
}
function pageTransform(side, effect, isOpen, menuWidth) {
  let start; let finish;
  if(effect === 'push-out' || effect === 'push-down' || effect === 'reveal') {
    finish = side === 'left' ? `translateX(${menuWidth})` : `translateX(-${menuWidth})`
  }
  return { transform: !isOpen ? start : finish }
}