import * as React from 'react';
import { ItemType } from '../App';
import '../UI/expence-style.css';

type formatForm = {
  onSaveData: (formatValue: ItemType) => void;
  onCancel: () => void;
};
const ExpenseForm = (props: formatForm) => {
  const [formValues, setFormValues] = React.useState({
    title: '',
    amount: '',
    date: '',
  });

  const [isValid, SetValidation] = React.useState({
    isValidTitle: false,
    isValidAmount: false,
    isValidDate: false,
  });
  const InputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      SetValidation({ ...isValid, isValidTitle: true });
    } else {
      SetValidation({ ...isValid, isValidTitle: false });
    }
    setFormValues({
      ...formValues,
      title: event.target.value,
    });
  };

  const AmountChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      SetValidation({ ...isValid, isValidAmount: true });
    } else {
      SetValidation({ ...isValid, isValidAmount: false });
    }
    setFormValues({
      ...formValues,
      amount: event.target.value,
    });
  };
  const DateChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      SetValidation({ ...isValid, isValidDate: true });
    } else {
      SetValidation({ ...isValid, isValidDate: false });
    }
    setFormValues({
      ...formValues,
      date: event.target.value,
    });
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    if (isValid.isValidAmount && isValid.isValidTitle && isValid.isValidDate) {
      props.onSaveData(formValues);
      setFormValues({
        title: '',
        amount: '',
        date: '',
      });
    }
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="form-style">
        <div
          className={`form-control ${!isValid.isValidTitle ? 'invalid' : ''}`}
        >
          <label>Title:</label>
          <input
            type="text"
            value={formValues.title}
            onChange={InputChangeHandler}
          />
        </div>
        <div>
          <label style={{ color: !isValid.isValidAmount ? 'red' : '#fff' }}>
            Amount:
          </label>
          <input
            style={{ borderColor: !isValid.isValidAmount ? 'red' : '#eee' }}
            type="number"
            value={formValues.amount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div>
          <label style={{ color: !isValid.isValidDate ? 'red' : '#fff' }}>
            Date:
          </label>
          <input
            style={{ borderColor: !isValid.isValidDate ? 'red' : '#eee' }}
            type="date"
            value={formValues.date}
            onChange={DateChangeHandler}
          />
        </div>
        <div>
          <button type="submit">Add</button>
          {/* <button onClick={CancelHandler}>Cancel</button> */}
          <button onClick={props.onCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
