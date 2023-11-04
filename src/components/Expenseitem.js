import "./ExpenseItem.css"
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem({ date, title: initialTitle, amount }) {

    const [title, setTitle] = useState(initialTitle)
    console.log("four instances of the component are created")

    const clickHandler = () => {
        setTitle("Updated")
        console.log(initialTitle);

    }
    const Person = {name:"Salome",gender:"female"}
    console.log(Person)
    console.log(Person["age"])
    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <div className="expense-item__description">
                    <h2 >{title}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>

    )
}
export default ExpenseItem;