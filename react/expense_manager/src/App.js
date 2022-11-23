import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: "1",
      title: "bought book",
      amount: "500",
      date: new Date(),
    },
    {
      id: "2",
      title: "bought shirt",
      amount: "5000",
      date: "2001-2-8",
      
    },
    {
      id: "3",
      title: "bought waterbottle",
      amount: "50",
      date: "2001-2-8",

    },
    {
      id: "4",
      title: "bought shoe",
      amount: "560",
      date: "2001-2-8",

    },
  ];
console.log(expense[0].date.toString)
  return (
    <div className="container">
      <div>
        <h1>Expense Manger</h1>
      </div>
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date.getMonth()} ></ExpenseItem>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date} ></ExpenseItem>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date} ></ExpenseItem>
      
    </div>
  );
}

export default App;
