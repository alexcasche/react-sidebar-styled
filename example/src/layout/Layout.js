import React from 'react'
import Header from './Header'
import Demo from './Demo'
import Details from './Details'
import './Layout.css'

const Layout = ({updateOption}) => {
  return [
    <Header key="header"/>,
    <Demo key="demo" updateOption={updateOption} />,
    <Details key="details"/>
  ];
}

export default Layout;

