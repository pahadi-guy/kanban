import React from "react"
import Board from "./body"
import Header from "./Header"

import AddNotes from "./addNotes"

function App() {
  return (
    <>
      <Header />

      <AddNotes />
      <Board />
    </>
  )
}

export default App
