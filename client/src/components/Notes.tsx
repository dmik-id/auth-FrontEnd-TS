import { Button, FormControl,  TextField  } from "@material-ui/core";
import React, {FC, useState} from "react";
import { Container } from "@material-ui/core";
import { observer } from "mobx-react-lite";

export{}

const Notes: FC = observer(() =>{

    function notes(value:string) {
        let valueSt:string = ''
        if (value === null){
            valueSt = ''
        }else{
            valueSt = value
        }
        localStorage.setItem('notes', valueSt)
    }

    const [value, setValue] = useState(localStorage.getItem('notes'))

    return(
        <div>
            <Container>
                <FormControl>
                    <h1>Notes</h1>


                    <TextField 
                        onChange={e => setValue(e.target.value)}
                        value={value}
                        label = 'your notes'
                        multiline
                        maxRows ={10}
                        {...notes(value || '')}
                        
                    />

                     <Button onClick ={() => {
                        let valueSt:string = ''
                        if (value === null){
                            valueSt = ''
                        }else{
                            valueSt = value
                        }
                        localStorage.setItem('notes', valueSt)
                        }}>
                        go
                    </Button>  
                </FormControl>
            </Container>
        </div>
    )
})
export default Notes