<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" style="width:60px;position:relative;top:10px;left:-10px;margin-right:-10px;" /> react-sidebar
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

Development
---------------
Clone repo

```bash
git clone https://github.com/alexcasche/react-sidebar
```

Setup & start rollup
```bash
cd react-sidebar
npm start
```

Setup & start dev server
<br/>``cd example``
<br/>`npm install` or `yarn install`
<br/>`npm start` or `yarn start`


License
---------------

MIT © [alexcasche](https://github.com/alexcasche)
