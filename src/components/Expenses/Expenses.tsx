import {ExpenseType} from "../../App";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";

interface ExpensesProps {
    expenses: ExpenseType[];
}

const Expenses = ({expenses}: ExpensesProps): JSX.Element => {
    const renderExpenses = expenses.map((expense, index) => {
        return <div key={expense.id}>
            <ExpenseItem expense={expense} />
        </div>
    });

    return <Card className={"expenses"}>
        {renderExpenses}
    </Card>
}

export default Expenses;