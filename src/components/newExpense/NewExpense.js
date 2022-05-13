import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {

    const SaveExpenseDataHandler = (EnteredExpenseData) => {
        const expenseData = {
            ...EnteredExpenseData,
            id: Math.random().toString()
        }

        onAddExpense(expenseData);

        console.log(expenseData);
    }


    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;