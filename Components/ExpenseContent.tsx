import * as React from 'react';
import { ItemType } from '../App';
import ExpenceItem from '../Components/ExpenceItem';

const ExpenseContent = (props: { list: ItemType[] }) => {
  if (props.list.length == 0) return <p>Not Found Item</p>;
  return props.list.map((expense) => (
    <ExpenceItem
      title={expense.title}
      date={expense.date}
      id={expense.id}
      key={expense.id}
    />
  ));
};
export default ExpenseContent;
