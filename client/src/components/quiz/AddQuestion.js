import React, { useState } from 'react'
import Menu from '../Menu'
import { createQuestion } from '../apisFromBackend'
import { isAuthenticated } from '../../auth'

const AddQuestion = () => {

    const [values, setValues] = useState({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: 0,
        error: false,
        success: false
    })

    const { question, option1, option2, option3, option4, answer, error, success } = values

    const handleChange = name => event => {
        setValues({
            ...values,
            error: false,
            [name]: event.target.value
        })
    }


    const { user: { _id }, token } = isAuthenticated()
    const clickSubmit = event => {
        event.preventDefault()
        setValues({ ...values, error: false })
        createQuestion({ ques: question, options: [option1, option2, option3, option4], answer: answer }, _id, token)
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                }
                else {
                    setValues({
                        ...values,
                        question: "",
                        option1: "",
                        option2: "",
                        option3: "",
                        option4: "",
                        answer: 0,
                        error: false,
                        success: true
                    })
                }
            })
    }


    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? "" : 'none' }}>
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            Question Added.
        </div>
    )


    const showQuestionForm = () => (
        <div className="addQues">
            <div className="badge badge-warning badge-pill mb-5"><h1> Add A Question  <i class="fas fa-question-circle"></i></h1></div>
            <div className="form">
                <form>
                    <input type="text" onChange={handleChange('question')} value={question} placeholder="Question" required />
                    <input type="text" onChange={handleChange('option1')} value={option1} placeholder="Option 1" required />
                    <input type="text" onChange={handleChange('option2')} value={option2} placeholder="Option 2" required />
                    <input type="text" onChange={handleChange('option3')} value={option3} placeholder="Option 3" required />
                    <input type="text" onChange={handleChange('option4')} value={option4} placeholder="Option 4" required />
                    <input type="number" onChange={handleChange('answer')} value={answer} placeholder="Correct Answer's Option Number" required />
                    <button onClick={clickSubmit} >Add Question</button>
                </form>
            </div>
        </div>

    )

    return (
        <div>
            <Menu />
            <div>
                {showError()}
                {showSuccess()}
                <div className="row">
                    <div className="col-sm-8">{showQuestionForm()}</div>
                    <div className="col-sm-4 example">
                        <h3 className="text-warning">Example:</h3>
                        <p>
                            Question = Who is the father of HTML?
                        </p>
                        <p>
                            option1 = Rasmus Lerdorf
                        </p>
                        <p>
                            option2 = Tim Berners-Lee
                        </p>
                        <p>
                            option3 = Brendan Eich
                        </p>
                        <p>
                            option4 = Sergey Brin
                        </p>
                        <p>
                            answer = 2
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddQuestion