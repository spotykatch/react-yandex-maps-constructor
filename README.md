# react-yandex-maps-constructor

> React component for Yandex Maps Constructor

[![NPM](https://img.shields.io/npm/v/react-yandex-maps-constructor.svg)](https://www.npmjs.com/package/react-yandex-maps-constructor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-yandex-maps-constructor
```

## Usage
Copy full script code of your Yandex Map Constructor and paste it to script attribute.

```jsx
import React, { Component } from 'react'

import YandexMapConstructor from 'react-yandex-maps-constructor'

class Example extends Component {
  render () {
    return (
      <YandexMapConstructor script='<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A82bea7622863f2ed81e94d89127e73a7821886976f226e3e00b727819a2835ea&amp;width=500&amp;height=300&amp;lang=ru_RU&amp;scroll=true"></script>' />
    )
  }
}
```

## License

MIT © [spotykatch](https://github.com/spotykatch)
