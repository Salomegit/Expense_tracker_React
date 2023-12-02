import "./Expenses.css"
import ExpenseList from "./ExpenseList"
import ExpensesFilter from "./ExpenseFilter"
import ExpenseChart from "./ExpenseChart"

// import { useState } from "react";
import React, { useState } from "react"

import Card from "./Card"
export default function Expenses({ sally }) {
	const [filteredYear, SetFilteredYear] = useState("2020")
	// const [otherYears, setOtheryears] = useState("2019,2021,2023")

	let otherYears = "2019,2021,2023"

	if (filteredYear === "2020") {
		otherYears = "2019,2021,2023"
	} else if (filteredYear === "2019") {
		otherYears = "2020,2021,2023"
	} else if (filteredYear === "2021") {
		otherYears = "2020,2019,2023"
	} else if (filteredYear === "2023") {
		otherYears = "2020,2021,2019"
	}

	const ChangeFilter = (selectedYear) => {
		SetFilteredYear(selectedYear)
	}


	const filteredExpense = sally.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear

	})
	console.log(filteredYear, filteredExpense)

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeYearFilter={ChangeFilter}
			/>
			<ExpenseChart items={filteredExpense}/>
			<p>hidden years are {otherYears}</p>
			
     <ExpenseList items = {filteredExpense}/>
		</Card>
	)
}
