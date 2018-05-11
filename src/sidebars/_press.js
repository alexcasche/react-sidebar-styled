'use strict'

import sidebarBase from './sidebarBase'
import sidebarFactory from './sidebarFactory'

const Styled = sidebarBase.extend`
  .sidebar__menu {
    z-index: 1;
    transform: ${props =>
      !props.isOpen
        ? props.side === 'right'
          ? 'translate3d(100%, 0, 0)'
          : 'translate3d(-100%, 0, 0)'
        : 'translate3d(0, 0, 0)'};
  }
  .sidebar__page {
    transform: ${props =>
      !props.isOpen
        ? 'rotateY(0)'
        : props.side === 'right'
          ? 'rotateY(10deg)'
          : 'rotateY(-10deg)'};
    transform-origin: ${props =>
      props.side === 'right' ? '0% 50%' : '100% 50%'};
  }
`

export default sidebarFactory(Styled)
