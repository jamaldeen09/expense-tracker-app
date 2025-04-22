import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import "./components/style.css";
import ExpenseTracker from './components/ExpenseTracker';

{/* <FontAwesomeIcon icon={faTrashCan} /> */}

const App = () => {
  return (
    <> 
      <div className="container">
        <ExpenseTracker />
      </div>
    </>
  );
}

export default App;


