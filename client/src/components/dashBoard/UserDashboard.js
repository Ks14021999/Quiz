import React, { Fragment } from 'react'
import { isAuthenticated } from '../../auth'
import { Link } from 'react-router-dom'
import Menu from '../Menu'

const Dashboard = () => {


    const { user: { name } } = isAuthenticated()




    return (

        <div className="dashboard">
            <Menu />
            <div className="container">
                <h1 className="mb-5">
                    Hello {name} <i class="fas fa-grin-beam"></i> ! Welcome :)
                </h1>
                <p className="mb-5">
                    There is a list of html questions that will clear your html concepts.
                    Our html quiz covers html fundamentals, advance concepts and other other topics.
                </p>
                <p>  To take a quiz click on the button below that will lead you to the page which shows instruction and
                button to start the test.<i class="fas fa-arrow-circle-down"></i>
                </p>
                <Link to="/startquiz"> <button className="mb-5 badge badge-pill">
                    <h3>Take a Quiz</h3>
                </button></Link>
                <h3>Good Luck! </h3>
            </div>
        </div>

    )
}

export default Dashboard