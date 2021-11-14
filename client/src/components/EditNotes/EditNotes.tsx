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
    useEffect(() => {
        if(!loading){
            setNotes(data.getAllNote)
        }
    }, [data])
    return(
        <Container>
            <div>
                <h1>EDIT</h1>
                
                {notes.map((note:INote) =>
                    <div key={note.id}>
                            title: {note.title}; author: {note.author} ; date: {note.date}
                    </div>)}


            </div>
        </Container>
    )
})
export default EditNote