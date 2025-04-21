import React, { useState } from "react";
import EmojiReaction from "./EmojiReaction";



const App = () => {

  const [ usersEmoji, setUsersEmoji ] = useState("");
  const [ emojiMemory, setEmojiMemory ] = useState([]);

  const colors = [
    "red",
    "yellow",
    "orange",
    "black",
    "green",
    "limegreen",
    "cornflowerblue",
    "purple",
    "violet",
    "blue",
    "cyan",
  ]

  // handle users request
  const handleRequest = (event) => {
    setUsersEmoji(event.target.value);
  }

  const handleClick = () => {

    const randomColorIndex = Math.floor(Math.random() * (colors.length - 1) + 1);
    const randomColor = colors[randomColorIndex];
    const emojiChoice = usersEmoji;
    const requestInfo = {
      reaction: emojiChoice,
      favourited: false,
      color: randomColor,
      originalColor: randomColor,
    }

    setEmojiMemory(prevEmojiMemory => [...prevEmojiMemory, requestInfo]);
    setUsersEmoji("");
  }

  const handleDelete = (indexToRemove) => {

    setEmojiMemory(prevEmojiMemory => prevEmojiMemory.filter((_, index) => {
      return index !== indexToRemove;
    }))
  }

  const handleFavourite = (indexToFavourite) => {

    setEmojiMemory(prevEmojiMemory => prevEmojiMemory.map((emoji, index) => {
      return (index === indexToFavourite) ? {...emoji, color: (emoji.favourited) ? "gold" : emoji.originalColor, favourited: !emoji.favourited} : emoji
    }))
  }

  const handleClearAll = () => {
    setEmojiMemory([]);
  }
  return (
    <>
     <div className="container">
       
      <div className="emojiReactionContainer">
        <h2>Emoji Reaction 😎</h2>

        <div className="userEmoji">
          <label>Add Emoji Reaction: </label>
          <input type="text" value={usersEmoji} onChange={handleRequest}/>
        </div>

        <button onClick={handleClick}>Add</button>
        <button onClick={handleClearAll}>Clear All</button>

        <div className="emoji-container">
          {emojiMemory.map((emojiInfo, index) => {
            return  <EmojiReaction key={index} index={index} onDelete={() => handleDelete(index)} onFavourite={() => handleFavourite(index)} info={emojiInfo}/>
          })}
        </div>
      </div>
     </div>
    </>
  );
};

export default App;

