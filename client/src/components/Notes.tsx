import { Button, FormControl,  TextField  } from "@material-ui/core";
import React, {FC, useEffect, useState} from "react";
import { Container } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_NOTES } from "../quary/note";
import { INote } from "../models/INote";
import { CREATE_USER } from "../mutations/note";

export{}

const Notes: FC = observer(() =>{

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

    const addNote = (title:string, fullText:string) => {
        newNote({
            variables:{
                createNoteData: {
                    title, fullText
                }
            }
        }).then(({data}) => {
            console.log(data)

        })
        
    }
    const [fullText, setFullText] = useState(localStorage.getItem('notes'))
    const [title, setTitle] = useState(localStorage.getItem('title'))
    const [notes, setNotes] = useState([])
    const {data , loading, error, refetch} = useQuery(GET_ALL_NOTES)
    const [newNote] = useMutation(CREATE_USER)


    useEffect(() => {
        if(!loading){
            setNotes(data.getAllNote)
        }
    }, [data])

    return(
        <div>
            <Container>
                <FormControl>
                    <h1>Notes</h1>


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
                    <Button onClick={() => addNote(title || '', fullText || '')}>
                        SAVE
                    </Button>

                    <Button>
                        GET NOTES
                    </Button>
                        
                        {notes.map((note:INote) => <div>
                            title: {note.title} ; author: {note.author} ; date: {note.date}
                        </div>)}
                             
 
                </FormControl>

                



            </Container>
        </div>
    )
})
export default Notes