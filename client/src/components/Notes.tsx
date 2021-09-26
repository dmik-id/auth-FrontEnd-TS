import { Button, FormControl,  TextField  } from "@material-ui/core";
import React, {FC, useEffect, useState} from "react";
import { Container } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useQuery } from "@apollo/client";
import { GET_ALL_NOTES } from "../quary/note";
import { INote } from "../models/INote";

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

    const [value, setValue] = useState(localStorage.getItem('notes'))
    const [title, setTitle] = useState(localStorage.getItem('title'))
    const [notes, setNotes] = useState([])
    const {data , loading, error, refetch} = useQuery(GET_ALL_NOTES)


    useEffect(() => {
        if(!loading){
            setNotes(data.getAllNote)
        }
    }, [data])

    // function test(note:INote): string {
    //     return note.title
        
    // }
    // if (notes[0] !== undefined){
    //     console.log(test(notes[0]))
        
    // }
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
                        onChange={e => setValue(e.target.value)}
                        value={value || ''}
                        label = 'full text'
                        multiline
                        maxRows ={10}
                        {...saveNote(value || '')}
                        
                    />
                    <Button>
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