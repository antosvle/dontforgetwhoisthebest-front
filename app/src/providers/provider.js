import {getFightersFromApi} from "./fighters";
import {getPlayersFromApi} from "./players";
import {getScoresFromApi} from "./scores";


export const loadData = () => {

    return new Promise((launch) => {

        Promise.all([
            getFightersFromApi(),
            getPlayersFromApi(),
            getScoresFromApi()
        ])
            .then((resolves) => {
                const validator = []
                resolves.forEach((resolve) => {
                    if(resolve.type === "error") console.error(resolve.payload)
                    else validator.push(true)
                })

                if(validator.length === resolves.length) launch()
            })
    })
}