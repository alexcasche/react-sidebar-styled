import { PropTypes as t } from 'prop-types'

const propTypes = {
  side: t.oneOf(['left', 'right']),
  effect: t.oneOf([
    'slide', 'push', 'reveal', 'fall',
    'shrink', 'grow'
  ]),
  speed: t.number,
  timing: t.string,
  overlay: t.bool
}
const defaultProps = {
  side: 'left',
  effect: 'slide',
  speed: 500,
  timing: 'ease',
  overlay: true
}

export { propTypes, defaultProps }