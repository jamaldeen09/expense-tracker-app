import PropTypes from "prop-types";
import "./style.css";
import React from 'react'

const BmiResult = (props) => {

    const { resultVal } = props
  return (
    <div className="BMI-result" style={{width: "25vw", height: "8vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(32, 32, 94)", borderRadius: "15px"}}>
        <h3>Your BMI is: <span style={{color: "hsl(120, 59%, 44%)"}}>{resultVal}</span></h3>
    </div>
  )
}

BmiResult.propTypes = {
    resultVal: PropTypes.number.isRequired,
}
export default BmiResult