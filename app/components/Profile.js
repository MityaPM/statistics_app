import React, { useEffect, useContext, useRef } from "react"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"

function Profile() {
  const ul = useRef(null)
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  function timeHadler(e) {
    const el = e.target
    if (el.tagName == "LI") {
      appDispatch({
        time: el.innerHTML.toLowerCase(),
        data: appState.data
      })
    }
  }

  useEffect(() => {
    ul.current.childNodes.forEach(li => {
      li.className = ""
      if (li.innerHTML.toLowerCase() == appState.time) {
        li.className = "active"
      }
    })
  }, [appState.time])

  return (
    <div className="profile">
      <div className="profile-info">
        <img src="./images/image-jeremy.png" alt="" />
        <div className="name-info">
          <div className="ref">Report for</div>
          <div className="name">Jeremy Robson</div>
        </div>
      </div>
      <div className="controls">
        <ul onClick={timeHadler} ref={ul}>
          <li>Daily</li>
          <li className="active">Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile
