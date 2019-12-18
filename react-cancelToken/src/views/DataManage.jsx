import React, { Component } from 'react';
import { Table, message } from 'antd';
import axios from 'axios';
import get from 'lodash/get';
import withCancelRequest from '../hoc/withCancelRequest';

class DataManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false
    };
    this.columns = [
      {
        title: '索引',
        dataIndex: 'index',
        key: 'index',
        align: 'center'
      },
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
      },
      {
        title: '个数',
        dataIndex: 'num',
        key: 'num',
        align: 'center'
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        align: 'center',
        render: text => `${text}元`
      },
      {
        title: '总价',
        dataIndex: 'total',
        key: 'total',
        align: 'center',
        render: text => `${text}元`
      }
    ];
  }

  componentDidMount () {
    const { cancelToken } = this.props;
    this.setState({
      loading: true
    });
    axios.get('http://localhost:7000/data', { cancelToken }).then(res => {
      if (res.data && res.data.success) {
        const data = get(res, 'data.fruits', []);
        this.setState({
          data,
          loading: false
        });
      }
    }).catch(err => {
      const errMessage = err.message || '获取数据失败';
      console.log(errMessage);
      message.error(errMessage);
    });
  }

  render () {
    const { data, loading } = this.state;
    return (
      <Table
        bordered
        rowKey="index"
        columns={this.columns}
        dataSource={data}
        loading={loading}
        locale={{ emptyText: '暂无数据' }}>
      </Table>);
  }
}

export default withCancelRequest(DataManage, '数据管理页面');