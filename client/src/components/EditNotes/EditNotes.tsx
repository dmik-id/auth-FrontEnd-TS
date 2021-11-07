import { Card, FormControl, Input } from "@material-ui/core";
import React, {FC} from "react";
import { Container } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";

const EditNote: FC = observer(() =>{

    const {id}= useParams() as any
    console.log(id)

    return(
        <Container>
            <div>
                <h1>EDIT</h1>

                
            </div>
        </Container>
    )
})
export default EditNote