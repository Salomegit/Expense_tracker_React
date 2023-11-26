import "./NewExpense.css";
import React,{useState} from "react";
import ExpenseForm from "./Expenseform";



const NewExpense = ({ expenseHandler }) => {
    function saveExpenseHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData)
        expenseHandler(expenseData)
    }


const [showForm,setForm] = useState(false)

function addNewExpense () {
    setForm(true)
}
function onCancel(){
    setForm(false)
}

let showContent ;

    if (showForm) {
        showContent = (
          <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancelFunction={onCancel}/>
        )
      } else {
        showContent = (
          <button onClick={addNewExpense}>Add new Expense</button>
        );
      }
    
    return (    
        <div className="new-expense">
        {showContent}
      </div>
    )
}

export default NewExpense;

