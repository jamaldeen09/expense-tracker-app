import React, { useState } from "react";
import "./assets/components/style.css";
import Navbar from "./assets/components/Navbar";
import Journal from "./assets/components/Journal";


const App = () => {

  

  return (
    <> 
     <Navbar />
     <div className="container">
       <Journal />
     </div>
    </>
  );
};


export default App;
