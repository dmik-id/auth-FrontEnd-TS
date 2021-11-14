import { Card, FormControl, Input } from "@material-ui/core";
import React, {FC, useEffect, useState} from "react";
import { Container } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import { INote } from "../../models/INote";
import { TEST_ROUTE } from "../../utils/consts";
import { useQuery } from "@apollo/client";
import { GET_ALL_NOTES } from "../../quary/note";

const EditNote: FC = observer(() =>{
    
    const {data , loading, error, refetch} = useQuery(GET_ALL_NOTES)
    const [notes, setNotes] = useState([])
    let { id } = useParams() as any;


    useEffect(() => {
        if(!loading){
            setNotes(data.getAllNote)
        }
    }, [])

    useEffect(() => {
        if(!loading){
            setNotes(data.getAllNote)
        }
    }, [data])

    return(
        <Container>
            <div>
                <h1>{id}</h1>
            </div>
        </Container>
    )
})
export default EditNote