import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "./conf/routes";
import {PageTransition} from "@steveeeie/react-page-transition";
import Header from "./components/Header";
import "react-responsive-modal/styles.css";


const App = () => {
    return (
        <BrowserRouter>
            <Header/>

            <div id={"app"}>
                <Route render={({ location}) =>
                    <PageTransition preset="scaleDownFromTop" transitionKey={location.pathname}>
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
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));