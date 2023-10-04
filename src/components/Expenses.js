import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import React from 'react';
import ExpenseItem  from "./Expenseitem";
import Card from "./Card";
export default function Expenses({sally}) {
   

    return (   
       <Card className="expenses">
            <ExpensesFilter />


{sally.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}    
       </Card>
    );
}