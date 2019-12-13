import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DataManage from '../views/DataManage.jsx';
import MessageManageponent from '../views/MessageManage.jsx';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function Main (props) {
  const { history } = props;
  const tabChang = key => history.push(`/${key}`);
  return (
    <React.Fragment>
      <Tabs type="card" onChange={tabChang}>
        <TabPane tab="数据管理" key="data"></TabPane>
        <TabPane tab="信息管理" key="message"></TabPane>
      </Tabs>
      <Redirect from="/" to="/data"></Redirect>
      <Switch>
        <Route path="/data" exact component={DataManage}></Route>
        <Route path="/message" exact component={MessageManageponent}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default withRouter(Main);