import React from 'react';
import './App.css';
import Header from './components/header'
import Money from './components/Money'
import Income from './components/Income'
import CostList from './components/costList'
import AddTransaction from './components/addTransaction'
import {GlobalProvider}  from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Money/>
      <Income/>
      <CostList/>
      <AddTransaction/>
   
    </GlobalProvider>
  );
}

export default App;
