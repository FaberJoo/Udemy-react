import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({ expenses }) => {
    const [filterYear, setFilterYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    }

    const filteredExpenses = expenses.filter(expense =>
        expense.date.getFullYear().toString() === filterYear
    );

    let expenseContents = <p>No Expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expenseContents = filteredExpenses.map(expense => (
            <ExpenseItem
                expense={expense}
                key={expense.id}
            />
        ))
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
            {expenseContents}
        </Card>
    );
}

export default Expenses;