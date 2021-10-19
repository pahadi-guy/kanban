import { createSlice, current } from "@reduxjs/toolkit"
const initialState = [
  { title: "abc12", content: "xyz", status: "todo", id: 12 },
  { title: "abc18", content: "xyz", status: "todo", id: 18 },
  { title: "abc15", content: "xyz", status: "todo", id: 15 },
]
const addNoteSlice = createSlice({
  name: "addNoteSlice",
  initialState,
  reducers: {
    addnotes(state, action) {
      console.log("state", current(state))
      console.log("State log", state)
      state.push(action.payload)
      console.log("state.push(action.payload)", current(state))
    },

    deleteNote(state, action) {
      state = state.filter((value) => value.id !== action.payload)
      return state
    },
  },
})

export const addnotesActions = addNoteSlice.actions

export default addNoteSlice
