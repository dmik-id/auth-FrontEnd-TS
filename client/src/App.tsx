import React, {FC, useContext, useEffect, useState} from 'react';
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {IUser} from "./models/IUser";
import UserService from "./services/UserService";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import AppBar from './components/AppBar'


const App: FC = () => {
    const {store} = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    if (store.isLoading) {
        return <div>Загрузка...</div>
    }

    // if (!store.isAuth) {
    //     return (
    //         <div>
    //             <LoginForm />
    //             <Button onClick={getUsers}>Получить пользователей</Button>
    //         </div>
    //     );
    // }

    return (
        <BrowserRouter>

            <AppBar />
            <AppRouter /> 
            
        
        </BrowserRouter>
        

        // <div>
        //     <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
           
        //     <Button onClick={() => store.logout()}>Выйти</Button>
        //     <div>
        //         <Button onClick={getUsers}>Получить пользователей</Button>
        //     </div>
            // {users.map(user =>
            //     <div key={user.email}>{user.email}</div>
            // )}
        // </div>
    );
};

export default observer(App);
