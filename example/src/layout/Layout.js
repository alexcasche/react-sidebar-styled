import React from 'react'
import Header from './Header'
import Demo from './Demo'
import Details from './Details'
import './Layout.css'

const Layout = (props) => {
  return [
    <Header key="header"/>,
    <Demo key="demo" {...props} />,
    <Details key="details"/>
  ];
}

export default Layout;

