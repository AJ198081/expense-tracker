import ExpenseItem from "./ExpenseItem";
import {ExpenseType} from "../../App";
import "./ExpensesList.css";

interface ExpensesListProps {
    expenses: ExpenseType[],
    filteredYear: string
}

const ExpensesList = ({ expenses, filteredYear }: ExpensesListProps): JSX.Element => {

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    const renderExpenses = expenses.map((expense, index) => {
        return <div key={expense.id}>
            <ExpenseItem expense={expense} />
        </div>
    });

    return <ul className={"expenses-list"}>
        {filteredYear === 'All' && renderExpenses}
        {filteredExpenses.length === 0 && filteredYear !== 'All' && <p>No expenses found.</p>}
        {filteredExpenses.length >= 0 && filteredExpenses.map(expense => (
            <ExpenseItem expense={expense} key={expense.id}/>
        ))}
    </ul>

};

export default ExpensesList;