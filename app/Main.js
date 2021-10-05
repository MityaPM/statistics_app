import React, { useEffect } from "react"
import ReactDom from "react-dom"

//Context
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import { useImmer } from "use-immer"

//Components
import Profile from "./components/Profile"
import Items from "./components/Items"

function Main() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("data.json")
      const data = await response.json()
      setStatistics(draft => {
        draft.data = data
      })
    }
    fetchData()
  }, [])

  const [statistics, setStatistics] = useImmer({
    time: "weekly",
    data: []
  })

  return (
    <StateContext.Provider value={statistics}>
      <DispatchContext.Provider value={setStatistics}>
        <div className="container">
          <div className="content">
            <Profile />
            <Items />
          </div>
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

ReactDom.render(<Main />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
