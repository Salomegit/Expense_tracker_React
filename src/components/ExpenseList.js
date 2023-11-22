import React from 'react'
import ExpenseItem from './Expenseitem'

const ExpenseList = ({items}) => {
    const noExpense = <p>No Expenses found</p>

    
    return (
        <div>
            {console.log(items)}
        {items === 0 ? (noExpense) : (
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
