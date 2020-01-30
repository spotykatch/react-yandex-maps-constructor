import React, { Component } from 'react'

import ExampleComponent from 'react-yandex-maps-constructor'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent script='<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A82bea7622863f2ed81e94d89127e73a7821886976f226e3e00b727819a2835ea&amp;width=500&amp;height=300&amp;lang=ru_RU&amp;scroll=true"></script>' />
      </div>
    )
  }
}
