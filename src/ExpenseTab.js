import "./expense.css";
import React, { useState } from "react";
import Expense from './Expense'
import ExpenseTotal from "./ExpenseTotal";
import AddExpense from "./AddExpense";


var expenses = [
  new Expense(new Date("2023-06-15"), "Burger", 2.0),
  new Expense(new Date("2023-05-26"), "Laundry", 1.3),
  new Expense(new Date("2023-06-18"), "Travel", 4.05),
  new Expense(new Date("2023-08-08"), "KeyBoard", 3.56),
];


var [new_expenses, setExpense] = [0, 0];





function ExpesnseItem(props) {
  
  let expense = props.expense;

  return (
    <div className="ExpenseItem">
      <div className="ExpenseDate">
        <div className="month">{expense.month}</div>
        <div className="year">{expense.year}</div>
        <div className="day">{expense.day}</div>
      </div>
      <h2 className="ExpenseDesc">{expense.desc}</h2>
      <h1>${expense.amount}</h1>
    </div>
  );
}

function Expenses() {
  [new_expenses, setExpense] = useState(expenses);
  

  return (
    <div className="Expenses">
      {new_expenses.map((expense) => (
        <ExpesnseItem key={expense.day} expense={expense} />
      ))}
      <AddExpense expenses={expenses} />
      <ExpenseTotal />
    </div>
  );
}

export {Expenses, expenses,new_expenses,setExpense};
