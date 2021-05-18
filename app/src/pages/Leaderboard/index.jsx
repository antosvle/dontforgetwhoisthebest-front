import React from "react"
import classes from "./style.module.scss"
import {scores} from "../../providers/scores";
import Title from "../../components/Title";
import moment from "moment";


const LeaderBoard = () => {

    return(
        <div className={classes.leaderboard}>
            <div className={classes.container}>

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
                    {scores.reverse().map((score) =>
                        <tr>
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