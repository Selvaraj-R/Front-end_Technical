import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../../css/expense.css";
import "../../css/newExpense.css"
import expense from "../data";
import NewExpense from "../NewExpense/NewExpense";

const ExpenseBoard = () => {
  return (
    <div className="container">
      <div>
        <h1>Expense Manger</h1>
        <div>
          <NewExpense/>
        </div>
      </div>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date.toDateString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date.toDateString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date.toDateString()}
      ></ExpenseItem>
    </div>
  );
};

export default ExpenseBoard;
