import React, {FC, useContext, useEffect} from 'react';
import {Context} from "./index";
import {observer} from "mobx-react-lite";
// import {IUser} from "./models/IUser";
// import UserService from "./services/UserService";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import AppBar from './components/AppBar/AppBar'
// import { useState } from 'react';


const App: FC = observer(() => {
    const {store} = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('token')){
            store.setAuth(true)

        }
    }, [])

    if (store._isLoading) {
        return <div>Загрузка...</div>
    }


    return (
        <BrowserRouter>
            <AppBar />
            <AppRouter /> 
        </BrowserRouter>
        
    );
});

export default App;
