<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="50px" /> react-sidebar
===============

Flexible React Sidebar Component 🤘

[![NPM](https://img.shields.io/npm/v/@alexcasche/react-sidebar.svg)](https://www.npmjs.com/package/@alexcasche/react-sidebar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Install
---------------

```bash
npm install --save react-sidebar
yarn add react-sidebar
```

Usage
---------------

```jsx
import React, { Component } from 'react'
import ReactSidebar from '@alexcasche/react-sidebar'
import '@alexcasche/react-sidebar/style.css'

class ReactSidebar extends Component {
  render () {
    const options = {
      side: "left",
      effect: "slide-out",
      speed: 250,
      timing: 'ease-in-out'
    }
    return (
      <Sidebar {...options}>
        <div>Menu Goes Here</div>
        <div>Page Goes Here</div>
      </Sidebar>
    )
  }
}
```

Example
---------------
Interactive example - 

Playground
---------------

Props
---------------

Classes
---------------

License
---------------

MIT © [alexcasche](https://github.com/alexcasche)
