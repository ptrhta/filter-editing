import React from 'react';

import ServiceFilterProvider from './components/ServiceFilterProvider/ServiceFilterProvider';
import ServiceAdd from './components/ServiceAdd/ServiceAdd';
import ServiceFilter from './components/ServiceFilter/ServiceFilter';
import ServiceList from './components/ServiceList/ServiceList';

import './App.css';

function App() {
  return (
    <ServiceFilterProvider>
      <div className="Services">
        <ServiceAdd />
        <ServiceFilter />
        <ServiceList />
      </div>
    </ServiceFilterProvider>
  );
}

export default App;
