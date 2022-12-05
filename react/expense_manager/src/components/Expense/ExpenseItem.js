import React from 'react'

const ExpenseItem = (props) => {
  return (
    <div className="expense-div">
      <div className="expense-item">
        <div data-testid = "datename">{props.date}</div>
        <div>{props.title}</div>
      </div>
      <div className="expense-amount">{props.amount}</div>
    </div>
  );
};

export default ExpenseItem;
