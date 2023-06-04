import React from 'react';
import './App.css';
import NameFilter from './components/NameFilter';
import NumberFilter from './components/NumberFilter';
import OrderFilter from './components/OrderFilter';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <NameFilter />
      <NumberFilter />
      <OrderFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
