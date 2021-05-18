import React from "react"
import classes from "./style.module.scss"
import {scores} from "../../providers/scores";
import Title from "../../components/Title";
import moment from "moment";
import {players} from "../../providers/players";
import {getDefeatNumber, getVictoryNumber} from "../../helpers/stats";


const LeaderBoard = () => {

    const stats = players.map((player, index) => {
            const victory = getVictoryNumber(player, scores)
            const defeat = getDefeatNumber(player, scores)
            const rate = Math.round((victory / (victory + defeat)) * 100)
            return {player: player, victory: victory, defeat: defeat, rate: rate}
        }).sort((a, b) => { return b.victory - a.victory })


    return(
        <div className={classes.leaderboard}>
            <div className={classes.container}>

                <Title text={"STATISTIQUES"}/>
                <table className={classes.stats}>
                    <thead>
                    <tr>
                        <th className={classes.winner}>Pseudo</th>
                        <th>Taux de victoire</th>
                        <th className={classes.optional}>Victoires</th>
                        <th className={classes.optional}>Defaites</th>
                    </tr>
                    </thead>

                    <tbody>
                        {stats.map((stat, index) =>
                            <tr key={index}>
                                <td>{stat.player.name}</td>
                                <td>{stat.rate}%</td>
                                <td className={classes.optional}>{stat.victory}</td>
                                <td className={classes.optional}>{stat.defeat}</td>
                            </tr>
                        )}
                    </tbody>
                </table>


                <Title text={"LEADERBOARD"}/>
                <table>
                    <thead>
                    <tr>
                        <th className={classes.winner}>Winner</th>
                        <th>Looser</th>
                        <th>Date</th>
                    </tr>
                    </thead>

                    <tbody>
                    {scores.reverse().map((score, index) =>
                        <tr key={index}>
                            <td>
                                <div className={classes.card} style={{backgroundImage: "url('" + score.winner.fighter.img + "')"}}>
                                    <span>{score.winner.player.name}</span>
                                </div>
                            </td>
                            <td>
                                <div className={classes.card + " " + classes.looser} style={{backgroundImage: "url('" + score.looser.fighter.img + "')"}}>
                                    <span>{score.looser.player.name}</span>
                                </div>
                            </td>
                            <td className={classes.date}>{moment(score.creation_date).format("dddd, MMMM Do YYYY")}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default LeaderBoard