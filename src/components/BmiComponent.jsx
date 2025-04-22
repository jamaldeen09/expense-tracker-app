import BmiResult from "./BmiResult";
import "./style.css";
import React, { useState } from 'react'



const BmiComponent = () => {


    // handle users health

    const [ usersCategory,setUsersCategory ] = useState("");

    // radio buttons
    const [radioBtn, setRadioBtn ] = useState("");

    const handleRadioBtn = (event) => {
        setRadioBtn(event.target.value);
    }

    // textbox number
    const [ heightNum, setHeightNum ] = useState(20);

    const handleHeightNum = (event) => {
        setHeightNum(event.target.value);
    }

    // weight
    const [ weightNum, setWeightNum ] = useState(20);

    const handleWeightNum = (event) => {
        setWeightNum(event.target.value);
    }

    // click events/ calculate btn logic
    const [ calculateBMI,setCalculateBMI ] = useState(0);
    

    const handleCalculation = () => {
        const initialHeight = heightNum;
        const initialWeight = weightNum;
        setHeightNum(0);
        setWeightNum(0);


        if (radioBtn === "inches-lbs"){
            const BMI = Math.floor(703 * initialWeight / Math.pow(heightNum, 2));
            (isNaN(BMI)) ? setCalculateBMI(0) : setCalculateBMI((prevCalculateBMI) => BMI);
            
            if (BMI < 18){
                setUsersCategory("Underweight");
            }
            else if (BMI >= 18 && BMI <= 24){
                setUsersCategory("Normal");
            }
            else if(BMI > 24){
                setUsersCategory("Overweight");
            }
            else{
                setUsersCategory("");
            }
        }
        else if (radioBtn === "cm-kg"){
            const convertedHeight = initialHeight / 100;
            const secondBMI = Math.floor(initialWeight / Math.pow(convertedHeight, 2));

            (isNaN(secondBMI)) ? setCalculateBMI(0) : setCalculateBMI((prevCalculateBMI) => secondBMI);

            if (secondBMI < 18){
                setUsersCategory("Underweight");
            }
            else if (secondBMI >= 18 && secondBMI <= 24){
                setUsersCategory("Normal");
            }
            else if(secondBMI > 24){
                setUsersCategory("Overweight");
            }
            else{
                setUsersCategory("");
            }
        }

        else{
            setCalculateBMI((prevCalculateBMI) => "invalid");
        }
    }
  return (
    <div className="BMI-calculator">

        <div className="BMI-heading">
            <h1>BMI Calculator</h1>

            <div className="height-weight-choice">
                <div className="height-weight">
                   <input type="radio" value="inches-lbs" checked={radioBtn === "inches-lbs"} onChange={handleRadioBtn}/>
                   <label>Inches & lbs</label>
                </div>

                <div className="height-weight">
                    <input type="radio" value="cm-kg" checked={radioBtn === "cm-kg"} onChange={handleRadioBtn}/>
                    <label>Cm & Kg</label>
                </div>
            </div>

            <div className="height-weightContainer">

                <div className="height">
                    <h4>Height</h4>
                    <input type="number" value={heightNum} onChange={handleHeightNum} min="20"/>
                </div>

                <div className="weight">
                    <h4>Weight</h4>
                    <input type="number" value={weightNum} onChange={handleWeightNum}  min="20"/>
                </div>

                <div className="calcuate-btnContainer">
                    <button onClick={handleCalculation}>Calculate BMI</button>
                </div>

                <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                  <BmiResult resultVal={calculateBMI}/>

                  <p className="userRes" style={{backgroundColor: "rgb(33, 33, 111)", position: "relative", top: "1rem", width: "25vw", borderRadius: "10px"}}>Your BMI is: <span style={{ color: (usersCategory === "Normal") ? "limegreen" : (usersCategory === "Underweight") ? "orange" : (usersCategory === "Overweight") ? "red" : null}}>{usersCategory}</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BmiComponent