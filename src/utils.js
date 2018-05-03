export function menuStyles(props, state) {
  const { side, effect, speed, timing } = props
  const { isOpen, sliding } = state
  return {
    ...menuPosition(side, effect),
    ...menuTransform(side, effect, isOpen),
    ...menuTransition(speed, timing, sliding)
  }
}
function menuPosition(side, effect) {
  let position = "fixed"; let top; let left;
  if(effect === "slide") {
    top = 0;
    left = side === "left" ? 0 : '100%'
  }
  return { position: position, top: top, left: left }

}
function menuTransition(speed, timing, sliding) {
  let transition;
  transition = sliding ? `transform ${speed}ms ${timing}` : 'none'
  return { transition: transition }
}
function menuTransform(side, effect, isOpen) {
  let start; let finish;
  if(effect === 'slide') {
    start = side === 'left' ? 'translateX(-100%)' : 'translateX(0)'
    finish = side === 'left' ? 'translateX(0%)' : 'translateX(-100%)'
  }
  return { transform: !isOpen ? start : finish }
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