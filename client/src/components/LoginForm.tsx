import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container'
const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);

    return (
        <div>
            <Container
                        className="d-flex justify-content-center align-items-center"
                        style={{height: window.innerHeight - 54}}
            >
                <Card style={{width: 200}} className="p-5">
                    <Input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        placeholder='Email'
                    />
                    <Input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder='Пароль'
                    />
                    <Button onClick={() => store.login(email, password)}>
                        Логин
                    </Button>
                    <Button onClick={() => store.registration(email, password)}>
                        Регистрация
                    </Button>
                </Card>
            </Container>
        </div>
    );
};

export default observer(LoginForm);
