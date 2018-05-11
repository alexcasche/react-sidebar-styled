'use strict'

import styled from 'styled-components'

const sidebarBase = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  .sidebar__container {
    perspective: 1500px;
    transition: ${props => `transform ${props.speed}ms ${props.timing}`};
  }
  .sidebar__menu {
    position: fixed;
    right: ${props => (props.side === 'right' ? '0' : '')};
    transform-style: preserve-3d;
    transition: inherit;
    height: 100vh;
  }
  .sidebar__page {
    max-height: ${props => (props.isOpen || props.active ? '100vh' : '')};
    overflow: ${props => (props.isOpen || props.active ? 'hidden' : '')};
    transition: ${props => `transform ${props.speed}ms ${props.timing}`};
  }
  .sidebar__overlay {
    max-height: inherit;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(32, 35, 42);
    display: ${props => (!props.overlay || !props.isOpen ? 'none' : 'block')}
    opacity: ${props => (props.isOpen ? '.75' : '0')};
    transition: ${props => `opacity ${props.speed}ms ${props.timing}`};
  }
  .sidebar__open {
    position: absolute;
    top: 0;
    left: ${props => (props.side === 'right' ? '' : '40px')};
    right: ${props => (props.side === 'right' ? '40px' : '')};
  }
  .sidebar__close {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 60px;
    padding-right: 10px;
    box-sizing: border-box;
  }
  .sidebar__close-btn, .sidebar__open-btn {
    display: block;
    background: transparent;
    position: relative;
    padding: 0;
    border: 0;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
  }
`
export default sidebarBase
