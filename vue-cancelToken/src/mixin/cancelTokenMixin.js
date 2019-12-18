import axios from 'axios';

const CancelToken = axios.CancelToken;

const cancelTokenMixin = {
  data () {
    return {
      cancelToken: null, // cancelToken实例
      cancel: null // cancel方法
    };
  },

  created () {
    // 初始化阶段生成cancelToken实例，注册cancel方法
    this.cancelToken = new CancelToken(c => {
      this.cancel = c;
    });
  },

  beforeDestroy () {
    // 组件销毁阶段调用cancel方法取消请求
    this.cancel(`${this.pageName}取消请求`);
  }
};

export default cancelTokenMixin;