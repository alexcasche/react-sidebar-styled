import { PropTypes as t } from 'prop-types'

const propTypes = {
  side: t.oneOf(['left', 'right']),
  effect: t.oneOf(['slide', 'reveal']),
  speed: t.number,
  timing: t.string,
  showOverlay: t.bool,
  overlayColor: t.string,
  overlayOpacity: t.number
}
const defaultProps = {
  side: 'left',
  effect: 'slide',
  speed: 250,
  timing: 'ease-in-out',
  showOverlay: true,
  overlayColor: '#20232A',
  overlayOpacity: .75
}

export { propTypes, defaultProps }