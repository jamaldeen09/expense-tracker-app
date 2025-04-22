import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import "./components/style.css";
import BmiComponent from './components/BmiComponent';


{/* <FontAwesomeIcon icon={faTrashCan} /> */}

const App = () => {
  return (
    <> 
      <div className="container">
        <BmiComponent />
      </div>
    </>
  );
}

export default App;


