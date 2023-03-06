import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {ReactEventHandler, useState} from "react";
import {v4 as uuid} from "uuid";

export interface ExpenseType {

    id: string
    title: string;
    amount: number;
    date: Date;
}

const initialExpenseState: ExpenseType[] = [
    {id: uuid(), title: 'Car Insurance', amount: 94.12, date: new Date(2023, 2, 4)},
    {id: uuid(), title: 'Car Service', amount: 45.12, date: new Date(2022, 3, 5)},
    {id: uuid(), title: 'Car Wash', amount: 23.12, date: new Date(2021, 4, 6)}
]

const App = (): JSX.Element => {

    const [expenses, setExpenses] = useState(initialExpenseState);
    const addExpenseHandler = (expense: ExpenseType) => {
        setExpenses(prevState => {
            return [expense, ...prevState]
        })
    }

    return (
        <div>
            <NewExpense addExpenseDataHandler={addExpenseHandler}/>
            <Expenses expenses={expenses}/>
        </div>
    )
}

export default App
