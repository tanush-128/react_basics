import './expense.css'
import { expenses, new_expenses, setExpense } from "./ExpenseTab";
import Expense from './Expense';

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
  
  export default ExpenseTotal