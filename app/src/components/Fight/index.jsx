import React from "react"
import classes from "./style.module.scss"
import {Modal} from "react-responsive-modal";


const Fight = (props) => {


    const handleClose = () => {
        props.handleClose()
    }


    return (
        <Modal open={props.open} onClose={handleClose} center>
            <div className={classes.fight}>

            </div>
        </Modal>
    )
}


export default Fight