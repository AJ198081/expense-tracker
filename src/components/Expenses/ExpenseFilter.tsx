import React from "react";
import "./ExpensesFilter.css";
interface ExpenseFilterProps {
    onChangeFilter: (year: string) => void,
    selected: string,
    yearsOfExpenses: string[]
}

const ExpenseFilter = ({ onChangeFilter, selected, yearsOfExpenses }: ExpenseFilterProps) => {

    const dropdownChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        onChangeFilter(e.target.value);
    };

    return <div className={"expenses-filter"}>

        <div className={"expenses-filter__control"}>
            <label >Filter by year</label>
            <select value={selected} onChange={dropdownChangeHandler}>
                <option value={"All"}>All</option>
                {yearsOfExpenses.map(year => <option value={year} key={year}>{year}</option>)}
            </select>
        </div>

    </div>;
}

export default ExpenseFilter;