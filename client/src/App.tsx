import React, {FC, useContext, useEffect} from 'react';
import {Context} from "./index";
import {observer} from "mobx-react-lite";
// import {IUser} from "./models/IUser";
// import UserService from "./services/UserService";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import AppBar from './components/AppBar'
import { useState } from 'react';


const App: FC = () => {
    const {store} = useContext(Context);
    // const [users, setUsers] = useState<IUser[]>([]);

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (localStorage.getItem('token')) {
            //   store.checkAuth()
        }
    }, [])


    if (store.isLoading) {
        return <div>Загрузка...</div>
    }


    return (
        <BrowserRouter>

            <AppBar />
            <AppRouter /> 
            
        </BrowserRouter>
        
    );
};

export default observer(App);
