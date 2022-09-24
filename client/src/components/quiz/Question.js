import React, { Fragment } from 'react'
import Answer from './Answer'

const Question = ({ question, selectedAnswer, handleClick }) => {

    return (

        <div >
            <h1>{question.ques}</h1>
            {question.options &&
                (
                    question.options.map((option, i) => (
                        <Answer key={i} letter={i + 1} option={option}
                            selected={selectedAnswer == (i + 1)} handleClick={handleClick} />
                    ))

                )
            }
        </div>
    )
}

export default Question