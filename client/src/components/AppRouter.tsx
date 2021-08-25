
import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {publicRoutes, authRoutes} from "../routes";
import {LANDING_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


export{}

const AppRouter = () => {
    const {store} = useContext(Context)

    return (
        <Switch>

            {/* {store.isAuth && } */}

            {store.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}


            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}

            <Redirect to={LANDING_ROUTE}/>
        </Switch>
    );
};

export default observer(AppRouter);