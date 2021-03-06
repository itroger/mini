import React, { Component } from 'react'
import Taro, { Config } from '@tarojs/taro'

import './app.less'

class App extends Component {

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init({ env: 'mini-5gnegcok4d5257e7' })
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
