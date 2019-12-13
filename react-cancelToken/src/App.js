import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './router/index';
import './index.scss';
import 'antd/dist/antd.css';

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Main></Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
