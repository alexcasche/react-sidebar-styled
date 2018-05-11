'use strict';

import React from 'react';
import styled from 'styled-components';

const Styled = styled.span `
  width: 30px;
  height: 30px;
  display: block;
  position: relative;
  span {
    position: absolute;
    top: 5px;
    display: inline-block;
    background: white;
    width: 4px;
    height: 16px;
    transform: rotate(45deg);
    &:last-child {
      transform: rotate(-45deg);
    }
  }
`

const CloseIcon = () => {
  return (
    <Styled className="sidebar__close-icon">
      <span />
      <span />
    </Styled>
  )
}

export default CloseIcon;