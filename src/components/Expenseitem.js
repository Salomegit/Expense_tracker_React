import "./ExpenseItem.css"
import React from "react";

function ExpenseItem(props)
{

// const expenseDate = new Date(2023, 3, 28)
// const expenseTitle = "Car Insurance"
// const expenseAmount = "$234.55"
    return (
        <div className="expense-item">
    <div className="expense-item__description">
        <h2 >{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
    </div>
        </div>
    
    )
}
export default ExpenseItem;