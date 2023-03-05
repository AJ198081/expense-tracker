import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bulma/css/bulma.css";
import "./components/Expenses/ExpenseItem.css";
import "./components/Expenses/ExpenseDate.css";
import "./components/NewExpense/NewExpense.css";
import "./components/NewExpense/ExpenseForm.css";


ReactDOM
    .createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    )
