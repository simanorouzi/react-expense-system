import * as React from 'react';
import ExpenceItem from './ExpenceItem';
import '../UI/expence-style.css';
import ExpenseFilter from './ExpenseFilter';
import { ItemType } from '../App';
import ExpenseContent from '../Components/ExpenseContent';
import Chart from './Chart';
import ExpenseChart from '../Components/ExpenseChart';

const ExpenceList = (props: { list: ItemType[] }) => {
  var expenseList = props.list;

  const GetYear = (date: string) => {
    return new Date(date).getFullYear();
  };

  const [filteredYear, setFilteredYear] = React.useState();
  const onFilterHandler = (filterValue) => {
    setFilteredYear(filterValue);
  };

  expenseList = props.list.filter((expense) => {
    return (
      filteredYear == undefined ||
      (filteredYear && GetYear(expense.date) >= filteredYear)
    );
  });

  return (
    <div className="out-dive-expense">
      <ExpenseFilter selected={filteredYear} onFilter={onFilterHandler} />
      <ExpenseChart list={expenseList} />
      <div className="expence-list">
        <ExpenseContent list={expenseList} />
      </div>
    </div>
  );
};
export default ExpenceList;
