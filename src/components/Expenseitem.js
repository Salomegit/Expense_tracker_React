import "./ExpenseItem.css"
import React from "react";

function ExpenseItem(props)
{

const month =  props.date instanceof Date ? props.date.toLocaleString('en-us', { month: 'long' }) : 'Invalid Date'
const day = props.date instanceof Date ? props.date.toLocaleString('en-us', { day: 'numeric' }) : 'Invalid Date'
const year = props.date instanceof Date ? props.date.toLocaleString('en-us', { year: 'numeric' }) : 'Invalid Date'
    return (
        <div className="expense-item">
            <div>
            <div>{month}</div>
  {/* props.date instanceof Date: This part checks whether props.date is an instance of the Date constructor. If props.date is a valid Date object, this expression will evaluate to true. Otherwise, it will evaluate to false. */}
            <div>{year}</div>
            <div>{day}</div>
            </div>
    <div className="expense-item__description">
        <h2 >{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
    </div>
        </div>
    
    )
}
export default ExpenseItem;