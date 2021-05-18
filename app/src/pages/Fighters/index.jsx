import React from "react"
import classes from "./style.module.scss"
import {fighters} from "../../providers/fighters";


const Fighters = () => {

    return(
        <div className={classes.fighters}>
            <div className={classes.container}>

                {fighters.sort((a, b) => a.name.localeCompare(b.name)).map((fighter, index) =>
                    <a key={index} target="_blank" rel="noopener noreferrer" href={fighter.page}
                       className={classes.fighter}>

                        <div className={classes.layer} style={{backgroundImage: "url('" + fighter.img + "')"}}>
                            <span>
                                {fighter.name}
                            </span>
                        </div>
                    </a>
                )}

            </div>
        </div>
    )
}


export default Fighters