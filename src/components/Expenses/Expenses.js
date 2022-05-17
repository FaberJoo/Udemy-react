import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'

const Expenses = ({ expenses }) => {
    const [filterYear, setFilterYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    }

    const filteredExpenses = expenses.filter(expense =>
        expense.date.getFullYear().toString() === filterYear
    );

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;