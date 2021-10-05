import React, { useEffect, useContext } from "react"
import StateContext from "../StateContext"

function Items() {
  const appState = useContext(StateContext)

  return (
    <div className="statistics">
      {appState.data.map((item, index) => {
        function colorHandler(activity) {
          switch (activity.toLowerCase()) {
            case "work":
              return "var(--Light-red-work)"
            case "play":
              return "var(--Soft-blue-play)"
            case "study":
              return "var(--Light-red-study)"
            case "exercise":
              return "var(--Lime-green-exercise)"
            case "social":
              return "var(--Violet-social)"
            case "self-care":
              return "var(--Soft-orange-self-care)"
          }
        }

        const backgroundSetting = {
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "90%",
          backgroundPositionY: "-5px",
          backgroundSize: "60px",
          backgroundImage: `url(./images/icon-${item.title.toLowerCase()}.svg)`,
          backgroundColor: `${colorHandler(item.title)}`
        }

        console.log(backgroundSetting.backgroundImage)

        return (
          <div className="item" key={index}>
            <div className="item-container">
              <div className="item-background" style={backgroundSetting}></div>
              <div className="item-content">
                <div className="item-header">
                  <div className="item-title">{item.title}</div>
                  <div className="buttons">
                    <img src="images/icon-ellipsis.svg" alt="" />
                  </div>
                </div>
                <div className="counters">
                  <div className="item-ammount">{item.timeframes[appState.time].current}hrs</div>
                  <div className="prev-ammount">Last Week - {item.timeframes[appState.time].previous}hrs</div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Items
