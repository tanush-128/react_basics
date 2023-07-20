import "./expense.css";
import React, { useState } from "react";

class Expesnse {
  constructor(date, desc, amount) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.amount = amount;
    this.date = date;
    this.desc = desc;
    this.month = months[date.getMonth()];
    this.year = date.getFullYear();
    this.day = date.getDate();
  }
  
  
}

var expenses = [
  new Expesnse(new Date("2023-06-15"), "Burger", 2.00),
  new Expesnse(new Date("2023-05-26"), "Laundry", 1.30),
  new Expesnse(new Date("2023-06-18"), "Travel", 4.05),
  new Expesnse(new Date("2023-08-08"), "KeyBoard", 3.56),
];
var [new_expenses,setExpense] =[0,0]

function ExpenseTotal() {
  var ExpenseTotal = 0;
  for (let expense in expenses) {
    ExpenseTotal += expenses[expense].amount;
  }

  return (
    <div className="ExpenseItem total">
      <div className="ExpenseDate"></div>
      <h2 className="ExpenseDesc">Total</h2>
      <h1>${ExpenseTotal}</h1>
    </div>
  );
}


function AddExpense() {

  // var expense = new Expesnse()
  const click =(e,name)=>{
    // e.preventDeafault()
    var desc = document.getElementById("desc").value
    var amount = document.getElementById("amount").value
    var date = document.getElementById("date").value
   setExpense(
    expenses.concat([new Expesnse(new Date(date),desc,amount)])
   )
  //  expenses.push(new Expesnse(new Date(date),desc,amount))
    
    console.log(desc)
    console.log(date)
  }

  return (
    <form className="ExpenseItem total input">
      <div>
        <input type="date" id="date"></input>
      </div>
      <input type="text" id="desc"></input>
      <input type="number" id="amount"></input>
      <div className="button">
      <button onClick={(evt)=>click(evt,'profile')}>Add Expense</button>

      </div>
    </form>
  );
}

function ExpesnseItem(props) {
  let expense = props.expense;

  return (
    <div className="ExpenseItem">
      <div className="ExpenseDate">
        <div className="month">{expense.month}</div>
        <div className="year" >{expense.year}</div>
        <div className="day">{expense.day}</div>
      </div>
      <h2 className="ExpenseDesc">{expense.desc}</h2>
      <h1>${expense.amount}</h1>
    </div>
  );
}

function Expenses() {
  [new_expenses,setExpense]=useState(expenses)
  return (
    <div className="Expenses">
      {new_expenses.map((expense) => <ExpesnseItem expense={expense} />)}
      <AddExpense />     
      <ExpenseTotal />
    </div>
  );
}

export default Expenses;
