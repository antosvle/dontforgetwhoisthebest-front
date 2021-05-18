import React, {useState, useEffect} from "react"
import classes from "./style.module.scss"
import {fighters} from "../../providers/fighters";
import Fighter from "../../components/Fighter";
import Button from "../../components/Button";
import {postSelections} from "../../providers/selections";
import {faArrowRight, faSync} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
import {addScore, postScores} from "../../providers/scores";
import {players} from "../../providers/players";
import Update from "../../components/Update";


const Fight = () => {

    const [pseudo, setPseudo] = useState("")
    const [fighter, setFighter] = useState(null)
    const [savePlayer, setSavePlayer] = useState([])
    const [updateOpen, setUpdateOpen] = useState(false)
    const history = useHistory();
    const suggestNames = players.map((player) => {return player.name})
        .filter((player) => player.toLowerCase().includes(pseudo.toLowerCase()) && player !== pseudo)


    const handleOpenUpdate = () => {
        setUpdateOpen(true)
    }


    const handleCloseUpdate = () => {
        setUpdateOpen(false)
    }


    const nextPlayer = () => {
        const new_player = {pseudo: pseudo, fighter: fighter}
        const _savePlayer = [...savePlayer]
        _savePlayer.push(new_player)

        setSavePlayer(_savePlayer)
        setPseudo("")
        setFighter(null)
    }


    const registerResult = async (winner_id) => {
        postSelections([
            {pseudo: savePlayer[0].pseudo, fighter: savePlayer[0].fighter, isWinner: winner_id === 0},
            {pseudo: savePlayer[1].pseudo, fighter: savePlayer[1].fighter, isWinner: winner_id === 1}
        ]).then((new_selections) => {

            const winner = new_selections.find((selection) => selection.isWinner)
            const looser = new_selections.find((selection) => !selection.isWinner)

            postScores(winner.object, looser.object, null)
                .then((res) => {
                    addScore(res.data)
                    history.push("/leaderboard")
                }).catch((err) => console.error(err))
        }).catch((err) => console.error(err))
    }


    if(savePlayer.length !== 2)
        return (
            <div className={classes.fight}>
                <div className={classes.container}>
                    <h1>{(savePlayer.length === 0)? "JOUEUR 1" : "JOUEUR 2"}</h1>
                    <label>
                        <span className={classes.title}>- Pseudo -</span>
                        <div className={classes.wrapper}>
                            <input id={"autocomplete"} type={"text"} value={pseudo} autoComplete={"off"}
                                   onChange={(e) => setPseudo(e.target.value)}/>
                            <div className={classes.autosuggest}>
                                {pseudo !== "" && suggestNames.map((name, index) =>
                                    <div key={index} className={classes.item} onClick={() => setPseudo(name)}>{name}</div>
                                )}
                            </div>
                        </div>
                    </label>

                    <label>
                        <span className={classes.title}>- Fighter -</span>
                        <div className={classes.fighters} style={(fighter !== null)? {justifyContent: "center"} : undefined}>

                            {fighters.length === 0 &&
                                <Button text={"MISE A JOUR"} icon={faSync} onClick={handleOpenUpdate}
                                        style={{margin: "auto"}}/>
                            }


                            {(fighter !== null)?
                                <Fighter selected onClick={() => setFighter(null)}
                                         name={fighter.name} img={fighter.img}/>

                                :

                                <>
                                    {fighters.sort((a, b) => a.name.localeCompare(b.name)).map((fighter, index) =>
                                        <Fighter key={index} onClick={() => setFighter(fighter)}
                                                 name={fighter.name} img={fighter.img}/>
                                    )}
                                </>
                            }
                        </div>
                    </label>

                    {pseudo !== "" && fighter !== null &&
                        <Button text={"SUIVANT"} icon={faArrowRight} onClick={nextPlayer}/>
                    }
                </div>
                <Update open={updateOpen} handleClose={handleCloseUpdate}/>
            </div>
        )

    else
        return (
            <div className={classes.fight}>
                <div className={classes.container}>
                    <h1>SELECTIONNER LE VAINQUEUR</h1>
                    <div className={classes.versus}>
                        <div className={classes.player} onClick={() => registerResult(0)}
                             style={{backgroundImage: "url('" + savePlayer[0].fighter.img +  "')"}}>
                            <h2>{savePlayer[0].pseudo}</h2>
                        </div>
                        <span>VS</span>
                        <div className={classes.player}  onClick={() => registerResult(1)}
                             style={{backgroundImage: "url('" + savePlayer[1].fighter.img +  "')"}}>
                            <h2>{savePlayer[1].pseudo}</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
}


export default Fight