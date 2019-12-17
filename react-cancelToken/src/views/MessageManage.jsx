import React, { useState, useEffect } from 'react';
import { Table, message } from 'antd';
import get from 'lodash/get';
import axios from 'axios';
import { generateCancelToken } from '../utils/index';

let cancel = null;
let cancelToken = null;

function MessageManageponent () {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  if (!cancel && !cancelToken) {
    const { cancel: cancelIns, cancelToken: cancelTokenIns } = generateCancelToken();
    cancel = cancelIns;
    cancelToken = cancelTokenIns;
  }
  const columns = [
    {
      title: '索引',
      dataIndex: 'index',
      align: 'center'
    },
    {
      title: '名称',
      dataIndex: 'name',
      align: 'center'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      align: 'center'
    },
    {
      title: '财产',
      dataIndex: 'money',
      align: 'center',
      render: text => `${text}元`
    }
  ];

  const getMessageData = () => {
    setLoading(true);
    axios.get('http://localhost:7000/message', { cancelToken }).then(res => {
      if (res.data && res.data.success) {
        const data = get(res, 'data.message', []);
        setData(data);
        setLoading(false);
      }
    }).catch(err => {
      const message = err.message || '获取数据失败';
      console.log(message);
      message.error(message);
    });
  };

  useEffect(() => {
    getMessageData();
    return () => {
      cancel('取消信息管理页面请求');
      cancel = null;
      cancelToken = null;
    };
  }, []);

  return (
    <Table
      bordered
      rowKey="index"
      columns={columns}
      dataSource={data}
      loading={loading}
      locale={{ emptyText: '暂无数据' }}>
    </Table>);
}


export default MessageManageponent;