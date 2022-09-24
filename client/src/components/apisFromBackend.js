const REACT_APP_API_URL = "/api"

export const getQuestions = (userId, token) => {
    return fetch(`${REACT_APP_API_URL}/ques/find/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json()
        }).catch(err => console.log(err))
}

export const getLeaderBoard = (userId, token) => {
    return fetch(`${REACT_APP_API_URL}/user/leaderboard/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json()
        }).catch(err => console.log(err))
}

export const updateUserScore = (userId, token, user) => {
    return fetch(`${REACT_APP_API_URL}/user/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        }).catch(err => console.log(err))
}

export const createQuestion = (question, userId, token) => {
    return fetch(`${REACT_APP_API_URL}/ques/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(question)
    })
        .then(response => {
            return response.json()
        }).catch(err => console.log(err))
}

export const getAllQuestions = (token) => {
    return fetch(`${REACT_APP_API_URL}/questions`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json()
        }).catch(err => console.log(err))
}
