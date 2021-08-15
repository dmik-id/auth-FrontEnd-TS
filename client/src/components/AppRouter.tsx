  
import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {LANDING_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {store} = useContext(Context)

    console.log(store)
    return (
        <Switch>
            {store.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={LANDING_ROUTE}/>
        </Switch>
    );
});

export default AppRouter;