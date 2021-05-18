import axios from "axios";


export let players = []


export const setPlayers = (refresh_players) => {
    players = [...refresh_players]
}


export const addPlayer = (new_player) => {
    players.push(new_player)
}


export const getPlayersFromApi = () => {

    return new Promise((resolve) => {
        const backend_url = (typeof process.env.BACKEND_URL !== "undefined")? process.env.BACKEND_URL : "http://localhost"
        axios.get(backend_url + "/api/players", {headers: {Accept: "application/json"}})

            .then((res) => {
                players = [...res.data]
                resolve({type: "done", payload: null})
            })
            .catch((err) => resolve({type: "error", payload: err}))
    })
}


export const postPlayer = (name) => {

    const backend_url = (typeof process.env.BACKEND_URL !== "undefined")? process.env.BACKEND_URL : "http://localhost"
    return axios.post(backend_url + "/api/players", {
        name: name,
        creationDate: new Date()
    })
}
