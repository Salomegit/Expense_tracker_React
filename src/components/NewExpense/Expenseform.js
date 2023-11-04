import React from "react";
import "./Expenseform.css"
import { useState } from "react";

const ExpenseForm = ({onSaveExpenseData}) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')


    const TitleChangeHandler = (event) => {
        setTitle(event.target.value)

    }
    const AmountChangeHandler = (event) => {
        setAmount(event.target.value)
    }
    const DateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event ) => {
        event.preventDefault();
        const expenseData = {
            title:title,
            amount:amount,
            date:new Date(date)
        }
        // console.log(expenseData);

        onSaveExpenseData(expenseData);
    // Reset the state variables using the setXXX functions
    setTitle('');
    setAmount('');
    setDate('');

    }
    return (


        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    < input onChange={TitleChangeHandler} value={title} type="text" />
                    <p>you have entered {title}</p>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value ={amount} onChange={AmountChangeHandler} type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} onChange={DateChangeHandler} min="2020-01-01" step="2023-12-31" />
                </div>

            </div>
            <div className="new-expense__actions ">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;