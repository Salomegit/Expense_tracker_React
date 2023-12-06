import React, { useState } from "react"
import Expenses from "../components/Expenses"
import NewExpense from "../components/NewExpense/NewExpense"

const Home = () => {

	const [expensess, setExpenses] = useState(dummy_expenses)
	
	function addedExpenseHandler(expense) {
		setExpenses((previousState) => {
			return [...previousState, expense]
		})
	}
	
	// console.log ( "this is expenses" + expensess[0].title)
	return (
		<div>
			<h2>Let's get started!</h2>
			<NewExpense expenseHandler={addedExpenseHandler} />
			<Expenses sally={expensess} />
		</div>
	)
	

} 

export default Home


const dummy_expenses = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2023, 3, 28),
	},
	{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2023, 3, 28) },
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2023, 3, 28),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
	{
		id: "e5",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2023, 5, 12),
	},
	{
		id: "e6",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2023, 5, 12),
	},
]
