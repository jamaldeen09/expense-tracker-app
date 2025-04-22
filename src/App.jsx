import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import "./components/style.css";
import ToDoList from './components/ToDoList';

{/* <FontAwesomeIcon icon={faTrashCan} /> */}

const App = () => {
  return (
    <> 
      <div className="container">
        <ToDoList />
      </div>
    </>
  );
}

export default App;


