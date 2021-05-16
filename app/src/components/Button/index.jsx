import React from "react";
import classes from "./style.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";


const Button = (props) => {

    if(typeof props.href !== "undefined")
        return(
            <Link to={props.href} className={classes.btn} style={props.style}>
                <FontAwesomeIcon icon={props.icon}/>
                {props.text}
            </Link>
        )

    else
        return(
            <button className={classes.btn} onClick={props.onClick} style={props.style}>
                <FontAwesomeIcon icon={props.icon}/>
                {props.text}
            </button>
        )
}


export default Button