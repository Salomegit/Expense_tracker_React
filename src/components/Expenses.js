import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
// import { useState } from "react";
import React, { useState } from 'react';
import ExpenseItem from "./Expenseitem";
import Card from "./Card";
export default function Expenses({ sally }) {


  const [filteredYear, SetFilteredYear] = useState("2020")


  const ChangeFilter = (selectedYear) => {
    console.log("expense.js")
    console.log(selectedYear)
    SetFilteredYear(selectedYear)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeYearFilter={ChangeFilter} />


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