import React from 'react'
import { Button } from 'antd'
import { BrowserRouter, Link } from 'react-router-dom'

import './App.css';
import { RootRouter } from './routers/RootRouter';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/one">
            <Button type="primary">One</Button>
          </Link>
          <Link to="/two">
            <Button type="primary">Two</Button>
          </Link>
          <Link to="/three">
            <Button type="primary">Three</Button>
          </Link>
          <RootRouter/>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
