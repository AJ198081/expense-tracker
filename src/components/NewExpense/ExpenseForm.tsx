import {ChangeEvent, useCallback, useState} from "react";
import ApplicationConstants from "../../constants/ApplicationConstants";


interface FormState {
    enteredTitle: string;
    enteredAmount: number;
    enteredDate: Date;

}

const ExpenseForm = () => {

    const options: Intl.DateTimeFormatOptions = {
        dateStyle: "full"
    };
    const dateTimeFormat = new Intl.DateTimeFormat(`en-${ApplicationConstants.locale}`, options);

    const [userInput, setUserInput] = useState<FormState>({
                                                              enteredTitle: '',
                                                              enteredAmount: 0,
                                                              enteredDate: new Date()
                                                          });


    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: userInput.enteredDate
        }

    };

    const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        /*setUserInput({
                         ...userInput,
                         enteredTitle: event.target.value
                     })*/

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
                         ...userInput, enteredDate: new Date(Date.parse(event.target.value))
                     })
    }

    return <form onSubmit={event => submitHandler}>

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
                <input type="date" min={"01-01-1900"} max={"31-12-2023"} value={userInput.enteredDate.toLocaleDateString()} onChange={dateChangeHandler}/>
            </div>

            <div className={"new-expense__actions"}>
                <button type={"submit"}>Submit</button>
            </div>


        </div>

    </form>
}

export default ExpenseForm;