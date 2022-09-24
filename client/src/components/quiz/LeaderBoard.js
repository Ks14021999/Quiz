import React, { useState, useEffect } from 'react'
import { getLeaderBoard } from '../apisFromBackend'
import { isAuthenticated } from '../../auth'
import Menu from '../Menu'

const LeaderBoard = ({ score }) => {

    const [toppers, setToppers] = useState([])

    const { user, token } = isAuthenticated()

    const loadToppers = () => {
        getLeaderBoard(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                console.log(data)
                setToppers(data)

            }
        })
    }


    useEffect(() => {
        setTimeout(() => {
            loadToppers()
        }, 1000);
    }, [])

    const showLeaderBoard = () => (
        <table className="table">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {
                    toppers && toppers.map((t, i) => (
                        <tr key={i + 1} className={i % 2 == 0 ? `even` : 'odd'}>
                            <td>{i + 1}</td>
                            <td>{t.name}</td>
                            <td>{t.score}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )

    return (
        <div className="quiz">
            <Menu />
            {
                score ? <h2 className="score"> <i class="fas fa-marker"></i> Your Score :{score}</h2> : ""
            }
            <h2 > <i class="fas fa-clipboard-list"></i> LeaderBoard</h2>
            <div className="container">
                {showLeaderBoard()}
            </div>
        </div>
    )
}

export default LeaderBoard