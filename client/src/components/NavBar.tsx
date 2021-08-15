import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LANDING_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import { Container } from '@material-ui/core';
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'
import Appbar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { IUser } from '../models/IUser';

const NavBar = observer(() => {
    const {store} = useContext(Context)
    const history = useHistory()
    const user = {} as IUser

    const logOut = () => {
        store.setUser(user) /////////////////// type
        store.setIsAuth(false)
    }
    return (
        <Appbar >
            <Container>
                <NavLink style={{color:'white'}} to={LANDING_ROUTE}>landing</NavLink>
                {store.isAuth ?
                    <Link className="ml-auto" style={{color: 'white'}}>
                        <Button
                            
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Admin Panel
                        </Button>
                        <Button
                            
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Sign Out
                        </Button>
                    </Link>
                    :
                  
                        <Button   onClick={() => history.push(LOGIN_ROUTE)}>Authorization</Button>
                  
                }
            </Container>
        </Appbar>

    );
});

export default NavBar;