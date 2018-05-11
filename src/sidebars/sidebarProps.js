import React from 'react'
import { PropTypes as t } from 'prop-types'
import CloseIcon from '../icons/CloseIcon'
import OpenIcon from '../icons/OpenIcon'

const propTypes = {
  effect: t.oneOf([
    'slide',
    'push',
    'fall',
    'reveal',
    'diverge',
    'uncover',
    'shrink',
    'grow',
    'press'
  ]),
  side: t.oneOf(['left', 'right']),
  speed: t.number,
  timing: t.string,
  overlay: t.bool,
  icons: t.arrayOf(t.func),
}
const defaultProps = {
  effect: 'slide',
  side: 'left',
  speed: 500,
  timing: 'ease',
  overlay: true,
  icons: [
    () => <CloseIcon />,
    () => <OpenIcon />,
  ],
}

export { propTypes, defaultProps }
