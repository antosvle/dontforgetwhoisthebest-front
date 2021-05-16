import React from "react"
import classes from "./style.module.scss"
import {NavLink} from "react-router-dom";
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
                <NavLink exact to={"/"} activeClassName={classes.selected}>Accueil</NavLink>
                <NavLink exact to={"/leaderboard"} activeClassName={classes.selected}>Leaderboard</NavLink>
                <NavLink exact to={"/fighters"} activeClassName={classes.selected}>Fighters</NavLink>
                <NavLink exact to={"/stages"} activeClassName={classes.selected}>Stages</NavLink>
            </nav>
        </header>
    )
}


export default Header