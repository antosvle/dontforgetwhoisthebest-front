import React from "react"
import classes from "./style.module.scss"
import {Link} from "react-router-dom";
import nintendoLogo from "../../res/images/nintendo.png"


const Header = () => {

    return (
        <header className={classes.header}>
            <div className={classes.top}>
                <div>
                    <img src={nintendoLogo} alt={"Nintendo logo"}/>
                    <h1>DFWITB</h1>
                </div>

                <p>Leaderboard Smash Bros par <span>Antoine Savalle</span></p>
            </div>

            <nav className={classes.navbar}>
                <Link to={"/"} >Accueil</Link>
                <Link to={"/leaderboard"} >Leaderboard</Link>
                <Link to={"/fighters"} >Fighters</Link>
                <Link to={"/stages"} >Stages</Link>
            </nav>
        </header>
    )
}


export default Header