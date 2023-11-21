import "./Card.css"
import React from "react"
export default function Card({children,className}) {
	const classes = "card " + className
	return <div className={classes}>{children}</div>
}
