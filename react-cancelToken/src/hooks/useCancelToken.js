import { useState } from 'react';
import axios from 'axios';

export default function useCancelToken () {
  let cancel = null;
  const cancelTokenIns = new axios.CancelToken(c => {
    cancel = c;
  });
  const [cancelToken,] = useState(cancelTokenIns);
  return {
    cancel,
    cancelToken
  };
}