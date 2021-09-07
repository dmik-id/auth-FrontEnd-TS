import { observer } from "mobx-react-lite";
import React from "react";
import { FC } from "react";
import { Container } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { useState } from "react";
import { IUser } from "../models/IUser";
import UserService from "../services/UserService";
import { Button } from "@material-ui/core";
import { Context } from "..";
import { useContext } from "react";
export{}
const Admin:FC = observer(() =>{
    const {store} = useContext(Context)
    const [users, setUsers] = useState<IUser[]>([]);
    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
             console.log(e);
        }
    }
    // getUsers()
    console.log(store.user.role)

    

    return(
        <div>
            <Container>
                <FormControl>
                    <h1>ADMIN</h1>
                    <Button onClick={getUsers}>USERS</Button>


                        {users.map(user =>
                            <div key={user.email}>{user.role}</div>
                        )}
             
            
                </FormControl>
            </Container>
        </div>
    )
})

export default Admin


