import ExpenseItem from "./ExpenseItem";
import "./style.css";
import React, { useState } from 'react'

const ExpenseTracker = () => {

    // handle user expense name 
    const [ userexpenseName, setUserExpenseName ] = useState("");

    const handleExpenseName = (event) => {
        setUserExpenseName(event.target.value);
    }
    // handle user amount
    const [ userexpenseAmount,setUserExpenseAmount ] = useState("");

    const handleExpenseAmount = (event) => {
        setUserExpenseAmount(event.target.value);
    }

    // handle user expense category
    const [ userExpenseCategory,setUserExpenseCategory ] = useState("");

    const handleUserExpenseCategory = (event) => {
        setUserExpenseCategory(event.target.value);
    }

    // filter category
    const [ userFiltering,setUserFiltering ] = useState("");

    const handleUserFiltering = (event) => {
        setUserFiltering(event.target.value);
    }

    // handle total expense
    const [ totalExpense,setTotalExpense ] = useState(0);


    const handleTotalExpense = () => {
       
        const newAmount = [];
        expensesArr.forEach((item) => {
            newAmount.push(item.amount)
        })
        setTotalExpense(newAmount.reduce((prev, curr) => prev + curr));
    }

    // handle add expense
    // const [ handleMapping,setHandlemapping ] = useState([]);
    const [ expensesArr,setExpensesArr ] = useState([]);

    const handleAddingExpense = () => {

        const nameOfExpense = userexpenseName;
        const nameOfAmount = parseInt(userexpenseAmount);
        const nameOfCategory = userExpenseCategory;
        setUserExpenseAmount("");
        setUserExpenseName("");

        const expenseObj = {
            name: nameOfExpense,
            amount: (isNaN(nameOfAmount)) ? 0 : nameOfAmount,
            category: nameOfCategory,
        }

        
        setExpensesArr((prevExpensesArr ) => [...prevExpensesArr, expenseObj]);
        handleTotalExpense();
        console.log(expensesArr);
    }

    // handle deleting
    const handleDelete = (indexToRemove) => {
        const newArr = expensesArr.filter((_,index) => {
            return index !== indexToRemove
        })
        setExpensesArr(newArr);
    }

    // filters
    const handleAll = () => {
        {expensesArr.map((expense, index) => {
            return <ExpenseItem key={index} expenseName={expense.name} expenseAmount={expense.amount} expenseCategory={expense.category} onDelete={() => handleDelete(index)}/>
        })}
    }

  return (
    <div className="expense-container">

        <div className="expense-content">
            <h1>EXPENSE TRACKER</h1>

            <div className="usersExpenseInfo">
                <input type="text" placeholder="Expense Name" value={userexpenseName} onChange={handleExpenseName}/>
                <input type="number" placeholder="Amount" value={userexpenseAmount} onChange={handleExpenseAmount}/>
                <select className="categories" value={userExpenseCategory} onChange={handleUserExpenseCategory}>
                    <option value="">Select</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="other" >other</option>
                </select>
                <button className= "expense-handler-btn" onClick={handleAddingExpense}>Add Expense</button>
            </div>

            <div className="filtering">
                <label>Filter by Category: </label>
                <select className="filter-category" value={userFiltering} onChange={handleUserFiltering}>
                    <option value="">Select</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="food">Food</option>
                    <option value="transport">Transport</option>
                    <option value="All">All</option>
                    <option value="other">other</option>
                </select>
            </div>

            <div className="userExpenses">
                {expensesArr.filter((expense) => {if (userFiltering === "" || userFiltering === "All") return true;return expense.category.toLowerCase() === userFiltering.toLowerCase();}).map((expense, index) => (<ExpenseItem key={index} expenseName={expense.name} expenseAmount={expense.amount} expenseCategory={expense.category} onDelete={() => handleDelete(index)}/>))}
            </div>

            <div>
                <h2 style={{color: "white"}}>Total Expense: <span style={{color: "limegreen"}}>${(totalExpense) ? totalExpense : 0}</span></h2>
            </div>
        </div>
    </div>
  )
}

export default ExpenseTracker