import {addPlayer, players, postPlayer} from "./players";
import axios from "axios";


export const postSelections = (selections) => {

    return Promise.all(selections.map((selection) => {

            return new Promise(async (resolve, reject) => {

                const fighter = selection.fighter
                let player = players.find((player) => player.name === selection.pseudo)

                if (typeof player === "undefined")
                    await postPlayer(selection.pseudo)
                        .then((res) => {
                            player = res.data
                            addPlayer(res.data)
                        })
                        .catch((err) => console.error(err))

                const backend_url = (typeof process.env.BACKEND_URL !== "undefined") ? process.env.BACKEND_URL : "http://localhost"
                await axios.post(backend_url + "/api/selections", {
                    player: "/api/players/" + player.id,
                    fighter: "/api/fighters/" + fighter.id
                })
                    .then((res) => resolve({object: res.data, isWinner: selection.isWinner}))
                    .catch((err) => {
                        console.error(err)
                        reject(err)
                    })
            })
        })
    )
}