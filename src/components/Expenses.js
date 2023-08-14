import "./Expenses.css";
import React from 'react';
import ExpenseItem  from "./Expenseitem";
import Card from "./Card";
export default function Expenses({sally}) {
   

    return (   
       <Card className="expenses">


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