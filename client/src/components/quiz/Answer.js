import React from 'react'

const Answer = ({ letter, option, selected, handleClick }) => {

    let classes = ['answer']

    if (selected) {
        console.log("HIIIII", selected)
        classes.push('selected')
    }

    return (
        <button value={letter} className={classes.join(" ")} onClick={handleClick} >
            <span className="letter">{letter}. {option}</span>
        </button>
    )
}

export default Answer