import  { gql } from '@apollo/client'

export const GET_ALL_NOTES = gql`
    query{
        note{
        id
        title
        fullText
        author
        date
        
    }
    }
    
`