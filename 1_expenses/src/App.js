import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const INITIAL_EXPENSES = [
  { 
    id: 1,
    date: new Date(2020, 2, 28),
    title: 'toilet paper',
    amount: 12
  },
  { 
    id: 2,
    date: new Date(2021, 2, 28),
    title: 'Car Insurance',
    amount: 294.67
  },
  { 
    id: 3,
    date: new Date(2021, 3, 28),
    title: 'SEX',
    amount: 112
  },
  { 
    id: 4,
    date: new Date(2021, 5, 28),
    title: 'Fucking sex',
    amount: 911
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHadler = expense => {
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHadler} />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
