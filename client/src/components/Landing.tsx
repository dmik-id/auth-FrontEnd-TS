import { Button, FormControl } from "@material-ui/core";
import React, {FC} from "react";
import { Link } from "@material-ui/core";
import { LOGIN_ROUTE } from "../utils/consts";
import { Container } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
export{}

const Landing: FC = () =>{
    return(
        <div>

 

            <Container>
                <FormControl>


                    Landing
                    <Link href={LOGIN_ROUTE} color="inherit">
                        Authorization
                    </Link>
                </FormControl>
            </Container>
        </div>
    )
}
export default Landing