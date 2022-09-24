import React, { useState, useEffect, Fragment } from 'react'
import Timer from './Timer'
import { isAuthenticated } from '../../auth'
import { getQuestions, updateUserScore } from '../apisFromBackend'
import Menu from '../Menu'
import Question from './Question'
import Leaderboard from './LeaderBoard'

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [questions, setQuestions] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [firstTime, setfirstTime] = useState('')
    const [userScore, setUserScore] = useState(0)
    const [error, setError] = useState(false)
    const [showResults, setShowResults] = useState(false)

    const { user: { _id }, token } = isAuthenticated()

    const loadQuestions = () => {
        getQuestions(_id, token).then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                console.log(data)
                setQuestions(data)
                setfirstTime('done')
            }
        })
    }

    useEffect(() => {
        if (firstTime === '') {
            loadQuestions()
        }
        console.log(selectedAnswer)
        updateUserScore(_id, token, { score: userScore }).then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                console.log(data)
            }
        })
    }, [selectedAnswer, userScore])

    const showError = () => {
        if (!error) {
            return
        }
        return <div className="error">{error}</div>
    }

    const handleNext = () => {
        let score = selectedAnswer == questions[currentQuestion].answer ? 1 : 0

        if (!selectedAnswer) {
            setError('Please select an answer!')
            return
        }

        setUserScore(userScore + score)
        setSelectedAnswer('')
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
            return
        }
        showLeaderBoard()
    }

    const showLeaderBoard = () => {
        setShowResults(true)

    }

    const handleClick = (e) => {
        setSelectedAnswer(e.target.value)
        setError(false)
    }

    if (showResults) {
        return <Leaderboard score={userScore} />
    }
    else {
        return (
            <div className="quiz">
                <Menu />
                <h2>
                    <Timer showLeaderBoard={showLeaderBoard} />
                </h2>
                <div className="container">

                    <h2>Question {currentQuestion + 1} of {questions.length}</h2>
                    <br />
                    {
                        questions && questions[currentQuestion] &&

                        <Question question={questions[currentQuestion]}
                            selectedAnswer={selectedAnswer} handleClick={handleClick} />

                    }
                    {showError()}
                    <button onClick={handleNext} className="next_btn" >Next</button>
                </div>
            </div>
        )
    }
}

export default Quiz