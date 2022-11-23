import "./css/expense.css"


const ExpenseItem = (props) => {
    return (
    <div className="expense-div">
     <div className="expense-item">
     <div>{props.date}</div>
      <div>{props.title}</div>
     </div>
      <div className="expense-amount">{props.amount}</div>
      </div>
  );
};

export default ExpenseItem;
