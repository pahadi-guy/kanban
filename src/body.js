import StickyNotes from "./stickyNotes"
import { connect } from "react-redux"

const Board = (props) => {
  console.log(props)

  const todo = props.addnote.filter((data) => data.status === "todo")

  const inProgress = props.addnote.filter(
    (data) => data.status === "inprogress"
  )
  const testing = props.addnote.filter((data) => data.status === "testing")
  const completed = props.addnote.filter((data) => data.status === "completed")

  return (
    <div class="flex-container">
      <div class="flex-items">
        <div className="title">TODO</div>
        {todo.map((data) => {
          const { title, content, id } = data
          return <StickyNotes title={title} content={content} id={id} />
        })}
      </div>
      <div class="flex-items">
        <div className="title">In Progress</div>
      </div>
      <div class="flex-items">
        <div className="title">Testing</div>
      </div>
      <div class="flex-items">
        <div className="title">Completed</div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { addnote } = state
  return { addnote }
}

export default connect(mapStateToProps)(Board)
