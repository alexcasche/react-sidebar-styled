import React from 'react';
import logo from './logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <p>React</p>
      <a href="https://github.com/alexcasche/react-sidebar" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github-alt" />
      </a>
      <a href="https://npmjs.org/~alexcasche" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-npm" />
      </a>
    </header>
  );
}

export default Header;