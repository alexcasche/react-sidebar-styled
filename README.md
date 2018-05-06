React Sidebar
===============

Flexible React Sidebar Component

[![NPM](https://img.shields.io/npm/v/@alexcasche/react-sidebar.svg)](https://www.npmjs.com/package/@alexcasche/react-sidebar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Install
---------------

```bash
npm install --save @reactrix/react-sidebar
yarn add @reactrix/react-sidebar
```

Usage
---------------
- Import the module along with the base styles
- Pass desired props to component using spread operator
<br/><br/>

```jsx
import React, { Component } from 'react'
import ReactSidebar from '@reactrix/react-sidebar'
import '@reatrix/react-sidebar/style.css'

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
- Demo - https://alexcasche.github.io/react-sidebar/
- Sandbox - https://github.com/alexcasche

Props
---------------

| Prop              | Type        | Default     |   Description: Options   |
|-------------------|-------------|-------------|-------------|
| `side`            |  _string_   |  `left`     | Menu location: `left` `right` |
| `effect`          |  _string_   |  `slide`    | Transition effect: `slide` `push` `fall` `reveal` `diverge` `uncover` `shrink` `grow` `press` |
| `speed`           |  _number_   |  `500`      | Transition speed (milliseconds)  |
| `timing`          |  _string_   |  `ease`     | Transition timing function:   |
| `overlay`         |  _boolean_  |  `true`     | Display overlay: `true` `false` |

Classes
---------------

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
Big thanks to Travis Fischer for the awesome [create-react-library](https://github.com/transitive-bullshit/create-react-library) 🙌


License
---------------

MIT © [alexcasche](https://github.com/alexcasche)