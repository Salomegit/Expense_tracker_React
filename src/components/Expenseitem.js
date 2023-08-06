import "./ExpenseItem.css"
import React from "react";

function ExpenseItem()
{

const expenseDate = new Date(2023, 3, 28)
const expenseTitle = "Car Insurance"
const expenseAmount = "$234.55"
    return (
        <div className="expense-item">
    <div> {expenseDate.toDateString()}</div>
    <div className="expense-item__description">
        <h2 >{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
    </div>
        </div>
    
    )
}
export default ExpenseItem;