import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
// import { useState } from "react";
import React, { useState } from 'react';
import ExpenseItem from "./Expenseitem";
import Card from "./Card";
export default function Expenses({ sally }) {


  const [filteredYear, SetFilteredYear] = useState("2020")
  const [otherYears, setOtheryears] = useState("2019,2021,2023")

  const ChangeFilter = (selectedYear) => {


    SetFilteredYear(selectedYear)
    if (selectedYear === "2020") {
      setOtheryears("2019,2021,2023")
    } else if (selectedYear === "2019") {
      setOtheryears("2020,2021,2023")

    }
    else if (selectedYear === "2021") {
      setOtheryears("2020,2021,2023")

    } else if (selectedYear === "2023") {
      setOtheryears("2020,2021,2023")

    }
    setOtheryears(otherYears)
  }
  return (
    <Card className="expenses">

      <ExpensesFilter selected={filteredYear} onChangeYearFilter={ChangeFilter}
      />
      <p>hidden years are {otherYears}</p>

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