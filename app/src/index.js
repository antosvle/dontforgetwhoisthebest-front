import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "./conf/routes";
import {PageTransition} from "@steveeeie/react-page-transition";
import Header from "./components/Header";
import "react-responsive-modal/styles.css";
import {loadData} from "./providers/provider";
import nintendo_loader from "./res/animations/nintendo.gif";


const App = () => {

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        // In background, we load all data needed from the API and then, display the app
        loadData().then(() => setLoading(false))
    }, [])


    return (
        <>
            <div id={"loading"} style={(loading)? {opacity: 1, visibility: "visible"} : undefined}>
                <img src={nintendo_loader} alt={"Nintendo animations"}/>
            </div>


            <BrowserRouter>
                <Header/>

                <div id={"app"}>
                    <Route render={({ location}) =>
                        <PageTransition preset="moveToBottomFromTop" transitionKey={location.pathname}>
                            <Switch location={location}>
                                {routes.map((route, index) =>
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.comp}
                                    />
                                )}
                            </Switch>
                        </PageTransition>
                    }/>
                </div>
            </BrowserRouter>
        </>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'))

