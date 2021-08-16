import React, {useContext, useState, FC} from 'react';
import { ReactDOM } from 'react';
import { FormControl } from '@material-ui/core';
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LANDING_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'


const Auth:FC = () => {
    const {store} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            store.setUser(store._user) ///////////////////// type
            store.setIsAuth(true)
            history.push(LANDING_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }
    

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 300}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Authorization' : "Registration"}</h2>
                <FormControl >
                    <Input
                        className="mt-3"
                        placeholder="email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        className="mt-3"
                        placeholder="пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                 <NavLink to={REGISTRATION_ROUTE}>Registrate!</NavLink>
                            </div>
                            :
                            <div>
                                 <NavLink to={LOGIN_ROUTE}>Sign In!</NavLink>
                            </div>
                        }
                        <Button
                            
                            onClick={click}
                        >
                            {isLogin ? 'Sign In' : 'Registration'}
                        </Button>
                    </Row>

                </FormControl>
            </Card>
        </Container>
    );
};

export default observer(Auth);
