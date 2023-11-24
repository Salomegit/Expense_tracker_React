import React from 'react'
import ExpenseItem from './Expenseitem'
import "./ExpenseList.css"

const ExpenseList = ({ items }) => {
    const noExpense = <p className='expenses-list__fallback'>No Expenses found</p>
    console.log(noExpense)

    return (
        <div>
            {items.length === 0 ? (noExpense) : (
                <>
                    {items.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                    }
                </>
            )}
        </div>

    )
}

export default ExpenseList
