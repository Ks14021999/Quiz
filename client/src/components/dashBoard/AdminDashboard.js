import React from 'react'
import { isAuthenticated } from '../../auth'
import { Link } from 'react-router-dom'
import Menu from '../Menu'

const AdminDashboard = () => {
    const { user: { name } } = isAuthenticated()

    return (

        <div className="dashboard">
            <Menu />
            <div className="container">
                <h1 className="mb-5">
                    Hello Admin {name} <i class="fas fa-grin-beam"></i> ! Welcome :)
            </h1>
                <p className="mb-5">
                    You can add New Questions for the quiz.
                </p>

                <Link to="/addques"> <button className="mb-5 badge badge-pill">
                    <h3>Add Question</h3>
                </button></Link>
                <Link to="/getques"> <button className="mb-5 badge badge-pill">
                    <h3>Get All Questions</h3>
                </button></Link>
            </div>
        </div>

    )
}

export default AdminDashboard