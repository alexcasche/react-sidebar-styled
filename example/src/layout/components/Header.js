import React from 'react';
import logo from '../logo.svg';
import Styled from '../styled/Header'

const Header = () => {
  return (
    <Styled className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <p>alexcasche</p>
      <a href="https://github.com/alexcasche/reactrix-sidebar" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github-alt" />
      </a>
      <a href="https://npmjs.org/reactrix-sidebar" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-npm" />
      </a>
    </Styled>
  );
}

export default Header;