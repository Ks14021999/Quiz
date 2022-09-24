import React, { useState } from 'react'
import { signup } from '../auth'
import { Link } from 'react-router-dom'


const SignUp = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    })

    const { name, email, password, error, success } = values
    //this is HIGHER ORDER FUNCTION: a function returnning another function
    const handleChange = name => event => {
        setValues({
            ...values,
            error: false,
            [name]: event.target.value
        })
    }


    const clickSubmit = event => {
        event.preventDefault()
        setValues({ ...values, error: false })
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                }
                else {
                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true
                    })
                }
            })
    }


    const signUpForm = () => (

        <div className="container">
            <div className="sidenav">
                <div className="login-main-text">
                    <h1>Quiz</h1><h2>Login Page</h2>
                    <p>Login or register from here to access the quiz.</p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        {showSuccess()}
                        {showError()}
                        <div className="card">
                            <div className="card-header">
                                <h3>Register</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" className="form-control" onChange={handleChange('name')} value={name} placeholder="Name" />
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" className="form-control" onChange={handleChange('email')} value={email} placeholder="Email" />
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control" onChange={handleChange('password')} value={password} placeholder="password" />
                                    </div>
                                    <div className="form-group">
                                        <button onClick={clickSubmit} className="btn float-right login_btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links">
                                    Already have an account?<Link to="/">Login</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? "" : 'none' }}>
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            New Account is created . Please <Link to="/">SignIn</Link>
        </div>
    )

    return (
        <div className="">

            {signUpForm()}

        </div>
    )
}

export default SignUp