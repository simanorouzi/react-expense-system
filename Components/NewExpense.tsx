import * as React from 'react';
import { ItemType } from '../App';
import ExpenseForm from './ExpenseForm';
import '../UI/expence-style.css';

type Props = {
  onAddExpense: (expence: ItemType) => void;
};

const NewExpense = (props: Props) => {
  const saveDataHandler = (expenseData) => {
    const expense = { ...expenseData, id: Math.random() };
    props.onAddExpense(expense);
    SetShow(false);
  };

  const [ShowNewForm, SetShow] = React.useState(false);
  const CancelHandler = () => {
    SetShow(false);
  };
  const AddNewHandler = () => {
    SetShow(true);
  };
  return (
    <div className="expense-form">
      {!ShowNewForm && <button onClick={AddNewHandler}>Add New Expense</button>}
      {ShowNewForm && (
        <ExpenseForm onSaveData={saveDataHandler} onCancel={CancelHandler} />
      )}
    </div>
  );
};

export default NewExpense;
