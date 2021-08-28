
import React,{useSate} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

  const clickHandler = (ref)=>{
    console.log("refrence adata: ",ref);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount.toString()}</div>
      </div>
      <button onClick={clickHandler}>click me</button>
    </Card>
  );
}

export default ExpenseItem;
