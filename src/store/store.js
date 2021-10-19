import { configureStore } from "@reduxjs/toolkit"
import addNoteSlice from "./addnoteSlice"
const store = configureStore({ reducer: { addnote: addNoteSlice.reducer } })

export default store
