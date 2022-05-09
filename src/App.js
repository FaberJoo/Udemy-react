import Expenses from "./components/Expenses";

function App() {
  const expenses = [
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
