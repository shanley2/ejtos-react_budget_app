import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {

        // Checks that budget cannot exceed 20,000
        if (event.target.value >= 20000) {
            alert("The value cannot exceed 20000");
            setNewBudget(2000);
            return;
        } 
        
        //Calculates the total
        // TODO: figure out a better way to do this!
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        //console.log(expenses);
        // Checks that budget is not lower than spending
        if (event.target.value < totalExpenses) {
            alert("The budget cannot be a lower number than the spending");
            setNewBudget(totalExpenses);
            return;
        }
        
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
        
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency} </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;