import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {

    const [formToggle, setFormtoggle] = useState(false);

    const changeToggleHandler = () => {
        setFormtoggle(prevToggle => !prevToggle);
    }

    let expenseForm = <button onClick={changeToggleHandler}>Add Expense</button>;

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            date: enteredExpenseData.date,
            id: Math.random().toString()
        }

        onAddExpense(expenseData);
    }

    if (formToggle) {
        expenseForm = <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onChangeToggleHandler={changeToggleHandler} />
    }

    return (
        <div className='new-expense'>
            { expenseForm }
        </div>
    )
}

export default NewExpense;