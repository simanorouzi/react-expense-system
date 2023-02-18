import * as React from 'react';
import './style.css';
import NewExpense from './Components/NewExpense';
import ExpenceList from './Components/ExpenceList';
import CssCourseForm from './Components/CssCourse';

export type ItemType = {
  id: string;
  title: string;
  date: string;
  amount: number;
};

export type DataPointFormat = {
  lable: string;
  value: number;
};

const DataList: ItemType[] = [
  {
    id: '0',
    title: 'book',
    date: '2023-02-01',
    amount: 10,
  },
  {
    id: '1',
    title: 'bag',
    date: '2020-03-01',
    amount: 10,
  },
  {
    id: '2',
    title: 'ingredient',
    date: '2020-02-03',
    amount: 10,
  },
  {
    id: '3',
    title: 'others',
    date: '2021-01-01',
    amount: 10,
  },
];
const App = () => {
  const [expenses, setExpenses] = React.useState(DataList);
  const AddExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler} />
      <ExpenceList list={expenses} />
      {/* <CssCourseForm /> */}
    </div>
  );
};

export default App;
