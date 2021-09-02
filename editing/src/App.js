import React from 'react';

import ServiceAdd from './components/ServiceAdd/ServiceAdd';
import ServiceList from './components/ServiceList/ServiceList';

import './App.css';

function App() {
  return (
    <div className="Services">
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}

export default App;
