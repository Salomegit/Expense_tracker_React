import React from 'react'
import ExpenseItem from './Expenseitem'

const ExpenseList = ({sally}) => {
    const noExpense = <p>No Expenses found</p>

    return (
        <div>
            {sally.length === 0 ? (noExpense) : (
                <>
                    {sally.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))}
                </>)
            }

        </div>
    )
}

export default ExpenseList
