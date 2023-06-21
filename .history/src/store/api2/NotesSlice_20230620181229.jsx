import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const BASE_URL  =  "http://localhost:9000"
export const NotesSlice = createApi({
    reducerPath:"notesAPI",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL,
    }),
    endPoints:(builder)=>({

        fetchNotes:builder.queery({
            queery:()=>{
            return{
            url:"notes",
            method:"GET"
            }
            }
        })

    })
})
export const {useFetchNotesQueery} =  NotesSlice
// console.log("notesSlice",NotesSlice.reducer)
export default NotesSlice.reducer;