import * as React from 'react';

type dateType = {
  date: string;
};
const ExpenceDate = (props: dateType) => {
  var { date } = props;
  return <div className="date-div">{date}</div>;
};

export default ExpenceDate;
