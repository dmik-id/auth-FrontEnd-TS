import React from "react";
import { AppBar, Button, Container, Link } from "@material-ui/core";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import { LANDING_ROUTE, USERLIST_ROUTE } from "../utils/consts";
import { IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/core'

export{}


const appbar:FC = () =>{

    return(

        <Container>

            <AppBar  position="static">
                <Link href={LANDING_ROUTE} color="inherit">
                    Landing

                </Link>

                <Link href={USERLIST_ROUTE} color="inherit">
                    Userlist

                </Link>


            </AppBar>
        </Container>
    )
}
export default appbar



