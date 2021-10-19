import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import App from "./App"

import { Provider } from "react-redux"
import store from "./store/store"
import Test from "./test"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Test /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
