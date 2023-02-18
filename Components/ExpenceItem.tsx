import * as React from 'react';
import { ItemType } from '../App';
import ExpenceDate from './ExpenceDate';

const ExpenceItem = (props: ItemType) => {
  var { title, id, date } = props;

  const [currentTitle, setTitle] = React.useState(title);

  const PrintHi = () => {
    setTitle('I changed!');
  };
  const year = new Date(date).getFullYear().toString();
  return (
    <div className="expense-item">
      <ExpenceDate date={date} />
      <h2>{currentTitle}</h2>
      <button onClick={PrintHi}>click me</button>
    </div>
  );
};

export default ExpenceItem;
