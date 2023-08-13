import "./Card.css"
import React from "react";
export default function Card(props){
const classes = 'card ' + props.className
return (
<div className={classes}>{props.children}</div>
);
}