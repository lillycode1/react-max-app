import './App.css';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    { title: 'Car insurance', amount: 234.23, date: new Date(2021, 2,23)},
    { title: 'Home insurance', amount: 134.33, date: new Date(2021, 2,26)},
    { title: 'Fire insurance', amount: 34.55, date: new Date(2021, 2,20)},
  ];

  return (
   <div>
      <Expenses items={expenses}/>
   </div>
  );
}

export default App;
