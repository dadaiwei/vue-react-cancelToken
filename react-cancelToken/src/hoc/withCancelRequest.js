import React, { Component } from 'react';
import { generateCancelToken } from '../utils/index';

function withCancelRequest (WrappedComponent, pageName) {
  return class extends Component {
    constructor(props) {
      super(props);
      // 初始化生成cancelToken实例和cancel方法
      const { cancel, cancelToken } = generateCancelToken();
      this.cancelToken = cancelToken;
      this.cancel = cancel;
    }
    componentWillUnmount () {
      // 组件销毁阶段调用cancel方法取消请求
      let message = '取消页面请求';
      if (pageName) {
        message = `${pageName}取消请求`;
      }
      this.cancel(message);
    }
    render () {
      // 将cancelToken传给包裹组件
      return <WrappedComponent cancelToken={this.cancelToken} />;
    }
  };
}

export default withCancelRequest;