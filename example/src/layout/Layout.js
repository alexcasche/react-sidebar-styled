import React from 'react'
import Header from './Header'
import Demo from './Demo'
import Details from './Details'
import './Layout.css'

const Layout = ({state, children, updateOption}) => {
  return [
    <Header key="header"/>,
    <Demo key="demo" state={state} updateOption={updateOption}>{children}</Demo>,
    <Details key="details"/>
  ];
}

export default Layout;

