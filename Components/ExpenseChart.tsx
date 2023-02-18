import * as React from 'react';
import { ItemType } from '../App';
import Chart from './Chart';

const ExpenseChart = (props: { list: ItemType[] }) => {
  const chartDtatapoints = [
    { lable: 'Jan', value: 0 },
    { lable: 'Feb', value: 0 },
    { lable: 'Mar', value: 0 },
    { lable: 'Apr', value: 0 },
    { lable: 'May', value: 0 },
    { lable: 'Jun', value: 0 },
    { lable: 'Jul', value: 0 },
    { lable: 'Aug', value: 0 },
    { lable: 'Sep', value: 0 },
    { lable: 'Oct', value: 0 },
    { lable: 'Nov', value: 0 },
    { lable: 'Dec', value: 0 },
  ];

  console.log(props.list);
  for (const expense of props.list) {
    const expenseMonth = new Date(expense.date).getMonth();
    chartDtatapoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDtatapoints} />;
};

export default ExpenseChart;
