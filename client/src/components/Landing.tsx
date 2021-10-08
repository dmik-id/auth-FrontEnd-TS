import { Card, FormControl, Input } from "@material-ui/core";
import React, {FC} from "react";
import { Container } from "@material-ui/core";
import { observer } from "mobx-react-lite";
export{}

const Landing: FC = observer(() =>{
    return(
        <div>
            <Container>
                <FormControl>
                    <h1>Landing</h1>
                    

                </FormControl>

            </Container>
        </div>
    )
})
export default Landing