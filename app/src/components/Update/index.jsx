import React, {useEffect, useState} from "react"
import { Modal } from 'react-responsive-modal';
import classes from "./style.module.scss"
import nintendo_loader from "../../res/animations/nintendo.gif";
import ReactTypingEffect from 'react-typing-effect';
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare} from "@fortawesome/free-regular-svg-icons";
import {setFighters} from "../../providers/fighters";


const Update = (props) => {

    const [isRunning, setRunning] = useState(false)
    const [isUpdate, setUpdate] = useState(false)


    useEffect(() => {
        if(props.open && !isRunning) refreshMetaData()
    })


    const refreshMetaData = () => {
        setRunning(true)
        const backend_url = (typeof process.env.BACKEND_URL !== "undefined")? process.env.BACKEND_URL : "http://localhost"

        axios.get(backend_url + "/scraper/refresh/fighters")
            .then((res) => {
                setFighters(res.data)
                setUpdate(true)
                setTimeout(() => props.handleClose(), 1500)
            })
            .catch((err) => {
                setTimeout(() => props.handleClose(), 1500)
                console.error(err)
            })
    }


    const handleClose = () => {
        props.handleClose()
        setRunning(false)
    }

    return (
        <Modal open={props.open} onClose={handleClose} center>
            <div className={classes.container}>
                {(isUpdate)?
                    <FontAwesomeIcon icon={faCheckSquare}/>

                    :

                    <>
                        <img src={nintendo_loader} alt={"Nintendo animations"}/>
                        <div className={classes.about}>
                            <p className={classes.site}>www.smashbros.com</p>
                            <ReactTypingEffect
                                speed={40}
                                eraseSpeed={20}
                                eraseDelay={1800}
                                typingDelay={500}
                                text={["R??cup??ration des Fighters ...", "R??cup??ration des Stages ...", "Sauvegarde ..."]}
                                displayTextRenderer={(text, i) => {
                                    return (
                                        <p>
                                            {text.split('').map((char, i) => {
                                                const key = `${i}`;
                                                return (
                                                    <span key={key}>{char}</span>
                                                );
                                            })}
                                        </p>
                                    );
                                }}
                            />
                            <p className={classes.info}>(Cette op??ration peut prendre plusieurs minutes)</p>
                        </div>
                    </>
                }
            </div>
        </Modal>
    )
}


export default Update