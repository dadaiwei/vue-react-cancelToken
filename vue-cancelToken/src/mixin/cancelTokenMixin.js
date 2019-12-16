const CancelToken = axios.CancelToken;

const cancelTokenMixin = {
  data () {
    return {
      cancelToken: null,
      cancel: null
    };
  },

  created () {
    this.cancelToken = new CancelToken(c => {
      this.cancel = c;
    });
  },

  beforeDestroy () {
    this.cancel(`${this.pageName}取消请求`);
  }
};

export default cancelTokenMixin;