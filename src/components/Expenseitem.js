import "./ExpenseItem.css"
import React from "react";
import ExpenseDate  from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem({date,title,amount})
{


    return (
        <Card className="expense-item">
        <ExpenseDate date = {date}/>   
    <div className="expense-item__description">
    <div className="expense-item__description">
        <h2 >{title}</h2>
        <div className="expense-item__price">${amount}</div>
    </div>
    </div>
        </Card>
    
    )
}
export default ExpenseItem;