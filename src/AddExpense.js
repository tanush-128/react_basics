import "./expense.css";
import { expenses, new_expenses, setExpense } from "./ExpenseTab";
import Expense from "./Expense";

function AddExpense(props) {
  const click = (e) => {
    e.preventDefault();
    
    var desc = document.getElementById("desc").value;
    var amount = parseFloat(document.getElementById("amount").value )
    var date = document.getElementById("date").value;
    
 
    if(!date){
      date = new Date()
    }
  
    
    if(amount>0){
      // setExpense(expenses.concat([new Expense(new Date(date), desc, amount)]));
      setExpense((prevExpenses)=>{
        return [...prevExpenses,new Expense(new Date(date), desc, amount) ]
      })
      expenses.push(new Expense(new Date(date), desc, amount));
    }
    else{
      alert('Amount must be greater than 0')
    }


    console.log(desc);
    console.log(date);
  };

  return (
    <form className="ExpenseItem total input">
      <div>
        <input type="date" id="date"></input>
      </div>
      <input type="text" id="desc"></input>
      <input type="number" id="amount"></input>
      <div className="button">
        <button onClick={click}>Add Expense</button>
      </div>
    </form>
  );
}

export default AddExpense;
