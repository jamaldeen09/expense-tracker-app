
import "./style.css";

import React, { useState } from 'react'
import MoodEntries from "./MoodEntries";

const Journal = () => {
    
    const [ usersMood, setUsersMood ] = useState("");
    const [ moodEntry, setMoodEntry ] = useState([]);
    const [ moodMemory, setMoodMemory ] = useState([]);

    const handleMood = (event) => {
        setUsersMood(event.target.value)
    }


    const handleSubmit = () => {
        const currMood = usersMood;
        const dates = [
            "January 20, 2982",
            "February 17, 2034",
            "March 18, 2012",
            "April 16, 2026",
            "May 11, 2020",
            "June 8, 2019",
            "July 1, 2000",
            "August 23, 2864",
            "September 22, 1982",
            "October 30, 2763",
            "November 7, 2008",
            "December 31, 2022",
        ]

        const RandomDateIndex = Math.floor(Math.random() * (dates.length - 1) + 1);
        const RandomDate = dates[RandomDateIndex]

        const MoodObj = {
            mood: currMood,
            date: RandomDate,
        }

        moodMemory.push(MoodObj);
        setUsersMood("");
    }

    const handleMoodEntries = () => {
        setMoodEntry(moodMemory.map((data) => {
            return <MoodEntries mood={data.mood} date={data.date}/>
        }))
    }

    const handleReset = () => {
        setMoodMemory([]);
        setMoodEntry("");
    }


  return (
    <div className="inner-container">
        <h1>Welcome!</h1>

        <div>
            <label>Mood: </label>
            <input value={usersMood} onChange={handleMood}/>
        </div>

        <div className="buttons-container">
            <button onClick={handleSubmit}>Submit Mood!</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleMoodEntries}>View Mood Entries</button>
        </div>

        <div style={{display: "flex", gap: "50px"}}>
            {(moodEntry) ? moodEntry : null}
        </div>
    </div>
  )
}



export default Journal