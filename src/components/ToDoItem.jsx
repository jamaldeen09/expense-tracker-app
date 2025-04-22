import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "./style.css";

const ToDoItem = (props) => {

    const { userRequest,onDelete,onFavourite } = props

    const [ isChecked, setIsChecked ] = useState(false);

    const handleChecked = () => {
        setIsChecked(!isChecked);
    }
  return (
    <div className="todoItem">

        <div className="itemGenerated">
            <input type="checkbox" checked={isChecked} onChange={handleChecked}/>
            <label style={{textDecoration: (isChecked) ? "line-through": "none"}}>{userRequest}</label>
        </div>

        <div className="extra-buttons">
            <button onClick={() => onDelete()} style={{background: "none", color: "red", border: "none", cursor: "pointer", fontSize: "0.8rem"}}>Delete</button>
            <button onClick={() => onFavourite()} style={{background: "none", color: "red", border: "none", cursor: "pointer", fontSize: "0.8rem"}}>Favourite</button>
        </div>
    </div>
  )
}

ToDoItem.propTypes = {
    userRequest: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onFavourite: PropTypes.func.isRequired,
}

export default ToDoItem