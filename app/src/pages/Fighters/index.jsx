import React from "react"
import classes from "./style.module.scss"
import {fighters} from "../../providers/fighters";


const Fighters = () => {

    return(
        <div className={classes.fighters}>
            {fighters.length}
            {fighters.sort().map((fighter) =>
                <div>
                    {fighter.name}
                </div>
            )}
        </div>
    )
}


export default Fighters