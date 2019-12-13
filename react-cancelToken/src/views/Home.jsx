import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DataManage from './views/DataManage.jsx';
import MessageManageponent from './views/MessageManage.jsx';

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
