import axios from "axios";


export let fighters = []


export const setFighters = (refresh_fighters) => {
    fighters = [... refresh_fighters]
}


export const getFightersFromApi = () => {

    return new Promise((resolve) => {
        const backend_url = (typeof process.env.BACKEND_URL !== "undefined")? process.env.BACKEND_URL : "http://localhost"
        axios.get(backend_url + "/api/fighters", {headers: {Accept: "application/json"}})

            .then((res) => {
                fighters = [...res.data]
                resolve({type: "done", payload: null})
            })
            .catch((err) => resolve({type: "error", payload: err}))
    })
}
