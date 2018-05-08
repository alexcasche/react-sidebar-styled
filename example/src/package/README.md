Reactrix Flex
===============

Lightweight Flex Component For React

[![NPM](https://img.shields.io/npm/v/reactrix-sidebar.svg)](https://www.npmjs.com/package/reactrix-sidebar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Travis](https://img.shields.io/travis/alexcasche/reactrix-sidebar.svg)](https://img.shields.io/travis/alexcasche/reactrix-sidebar)


Install
---------------

```bash
npm install --save reactrix-flex
yarn add reactrix-flex
```

Usage
---------------

```jsx
import React, { Component } from 'react'
import ReactFlex from 'reactrix-flex'

class Flex extends Component {
  render () {
    const options = {
      breakPoints: [ 640, 900, 1200 , 1400],
      rowItems: [ 2, 3, 4, 5]
    }
    return (
      <ReactFlex {...options}>
        <div>Flex Item</div>
        <div>Flex Item</div>
      </ReactFlex>
    )
  }
}
```

Features
---------------
- Only two peer depencies (react/prop-types) ✔️
- Works great on all devices/browsers ✔️
- Easy to use BEM class hooks ✔️

Examples
---------------
- Demo - https://alexcasche.github.io/reactrix-flex/
- Sandbox - https://codesandbox.io/s/jlzno327x9

Props
---------------

| Prop          | Type      | Default              |   Description: Options   |
|---------------|-----------|----------------------|--------------------------|
| `breakPoints` |  _array_  |  `[ 600, 900, 1280]` | Screen width: `number`   |
| `rowItems`    |  _array_  |  `[ 2, 3, 4 ]`       | Item count: `number`     |


Classes
---------------
| Class                  | Description        |
|------------------------|--------------------|
| `.flex`                |  Outer component wrapper |
| `.flex__cotainer`      |  Inner component wrapper  |
| `.flex__item`          |  Item outer wrapper  |
| `.flex__content`       |  Item inner wrapper  |


Development
---------------
Follow these steps to setup a local development environment.  Use yarn or npm - not both.
1. Clone the repo from Github

```bash
git clone https://github.com/alexcasche/react-sidebar
```

2. Setup project & start rollup watch

```bash
npm install && npm start
yarn install && yarn add
```

3. Setup react app & start dev server

```bash
cd example
npm install && npm start
yarn install && yarn start
```

Shoutout
---------------
Interested in publishing your own packages?  Checkout [create-react-library](https://github.com/transitive-bullshit/create-react-library) 🙌


License
---------------
MIT © [alexcasche](https://github.com/alexcasche)