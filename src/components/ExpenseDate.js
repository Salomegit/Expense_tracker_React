import React from "react";
import "./ExpenseDate.css";
export default function ExpenseDate(props)

{
const month =  props.date instanceof Date ? props.date.toLocaleString('en-us', { month: 'long' }) : 'Invalid Date'
const day = props.date instanceof Date ? props.date.toLocaleString('en-us', { day: 'numeric' }) : 'Invalid Date'
const year = props.date instanceof Date ? props.date.toLocaleString('en-us', { year: 'numeric' }) : 'Invalid Date'
return(
    <div className="expense-date">
    <div className="expense-date__month">{month}</div>
{/* props.date instanceof Date: This part checks whether props.date is an instance of the Date constructor. If props.date is a valid Date object, this expression will evaluate to true. Otherwise, it will evaluate to false. */}
    <div className="expense-date__year">{year}</div>
    <div className="expense-date__day">{day}</div>
    </div>
)

}