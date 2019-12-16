import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DataManage from './DataManage.jsx';
import MessageManageponent from './MessageManage.jsx';

class Home extends Component {
  render () {
    return (
      <Switch>
        <Route path="/data" exact component={DataManage}></Route>
        <Route path="/message" exact component={MessageManageponent}></Route>
      </Switch>
    );
  }
}

export default Home;
