import React, { useState, useEffect } from 'react'
import { getAllQuestions } from '../apisFromBackend'
import { isAuthenticated } from '../../auth'
import Menu from '../Menu'
import { Link } from 'react-router-dom'

const AllQuestions = () => {

    const [questions, setQuestions] = useState([])

    const { token } = isAuthenticated()

    const loadQuestions = () => {
        getAllQuestions(token).then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                console.log(data)
                setQuestions(data)
            }
        })
    }

    useEffect(() => {
        loadQuestions()
    }, [])

    return (
        <div className="dashboard" >
            <Menu />
            <div className="allQues">
                {
                    questions && questions.map((q, i) => (
                        <div key={i} className="container singleQuestion" >

                            <h3>Ques {i + 1}: {q.ques}</h3>
                            {
                                q.options && q.options.map((option, i) => (
                                    <p>{i + 1}. {option} </p>
                                ))
                            }
                            <h4>Correct Answer:{q.answer} </h4>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllQuestions