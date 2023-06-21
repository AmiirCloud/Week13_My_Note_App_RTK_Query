import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const BASE_URL  =  "http://localhost:9000"
export const NotesSlice = createApi({
    reducerPath:"notesAPI",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL,
    }),
    endpoints:(builder)=>({

        fetchNotes:builder.query({
            query:()=>{
            return{
            url:"notes",
            method:"GET"
            }
            }
        })

    })
})
export const {useFetchNotesQueery} =  NotesSlice
console.log(NotesSlice.reducer)
export default NotesSlice.reducer;