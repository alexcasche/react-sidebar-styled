import { PropTypes as t } from 'prop-types'

const propTypes = {
  effect: t.oneOf([
    'slide', 'push', 'fall', 
    'reveal', 'diverge', 'uncover',
    'shrink', 'grow', 'press'
  ]),
  side: t.oneOf(['left', 'right']),
  speed: t.number,
  timing: t.string,
  overlay: t.bool
}
const defaultProps = {
  effect: 'slide',
  side: 'left',
  speed: 500,
  timing: 'ease',
  overlay: true
}

export { propTypes, defaultProps }