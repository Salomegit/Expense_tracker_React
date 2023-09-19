import "./NewExpense.css";
import React from "react";

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
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
        </div>
    )
}

export default NewExpense;