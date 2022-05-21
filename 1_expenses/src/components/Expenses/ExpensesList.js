import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = ({ filteredExpenses }) => {

    if (filteredExpenses.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>
                Expenses no found.
            </h2>
        )
    }

    return (
        <ul className='expenses-list'>
            {
                filteredExpenses.map(expense => (
                    <ExpenseItem
                        expense={expense}
                        key={expense.id}
                    />
                ))
            }
        </ul>
    );
}

export default ExpensesList;