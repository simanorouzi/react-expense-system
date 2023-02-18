import * as React from 'react';

type FilterType = {
  onFilter: (yearValue: string) => void;
  selected: string;
};

const ExpenseFilter = (props: FilterType) => {
  const ChangeHandler = (event) => {
    props.onFilter(event.target.value);
  };
  return (
    <div>
      <label htmlFor="year">Filtered By Year</label>
      <select
        id="year"
        className="filter-select"
        value={props.selected}
        onChange={ChangeHandler}
      >
        <option value="0">select</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
