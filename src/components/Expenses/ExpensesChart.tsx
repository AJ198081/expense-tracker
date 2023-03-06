import Chart from "../Chart/Chart";
import {ExpenseType} from "../../App";
import chartBar from "../Chart/ChartBar";

interface ExpensesChartProps {

    expenses: ExpenseType[]
}

const ExpensesChart = ({expenses}: ExpensesChartProps) => {

    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ]

    const expenseMonth = expenses.map(expense => expense.date.getMonth());

    expenseMonth
        .forEach(month =>
            chartDataPoints[month].value = expenses.filter(expense => expense.date.getMonth() === month)
                .reduce((previousValue, currentValue) => previousValue + currentValue.amount, 0));


    return <Chart dataPoints={chartDataPoints}></Chart>
}

export default ExpensesChart;