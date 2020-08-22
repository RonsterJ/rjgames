import React from 'react';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Articles from './Components/Articles/Articles'
import ActionBar from './Components/ActionBar/ActionBar'

import './App.css';

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      <div className='app-body'>
        {/* dashboard */}
        <Dashboard />
        {/* articles */}
        <Articles />
      </div>
      {/* action bar */}
      <ActionBar />
    </div>
  );
}

export default App;
