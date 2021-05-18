import axios from "axios";


export let scores = []


export const addScore = (new_score) => {
    scores.push(new_score)
}


export const getScoresFromApi = () => {

    return new Promise((resolve) => {
        const backend_url = (typeof process.env.BACKEND_URL !== "undefined")? process.env.BACKEND_URL : "http://localhost"
        axios.get(backend_url + "/api/scores", {headers: {Accept: "application/json"}})

            .then((res) => {
                scores = [...res.data]
                resolve({type: "done", payload: null})
            })
            .catch((err) => resolve({type: "error", payload: err}))
    })
}


export const postScores = (winner, looser, stage) => {

    const backend_url = (typeof process.env.BACKEND_URL !== "undefined")? process.env.BACKEND_URL : "http://localhost"
    return axios.post(backend_url + "/api/scores", {
        winner: "/api/selections/" + winner.id,
        looser: "/api/selections/" + looser.id,
        stage: stage,
        creationDate: new Date()
    })
}