import {ExpenseType} from "../../App";
import "./Expenses.css"
import Card from "../UI/Card";
import {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

interface ExpensesProps {
    expenses: ExpenseType[];
}

const Expenses = ({expenses}: ExpensesProps): JSX.Element => {

    const [filteredYear, setFilteredYear] = useState('All');

    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    const yearsOfExpenses: string[] = expenses.map(expense => {
        return expense.date.getFullYear().toString();
    });

    let expensesToBePlotted = filteredYear === 'All' ? expenses : filteredExpenses;
    return <Card className={"expenses"}>
        <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear} yearsOfExpenses={yearsOfExpenses}/>
        <ExpensesChart expenses={expensesToBePlotted} />
        <ExpensesList expenses={expenses} filteredYear={filteredYear} />
    </Card>;
}

export default Expenses;