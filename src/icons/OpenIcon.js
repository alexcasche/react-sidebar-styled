'use strict';

import React from 'react';
import styled from 'styled-components';

const Styled = styled.span `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 26px;
  position: relative;
  span {
    background-color: white;
    display: inline-block;
    width: 30x;
    height: 4px;
  }
`

const OpenIcon = () => {
  return (
    <Styled className="sidebar__open-icon">
      <span />
      <span />
      <span />
    </Styled>
  )
}

export default OpenIcon;