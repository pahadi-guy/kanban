import React from "react"
import { useDispatch } from "react-redux"
import { addnotesActions } from "./store/addnoteSlice"

const StickyNotes = (props) => {
  const { title, content, id } = props

  const dispatch = useDispatch()
  const deleteNoteHandler = (id) => {
    dispatch(addnotesActions.deleteNote(id))
  }
  return (
    <>
      <div className="noteContainer" draggable="true">
        <button onClick={() => deleteNoteHandler(id)}>X</button>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </>
  )
}

export default StickyNotes
