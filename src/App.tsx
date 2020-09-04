import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import Transaction from './components/Transaction';
import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <div>
      <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <History />
        <Transaction />
      </div>
      </GlobalProvider> 
    </div>
  );
}

export default App;
