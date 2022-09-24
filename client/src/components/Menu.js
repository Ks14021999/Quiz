import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, signout } from '../auth'

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#ff9900' }
    }
    else {
        return { color: '#ffffff' }
    }
}

const Menu = ({ history }) => {

    const { user: { role } } = isAuthenticated()

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

            <ul className="navbar-nav" >


                {!isAuthenticated() ? (
                    <Fragment>
                        <li className="nav-item" >
                            <Link className="nav-link" to="/" style={isActive(history, "/")}>Login</Link>

                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to="/register" style={isActive(history, "/register")}>Register</Link>
                        </li>
                    </Fragment>
                ) : (
                        <Fragment>
                            {
                                role == 1
                                    ? <li className="nav-item" >
                                        <Link className="nav-link" to="/admin/dashboard" style={isActive(history, "/admin/dashboard")}>Dashboard</Link>

                                    </li>
                                    : <li className="nav-item" >
                                        <Link className="nav-link" to="/user/dashboard" style={isActive(history, "/user/dashboard")}>Dashboard</Link>

                                    </li>

                            }
                            <li className="nav-item" >
                                <Link className="nav-link" to="/leaderboard" style={isActive(history, "/leaderboard")}>Leaderboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="" style={{ cursor: 'pointer', color: '#ffffff' }}
                                    onClick={() =>
                                        signout(() => {
                                            history.push('/')
                                        })
                                    } >SignOut</Link>

                            </li>
                        </Fragment>
                    )}


            </ul>
        </nav>
    )

}
export default withRouter(Menu)