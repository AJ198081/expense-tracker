import {ExpenseType} from "../../App";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, {MouseEventHandler, useState} from "react";
import {render} from "react-dom";

interface ExpenseItemChildrenProps {
    expense: ExpenseType
}

const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

interface StateType {
    title: string;
    setTitle: React.Dispatch<React.InputHTMLAttributes<string>>
}

const ExpenseItem = ({expense}: ExpenseItemChildrenProps): JSX.Element => {

    const [title, setTitle] = useState<string>(expense.title);

    const clickEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        title === expense.title
            ? setTitle(prevState => 'Button Clicked!')
            : setTitle(prevState => expense.title);
    }

    return <Card className={'expense-item'}>
        <ExpenseDate date={expense.date as Date}/>
        <div className={"expense-item__description"}>
            <h2>{title}</h2>
            <div className={"expense-item__price"}>${expense.amount}</div>
        </div>
        <button className={"button is-primary"} onClick={clickEventHandler}>Change Title</button>
    </Card>
}

export default ExpenseItem;