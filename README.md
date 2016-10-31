# react-smart-gesture
鼠标手势组件 [smart-gesture ](https://github.com/ElemeFE/smart-gesture) 的 React 版本。

## 安装

```sh
npm install react-smart-gesture --save
```

## 使用

```jsx
import React, { Component } from 'react';
import SmartGesture from 'react-smart-gesture';

class App extends Component {
  _onGesture(res, points) {
    console.log(res, points);
  }

  _onGesture(directionList) {
    console.log(directionList);
  }

  render() {
    const options = {
      lineColor: 'red',
      timeDelay: 0,
      triggerMouseKey: 'left',
      onSwipe: this._onSwipe,
      onGesture: this._onGesture,
    };
    return (
      <div className="demo">
		<SmartGesture options={options} />
      </div>
    );
  }
}

export default App;
```

详细使用方法可以参考: [demo](https://elemefe.github.io/react-smart-gesture/)

## 文档

参考 [smart-gesture 文档](https://github.com/ElemeFE/smart-gesture#smart-gesture)

## 贡献指南

请在提交 PR 前阅读我们的[贡献指南](./.github/CONTRIBUTING_zh-cn.md)

## License

MIT
