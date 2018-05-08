export function getBreak(props) {
  const { breakPoints } = props
  const index = getIndex(breakPoints, window.outerWidth)
  return { 
    breakPoint: index === -1 ? -1 : breakPoints[index]
  }
}
export function shouldUpdate(state, props) {
  const { breakPoint } = state
  const { breakPoints } = props
  const currentIndex = breakPoints.indexOf(breakPoint)
  const nextIndex = getIndex(breakPoints, window.outerWidth)
  return currentIndex !== nextIndex ? true : false
}
function getIndex(breakPoints, width) {
  return [...breakPoints, width].sort((a, b) => a - b).indexOf(width) - 1
}

export function itemStyles(state, props) {
  const { breakPoint } = state
  const { breakPoints, rowItems } = props
  const index = breakPoints.indexOf(breakPoint)
  return {
    flexBasis: index === -1 ? '100%' : `${100 / rowItems[index]}%`
  }
}