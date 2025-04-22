import "./style.css";
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import ToDoItem from "./ToDoItem";


const ToDoList = () => {

    const [ request,setRequest ] = useState("");
    const [ usersToDoArr,setUsersToDoArr ] = useState([]);

    // handle textbox request
    const handleRequest = (event) => {
        setRequest(event.target.value);
    }

    // handle add item
    const handleItemAdding = () => {
        const usersToDo = request;

        const todoObj = {
            do: usersToDo,
            favourited: false,
            color: "#FFFFFF",
        }
        setUsersToDoArr((prevUsersToDoArr) => [...prevUsersToDoArr, todoObj])
        setRequest("");
    }

    // handle item deletion
    const handleItemDeleting = (indexToRemove) => {
        setUsersToDoArr(usersToDoArr.filter((_, index) => {
            return index !== indexToRemove
        }))
    }

    // handle favouriting. 
    const handleFavouriting = (indexToFavourite) => {
        setUsersToDoArr(usersToDoArr.map((item, index) => {
            return (index === indexToFavourite) ? {...item, favourited: !item.favourited, color: (item.favourited) ? "gold" : "black"} : item;
        }))

        console.log(usersToDoArr);
    }
  return (
    <div className="innerContainer">

        <div className="uiSection">
            <h1>To Do List</h1>

            <div className="inputSection">
               <input type="text" value={request} onChange={handleRequest}/>
               <button onClick={handleItemAdding} className="btn"><span className="btn-text" style={{position: "relative", bottom: "0.2rem"}}>Add</span></button>
            </div>

            <div className="taskListContainer">
                <h2>Task List</h2>

                <div className="usersList">

                    {usersToDoArr.map((item, index) => {
                        return  <ToDoItem style = {{backgroundColor: item.color}} key={index} userRequest={item.do} onDelete={() => handleItemDeleting(index)} onFavourite={() => handleFavouriting(index)}/>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToDoList