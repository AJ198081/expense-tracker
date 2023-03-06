import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import {v4 as uuid} from "uuid";
import {ExpenseType} from "../../App";


export interface FormState {
    enteredTitle: string;
    enteredAmount: number;
    enteredDate: string;

}

export const initialState = {
    enteredTitle: '',
    enteredAmount: 0,
    enteredDate: ''
};

interface NewExpenseProps {
    addExpenseDataHandler: (expense: ExpenseType) => void
}

const NewExpense = ({addExpenseDataHandler}: NewExpenseProps): JSX.Element => {
    const submitHandler = (userInput: FormState): void => {

        const expenseData = {
            id: uuid(),
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }

        addExpenseDataHandler(expenseData);

    };

    return <div className={"new-expense"}>
        <ExpenseForm onSubmitHandler={submitHandler} />
    </div>;
}

export default NewExpense;