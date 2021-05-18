import React, {useState} from "react"
import classes from "./style.module.scss"
import {fighters} from "../../providers/fighters";
import Fighter from "../../components/Fighter";
import Title from "../../components/Title";
import Button from "../../components/Button";
import {faSync} from "@fortawesome/free-solid-svg-icons";
import Update from "../../components/Update";


const Fighters = () => {

    const [updateOpen, setUpdateOpen] = useState(false)


    const handleOpenUpdate = () => {
        setUpdateOpen(true)
    }


    const handleCloseUpdate = () => {
        setUpdateOpen(false)
    }


    return(
        <div className={classes.fighters}>
            <div className={classes.container}>

                <Title text={"FIGHTERS"}/>

                <div className={classes.list}>
                    {fighters.length === 0 &&
                        <Button text={"MISE A JOUR"} icon={faSync} onClick={handleOpenUpdate}
                                style={{margin: "auto"}}/>
                    }

                    {fighters.sort((a, b) => a.name.localeCompare(b.name)).map((fighter, index) =>
                        <Fighter key={index} onClick={() => window.open(fighter.page, '_blank')}
                                 name={fighter.name} img={fighter.img}/>
                    )}
                </div>
            </div>

            <Update open={updateOpen} handleClose={handleCloseUpdate}/>
        </div>
    )
}


export default Fighters