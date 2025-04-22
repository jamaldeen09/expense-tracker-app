import PropTypes from "prop-types";
import "./style.css";
import React from 'react'

const ExpenseItem = (props) => {

    const { expenseName,expenseAmount,expenseCategory,onDelete } = props;
  return (
    <div className="expense-item">
        <h4>{expenseName} - ${expenseAmount} ({expenseCategory})</h4>
        <button className="deleteBtn" style={{backgroundColor: "red", color: "white", borderRadius: "10px", border: "none", padding: "9px 20px", fontSize: "0.7rem"}} onClick={() => onDelete()}>Delete</button>
    </div>
  )
}

ExpenseItem.propTypes = {
    expenseName: PropTypes.string.isRequired,
    expenseAmount: PropTypes.number.isRequired,
    expenseCategory: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ExpenseItem