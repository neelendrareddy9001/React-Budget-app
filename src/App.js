import Budget from './component/Budget';
import React from 'react';
import Remaining from './component/Remaining';
import ExpenseTotal from './component/ExpenseTotal';
import ExpenseList from './component/ExpenseLIst';
import 'bootstrap/dist/css/bootstrap.css';
import AddExpenseForm from './component/AddExpenseForm';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
        <div className='container'>
      <h1 className='m-4 text-center '>My Budget Planner</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget/>
        </div>
        <div className='col-sm p-2'>
          <Remaining/>
        </div>
        <div className='col-sm p-2'>
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
      <div className='row addEpense'>
        <div className='col-sm'>
          <AddExpenseForm />
        </div>
      </div>
    </div>
    </AppProvider>
  )
};

export default App;