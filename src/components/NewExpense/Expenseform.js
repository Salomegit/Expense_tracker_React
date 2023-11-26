import React from "react";
import "./Expenseform.css"
import { useState } from "react";

const ExpenseForm = ({onSaveExpenseData,onCancelFunction}) => {
    const [expenseData, setExpenseData] = useState({ title: '', amount: '', date: '' })
    

    const handleExpenseData = (event) => {
        const { name, value } = event.target;
        setExpenseData((previousState) => {
            return { ...previousState, [name]: value }
        })
    }

    const submitHandler = (event ) => {
        event.preventDefault();
        const expenseFormData = {
            title:expenseData.title,
            amount:expenseData.amount,
            date:new Date(expenseData.date)
        }

        onSaveExpenseData(expenseFormData);
        // Reset the state variables using the setXXX functions
        setExpenseData({ title: '', amount: '', date: '' })

    }
    return (


        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    < input onChange={handleExpenseData} name="title" value={expenseData.title} type="text" />
                    <p>you have entered {expenseData.title}</p>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value ={expenseData.amount} onChange={handleExpenseData} name="amount" type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={expenseData.date} onChange={handleExpenseData} name="date" min="2020-01-01" step="2023-12-31" />
                </div>

            </div>
            <div className="new-expense__actions ">
                <button type="submit" >Submit</button>
                <button type="button" onClick={onCancelFunction}>Cancel</button>
  
            </div>
          
        </form>
    )
}

export default ExpenseForm;