import ApplicationConstants from "../../constants/ApplicationConstants";
import Card from "../UI/Card";

interface ExpenseDateProps {
    date: Date;
}

const options: Intl.DateTimeFormatOptions = {
    dateStyle: "full"
}

const ExpenseDate = ({date}: ExpenseDateProps): JSX.Element => {

    const formattedMonth = new Intl.DateTimeFormat(`en-${ApplicationConstants.locale}`, {month: 'long'});
    const formattedYear = new Intl.DateTimeFormat(`en-${ApplicationConstants.locale}`, {year: 'numeric'});
    const formattedDay = new Intl.DateTimeFormat(`en-${ApplicationConstants.locale}`, {day: '2-digit'});

    return (<Card className={"expense-date"}>
            <div>{formattedMonth.format(date)}</div>
            <div>{formattedDay.format(date)}</div>
            <div>{formattedYear.format(date)}</div>
        </Card>)

}

export default ExpenseDate;