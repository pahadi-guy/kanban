import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addnotesActions } from "./store/addnoteSlice"
import { nanoid } from "@reduxjs/toolkit"

import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

function MyVerticallyCenteredModal(props) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const dispatch = useDispatch()

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  const onSavePostClicked = () => {
    console.log("Dispatch button Clicked")

    dispatch(
      addnotesActions.addnotes({
        id: nanoid(),
        title,
        content,
        status: "todo",
      })
    )

    setTitle("")
    setContent("")

    props.onHide()
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Your task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Title</h4>
        <input
          placeholder="Provide a title"
          value={title}
          name="title"
          onChange={onTitleChanged}
        />

        <p>Body</p>
        <input
          placeholder="Provide content"
          value={content}
          name="content"
          onChange={onContentChanged}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onSavePostClicked}>Add Note</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

const AddNotes = () => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      <div className="modalBtn">
        <Button
          variant="outline-danger"
          size="lg"
          onClick={() => setModalShow(true)}
        >
          <spam>+</spam>
        </Button>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default AddNotes
