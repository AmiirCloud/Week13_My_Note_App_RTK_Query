import { configureStore } from '@reduxjs/toolkit'
import { NotesSlice } from './api/NoteSlice'
import {setupListeners} from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
   [NotesSlice.reducerPath]:NotesSlice.reducer

    },

    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(NotesSlice.middleware)
})

setupListeners(store.dispatch)