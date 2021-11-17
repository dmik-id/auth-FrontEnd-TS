import { Card, FormControl, Input, TextField } from "@material-ui/core";
import React, {FC, useEffect, useState} from "react";
import { Container } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import { INote } from "../../models/INote";
import { TEST_ROUTE } from "../../utils/consts";
import { useQuery } from "@apollo/client";
import { GET_ALL_NOTES } from "../../quary/note";

const EditNote: FC = observer(() =>{


    const [fullText, setFullText] = useState('')
    const [title, setTitle] = useState('')
    const {data , loading, error, refetch} = useQuery(GET_ALL_NOTES)
    const [notes, setNotes] = useState([])
    let { id } = useParams() as any;
    function saveNote(value:string) {
        let valueSt:string = ''
        if (value === null){
            valueSt = ''
        }else{
            valueSt = value
        }
        localStorage.setItem('notes', valueSt)
    }


    function saveTitle(value:string) {
        let valueSt:string = ''
        if (value === null){
            valueSt = ''
        }else{
            valueSt = value
        }
        localStorage.setItem('title', valueSt)
    }


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

                {notes.filter((note:INote) => note.id == id).map((note:INote) =>

                    <div key={note.id}>
                        <p>title: {note.title};</p> 
                        
                        <p>fullText: {note.fullText}</p> 
                        
                        <p>author: {note.author} ;</p> 
                        
                        <p>date: {note.date}</p> 
                        
                        <p>
                        <TextField 
                            onChange={e => setTitle(e.target.value)}
                            value={title || ''}
                            label = 'title'
                            {...saveTitle(title || '')}
                        />


                        <TextField 
                            onChange={e => setFullText(e.target.value)}
                            value={fullText || ''}
                            label = 'full text'
                            multiline
                            maxRows ={10}
                            {...saveNote(fullText || '')}
                        
                        />
                        
                        
                        
                        
                        </p>


                        <input type="file" multiple 
                            name="myImage" accept=".png, .jpeg" className="multiple-upload" 
                        />
                    </div>)
                }

            </div>
        </Container>
    )
})
export default EditNote