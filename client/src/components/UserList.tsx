import React from "react";
import { AppBar, Button, Container, Link } from "@material-ui/core";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import { LANDING_ROUTE } from "../utils/consts";
import UserService from "../services/UserService";
import { useContext, useState } from "react";
import { Context } from '../index'
import {IUser } from '../models/IUser'



export{}


const UserList:FC = () =>{
    const {store} = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);


    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }


    return(
        <div>
            <Container>
                <Button onClick={getUsers}>USERS</Button>


                    {users.map(user =>
                        <div key={user.email}>{user.email}</div>
                    )}
            </Container>

        </div>
    )
}
export default observer(UserList)