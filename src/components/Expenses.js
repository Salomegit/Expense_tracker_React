import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
// import { useState } from "react";
import React, { useState } from 'react';
import ExpenseItem from "./Expenseitem";
import Card from "./Card";
export default function Expenses({ sally }) {


  const [filteredYear, SetFilteredYear] = useState("2020")
  // const [otherYears, setOtheryears] = useState("2019,2021,2023")

  let otherYears = "2019,2021,2023";

    if (filteredYear === "2020") {
      otherYears = "2019,2021,2023";
    } else if (filteredYear === "2019") {
      otherYears = "2020,2021,2023";

    }
    else if (filteredYear === "2021") {
      otherYears = "2020,2019,2023"

    } else if (filteredYear === "2023") {
      otherYears = "2020,2021,2019"

    }

const ChangeFilter = (selectedYear) => {
SetFilteredYear(selectedYear)
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