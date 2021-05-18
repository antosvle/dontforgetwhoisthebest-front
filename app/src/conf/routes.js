import React from 'react';
import Home from "../pages/Home";
import LeaderBoard from "../pages/Leaderboard";
import Fighters from "../pages/Fighters";
import Stages from "../pages/Stages";
import Fight from "../pages/Fight";


export const routes = [
    {
        path: "/",
        exact: true,
        comp: () => <Home/>
    },
    {
        path: "/fight",
        exact: true,
        comp: () => <Fight/>
    },
    {
        path: "/leaderboard",
        exact: true,
        comp: () => <LeaderBoard/>
    },
    {
        path: "/fighters",
        exact: true,
        comp: () => <Fighters/>
    },
    {
        path: "/stages",
        exact: true,
        comp: () => <Stages/>
    }
];
