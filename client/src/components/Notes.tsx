import { Button, FormControl,  TextField  } from "@material-ui/core";
import React, {FC, useState} from "react";
import { Container } from "@material-ui/core";
import { observer } from "mobx-react-lite";

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

    return(
        <div>
            <Container>
                <FormControl>
                    <h1>Notes</h1>


                    <TextField 
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        label = 'title'
                        {...saveTitle(title || '')}
                    />


                    <TextField 
                        onChange={e => setValue(e.target.value)}
                        value={value}
                        label = 'full text'
                        multiline
                        maxRows ={10}
                        {...saveNote(value || '')}
                        
                    />
                    
 
                </FormControl>
            </Container>
        </div>
    )
})
export default Notes