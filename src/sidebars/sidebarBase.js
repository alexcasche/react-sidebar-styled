'use strict';

import styled from 'styled-components';

const sidebarBase = styled.div `
  height: 100%;
  min-height: 100vh;
  max-height: ${props => props.isOpen || props.active ? '100vh' : ''};
  overflow: ${props => props.isOpen || props.active ? 'hidden' : ''};
  width: 100%;
  .sidebar__container {
    perspective: 1500px;
    transition: ${props => `transform ${props.speed}ms ${props.timing}`};
  }
  .sidebar__menu {
    position: fixed;
    right: ${props => props.side === 'right' ? '0' : '' };
    transform-style: preserve-3d;
    transition: inherit;
  }
  .sidebar__btn-open, .sidebar__btn-close {
    position: absolute;
    top: 0;
    right: ${props => props.side === 'right' ? '0': '' };
    border: 0;
    background: none;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
  }
  .sidebar__btn-close {
    right: 0;
  }
  .sidebar__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1100;
    background-color: rgb(32, 35, 42);
    display: ${props => !props.overlay || !props.isOpen ? 'none' : 'block'}
    opacity: ${props => props.isOpen ? '.75' : '0'};
    transition: ${props => `opacity ${props.speed}ms ${props.timing}`};
  }
`;
export default sidebarBase;