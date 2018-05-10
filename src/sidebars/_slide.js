'use strict';

import sidebarBase from './sidebarBase';
import sidebarFactory from './sidebarFactory';

const Styled = sidebarBase.extend `
  .sidebar__menu {
    transform: ${props => (!props.isOpen)
      ? (props.side === 'right')
        ? 'translate3d(100%, 0, 0)'
        : 'translate3d(-100%, 0, 0)'
      : 'translate3d(0, 0, 0)'
    }};
  }
`;

export default sidebarFactory(Styled);