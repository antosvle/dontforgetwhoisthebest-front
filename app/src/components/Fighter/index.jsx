import React from "react";
import classes from "./style.module.scss"


const Fighter = (props) => {

    return(
        <div onClick={props.onClick} className={(props.selected) ? classes.fighter + " " + classes.selected : classes.fighter}>
            <div className={classes.layer} style={{backgroundImage: "url('" + props.img + "')"}}>
                    <span>
                        {props.name}
                    </span>
            </div>
        </div>
    )
}


export default Fighter