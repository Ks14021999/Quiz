import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import LeaderBoard from './LeaderBoard'

//Component using Hooks
const Timer = ({ showLeaderBoard }) => {
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(6)
    // const [endTest, setEndTest] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {

            if (min === 0 && sec === 0) {
                // setEndTest(true)
                showLeaderBoard()
            }

            setSec(sec => sec - 1);
            if (sec === 0) {
                setSec(59)
                setMin(min => min - 1)
            }
        }, 1000);
        return () => clearInterval(interval);
    })

    return (
        <div>
            <h2 className="timer badge badge-pill"><i className="fas fa-clock"></i>{"  "}{min > 9 ? min : `0${min}`}:{sec > 9 ? sec : `0${sec}`}</h2>

        </div>
    )

}

export default Timer