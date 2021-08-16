import React, {useContext, useEffect, useState, FC} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

const App:FC = () => {
    const {store} = useContext(Context)
    const [loading, setLoading] = useState(true)
  

    useEffect(() => {
        check().then(data => {
        
            store.setUser(store._user)/////////////////////////////type
            store.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
};

export default observer(App);