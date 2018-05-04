import { PropTypes as t } from 'prop-types'

const propTypes = {
  menuColor: t.string,
  side: t.oneOf(['left', 'right']),
  effect: t.oneOf([
    'slide-out', 'slide-down', 'push-out', 'push-down',
    'reveal'
  ]),
  speed: t.number,
  timing: t.string,
  showOverlay: t.bool,
  overlayColor: t.string,
  overlayOpacity: t.number
}
const defaultProps = {
  menuColor: '#464D59',
  side: 'left',
  effect: 'slide-out',
  speed: 250,
  timing: 'ease-in-out',
  showOverlay: true,
  overlayColor: '#20232A',
  overlayOpacity: .75
}

export { propTypes, defaultProps }