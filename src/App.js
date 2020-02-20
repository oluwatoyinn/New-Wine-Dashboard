import React from 'react';
import './App.css';
import DashBoard from './views/DashBoard'
import AdminLTE from 'admin-lte'
import Bin from './components/Bin';
import Tabless from './views/member/Tabless';

function App() {
  return (
    <>
    <div className='member'>
          {/* <Tabless /> */}
          <DashBoard />
          {/* <Bin /> */}
      </div>
    </>
  );
}

export default App;
