import { render, screen } from "@testing-library/react";
import App from "./App";
import ExpenseItem from "./components/Expense/ExpenseItem";

test("renders learn react link", () => {
  render(<App />);
});

test("render ExpenseItem in the document", () => {
  const appComponent = render(<App />);
  const expenseItem = appComponent.getByText("Expense Manger");
  expect(expenseItem).toBeTruthy;
});

test("expense item to hace classname", () => {
  const { getByTestId, debug } = render(<ExpenseItem />);
  debug();
  const date = getByTestId("datename");
}, 10000);
