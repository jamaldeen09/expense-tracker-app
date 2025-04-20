
import "./style.css";
import PropTypes from "prop-types";
import React from 'react'

const MoodEntries = (props) => {
    const { mood = "happy",date = "April 20, 2023"} = props
  return (
    
    <div className="moods">
        <h4>Mood: {mood}</h4>
        <p>Date: {date}</p>
    </div>
   
  )
}

MoodEntries.propTypes = {
    mood: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}

export default MoodEntries