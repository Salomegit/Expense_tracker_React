import "./NewExpense.css";
import React from "react";

import ExpenseForm from "./Expenseform";

const NewExpense = () => {
    return(
        <div className="new-expense">
            <ExpenseForm/>
        </div>
    )
}

export default NewExpense;