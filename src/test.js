import React from "react"

const number = [1, 2, 3, 4, 5, 6]
const Test = () => {
  const [num, setNum] = React.useState(null)
  function numHandler(date) {}
  return (
    <div>
      {number.map((data) => {
        return (
          <button key={data} onClick={numHandler}>
            {data}
          </button>
        )
      })}
    </div>
  )
}

export default Test
