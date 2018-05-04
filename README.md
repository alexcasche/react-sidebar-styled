<div style="width:60px"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" /></div> react-sidebar
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

Examples
---------------
<a style="width:130px;display:block;border:2px solid black;border-radius:4px;padding:8px 15px 6px;">
<img style="max-width:100%;" src="https://upload.wikimedia.org/wikipedia/commons/9/93/Black-Large.png">
</a>

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

Setup rollup and start file watch
```bash
npm install && npm start
yarn install && yarn add
```

Setup react app and start dev server
```bash
cd example
npm install && npm start
yarn install && yarn start
```

Shoutout
---------------
Big thanks to Travis Fischer for the awesome [create-react-library](https://github.com/transitive-bullshit/create-react-library) 🙌


License
---------------

MIT © [alexcasche](https://github.com/alexcasche)
