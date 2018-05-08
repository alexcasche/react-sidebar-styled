import React from 'react';
import { PropTypes as t } from 'prop-types'

const propTypes = {
  breakPoints: t.arrayOf(t.number),
  rowItems: t.arrayOf(t.number)
}
const defaultProps = {
  breakPoints: [ 640, 900, 1280 ],
  rowItems: [ 2, 3, 4 ]
}

export { propTypes, defaultProps }