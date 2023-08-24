import Budget from './component/Budget';
import React from 'react';
import Remaining from './component/Remaining';
import ExpenseTotal from './component/ExpenseTotal';
import ExpenseList from './component/ExpenseLIst';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <div className='container'>
      <h1 className='mt-3'>My Budget Planner</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget/>
        </div>
        <div className='col-sm'>
          <Remaining/>
        </div>
        <div className='col-sm'>
          <ExpenseTotal/>
        </div>
      </div>
      <h3 className='mt-3'>Expenses</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ExpenseList />
        </div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
      <div className='row'>
        
      </div>
    </div>
  )
};

export default App;