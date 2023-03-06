import {ChangeEvent, useCallback, useState} from "react";
import ApplicationConstants from "../../constants/ApplicationConstants";
import {FormState, initialState} from "./NewExpense";

interface ExpenseFormProps {
    onSubmitHandler: (userInput: FormState) => void
}

const ExpenseForm = ({ onSubmitHandler }: ExpenseFormProps): JSX.Element => {

    const [userInput, setUserInput] = useState<FormState>(initialState);

    const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            }
        })
    }

    const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput({
                         ...userInput,
                         enteredAmount: Number.parseFloat(event.target.value)
                     });
    }


    const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput({
                         ...userInput, enteredDate: event.target.value
                     })
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitHandler(userInput);
        setUserInput(initialState)
    };

    return <form onSubmit={handleSubmit}>
        <div>
            <div className={"new-expense__control"}>
                <label>Title</label>
                <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className={"new-expense__control"}>
                <label>Amount</label>
                <input type="number" min={"0.01"} step={"0.01"} value={userInput.enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className={"new-expense__control"}>
                <label>Date</label>
                <input type="date" min={"1900-01-01"} max={"2023-12-31"} value={userInput.enteredDate} onChange={dateChangeHandler}/>
            </div>
            <div className={"new-expense__actions"}>
                <button type={"submit"}>Submit</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;