import React, { useState, useEffect } from 'react';
import { Table, message } from 'antd';
import get from 'lodash/get';
import axios from 'axios';
import useCancelToken from '../hooks/useCancelToken';

function MessageManageponent () {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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
    axios.get('http://localhost:7000/message').then(res => {
      if (res.data && res.data.success) {
        const data = get(res, 'data.message', []);
        setData(data);
      }
    }).catch(err => {
      message.error(err.message || '获取数据失败');
    }).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    getMessageData();
    return () => {
      // cancel('取消请求');
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