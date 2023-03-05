import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

interface AppChildrenProps {
    children: JSX.Element;
}

export interface ExpenseType {
    title: string;
    amount: number;
    date: Date;
}

const App = () => {

    const expenses: ExpenseType[] = [
        {title: 'Car Insurance', amount: 94.12, date: new Date(2023, 2, 4)},
        {title: 'Car Service', amount: 45.12, date: new Date(2022, 3, 5)},
        {title: 'Car Wash', amount: 23.12, date: new Date(2021, 4, 6)}
    ]

    return (
        <div>
            <NewExpense />
            <Expenses expenses={expenses} />
        </div>
    )
}

export default App
