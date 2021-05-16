import React, {useState} from "react"
import classes from "./style.module.scss"
import Button from "../../components/Button";
import {faFire, faSync, faTrophy} from "@fortawesome/free-solid-svg-icons";
import Update from "../../components/Update";
import Fight from "../../components/Fight";


const Home = () => {

    const [updateOpen, setUpdateOpen] = useState(false)
    const [fightOpen, setFightOpen] = useState(false)
    const spacing = 40


    const handleOpenUpdate = () => {
        setUpdateOpen(true)
    }


    const handleCloseUpdate = () => {
        setUpdateOpen(false)
    }


    const handleOpenFight = () => {
        setFightOpen(true)
    }


    const handleCloseFight = () => {
        setFightOpen(false)
    }


    return(
        <div className={classes.home}>
            <div className={classes.btnContainer}>
                <Button text={"FIGHT !"} icon={faFire} onClick={handleOpenFight} style={{marginBottom: spacing}}/>
                <Button text={"LEADERBOARD"} icon={faTrophy} href={"/leaderboard"} style={{marginBottom: spacing}}/>
                <Button text={"MISE A JOUR"} icon={faSync} onClick={handleOpenUpdate}/>
            </div>
            <Fight open={fightOpen} handleClose={handleCloseFight}/>
            <Update open={updateOpen} handleClose={handleCloseUpdate}/>
        </div>
    )
}


export default Home