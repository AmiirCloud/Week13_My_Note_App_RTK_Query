import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const BASE_URL  =  "http://localhost:9000"
export const NotesSlice = createApi({
    reducerPath:"notesAPI",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL,
    }),
    tagTypes:['notes'],
    endpoints:(builder)=>({
        fetchNotes:builder.query({
            query:()=>{
            return{
            url:"notes",
            method:"GET"
            }}
            ,providesTags:["notes"]
        }),
        addNote:builder.mutation({
            query:(newNote)=>{
                return{
                    url:"create_note",
                    method:"POST",
                    body:newNote
                }
            },
            invalidatesTags:["notes"]
        })
        ,editNote:builder.mutation({
            query:({noteid,updateNote})=>{
             return{
                url:`update_note/${noteid}`,
                method:"PUT",
                body:updateNote,
             }

            },
            invalidatesTags:["notes"]

        })
    })
})
export const {useFetchNotesQuery,useAddNoteMutation,useEditNoteMutation} =  NotesSlice

export default NotesSlice.reducer;