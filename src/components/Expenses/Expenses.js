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

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
            {expenses.map(expense => {
                return (
                    <ExpenseItem
                        expense={expense}
                        key={expense.id}
                    />
                )
            })}
        </Card>
    );
}

export default Expenses;