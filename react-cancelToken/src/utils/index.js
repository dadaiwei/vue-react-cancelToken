import axios from 'axios';

export const generateCancelToken = () => {
  let cancel = null;
  const cancelToken = new axios.CancelToken(c => {
    cancel = c;
  });
  return {
    cancel,
    cancelToken
  };
};