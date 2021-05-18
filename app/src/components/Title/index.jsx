import React from "react"
import classes from "./style.module.css"


const Title = (props) => {

    return (
        <h1 className={classes.title}>{props.text}</h1>
    )
}


export default Title