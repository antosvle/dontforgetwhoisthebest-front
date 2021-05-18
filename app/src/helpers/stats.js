

export function getVictoryNumber(player, scores){
    let victory = 0
    scores.forEach((score) => {
        if (score.winner.player.name === player.name) victory++
    })
    return victory
}


export function getDefeatNumber(player, scores){
    let defeat = 0
    scores.forEach((score) => {
        if (score.looser.player.name === player.name) defeat++
    })
    return defeat
}