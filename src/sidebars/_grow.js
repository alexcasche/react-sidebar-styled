'use strict';

import sidebarBase from './sidebarBase';
import sidebarFactory from './sidebarFactory';

const Styled = sidebarBase.extend `
  .sidebar__container {
    perspective-origin: ${props => (props.side === 'right')
      ? '100% 50%' 
      : '0% 50%'
    };
  }
  .sidebar__menu {
    z-index: 1;
    transform: ${props => (!props.isOpen)
      ? `translate3d(0, 0, -${props.menuWidth})`
      : 'translate3d(0, 0, 0)'
    };
  }
  .sidebar__page {
    transform: ${props => (!props.isOpen)
      ? 'translate3d(0, 0, 0)'
      : (props.side === 'right')
        ? `translate3d(-${props.menuWidth}, 0, 0)`
        : `translate3d(${props.menuWidth}, 0, 0)`
    };
  }
`;

export default sidebarFactory(Styled);