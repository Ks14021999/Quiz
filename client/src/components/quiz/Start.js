import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu'

const Start = () => {
    return (
        <div className="dashboard">
            <Menu />
            <div>
                <h2>Instructions</h2>
                <h5>Read All the Instructions carefully</h5>
                <hr></hr>
                <p>1. Following quiz provides Multiple Choice Questions (MCQs) related to html. </p>
                <p>2. Each Questions will have 4 choices.</p>
                <p>3. You will have to read all the given answers and click over the correct answer.</p>
                <p>4. All the Questions are <strong>compulsory</strong>.</p>
                <p>5. You will get 1 point for each correct answer. At the end of the Quiz, your total score will be displayed. </p>
                <p>6. The test contains 6 questions and there is  time limit of 6 minutes.</p>
                <p>7. There will be no negative marking.</p>
                <p>8. Maximum score is 6 points.</p>
                <p>9. If you score 0 , then we will not display your score.</p>
                <Link to="/quiz"><h2 className="badge badge-pill badge-primary"> <i class="fas fa-pencil-alt">
                </i> Start Test</h2></Link>

            </div>

        </div>
    )
}

export default Start