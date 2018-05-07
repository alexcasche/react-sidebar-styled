React Sidebar
===============

Flexible React Sidebar Component

[![NPM](https://img.shields.io/npm/v/reactrix-sidebar.svg)](https://www.npmjs.com/package/reactrix-sidebar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Travis](https://img.shields.io/travis/alexcasche/reactrix-sidebar.svg)](https://img.shields.io/travis/alexcasche/reactrix-sidebar)


Install
---------------

```bash
npm install --save reactrix-sidebar
yarn add reactrix-sidebar
```

Usage
---------------
- Import the module along with the base styles
- Pass desired props to component using spread operator
<br/><br/>

```jsx
import React, { Component } from 'react'
import ReactSidebar from 'reactrix-sidebar'
import 'reactrix-sidebar/index.css'

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

Gotcha
---------------
⚠️ The component uses FontAwesome icons by default. If you're not passing in custom icons, make sure to include the link below in the head tag of your index.html file.

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">
```

Features
---------------
- Only two peer depencies (react/prop-types)
- Large selection of smooth transitions
- Easy to use BEM class hooks

Examples
---------------
- Demo - https://alexcasche.github.io/reactrix-sidebar/
- Sandbox - https://codesandbox.io/s/jlzno327x9

Props
---------------

| Prop              | Type        | Default     |   Description: Options   |
|-------------------|-------------|-------------|-------------|
| `side`            |  _string_   |  `left`     | Menu location: `left` `right` |
| `effect`          |  _string_   |  `slide`    | Transition effect: `slide` `push` `fall` `reveal` `diverge` `uncover` `shrink` `grow` `press` |
| `speed`           |  _number_   |  `500`      | Transition speed (milliseconds)  |
| `timing`          |  _string_   |  `ease`     | Transition timing function:   |
| `overlay`         |  _boolean_  |  `true`     | Display overlay: `true` `false` |
| `buttons`         |  _array_    |  `null`     | Custom icons: `[ component, component ]`|

### Custom Icons  ##
Set the icons prop equal to an array consisting of two components.

```jsx
function openButton {
  return <i className="fas fa-times" />
}
function closeButton {
  return <i className="fas fa-bars" />
}
...
  const options = {
    icons: [ openButton, closeButton ]
  }
...
  <Sidebar {...options} />
...

```

Classes
---------------
| Class                  | Description        |
|------------------------|--------------------|
| `.sidebar`             |  Outer component wrapper |
| `.sidebar--open`       |  Outer component open  |
| `.sidebar__cotainer`   |  Inner component wrapper  |
| `.sidebar__menu`       |  Outer menu wrapper  |
| `.sidebar__nav`        |  Inner menu wrapper  |
| `.sidebar__page`       |  Page content wrapper  |
| `.sidebar__overlay`    |  Page overlay  |
| `.sidebar__btn-open`   |  Open menu button  |
| `.sidebar__btn-close`  |  Close menu button  |


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