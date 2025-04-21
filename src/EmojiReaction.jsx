import React from 'react'
import PropTypes from 'prop-types'


const EmojiReaction = (props) => {

    const { index, info, onDelete, onFavourite } = props
  return (
    

    <div className="emoji-info" style={{backgroundColor: info.color}}>
        <h4>{info.reaction}  {info.favourited ? "⭐️" : null}</h4>

        <div>
            <button onClick = {() => onDelete()} style={{backgroundColor: "white", color: "red", fontSize: "0.7rem"}}>Delete</button>
            <button onClick = {() => onFavourite()}style={{backgroundColor: "white", color: "orange", fontSize: "0.7rem"}}>Favourite</button>
        </div>
    </div>
  )
}


EmojiReaction.propTypes = {
    index: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onFavourite: PropTypes.func.isRequired,
}
export default EmojiReaction

