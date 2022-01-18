import { Reloj } from "./reloj.component"

const Footer = ({programsOpened,focusProgram}) => {
    return <div className="startbar">
    <div id="startbutton" className="startbutton-off">
      <b>Start</b>
    </div>
    <div className="programBar">
    {
      programsOpened.map(window=>{
        const windowName = window[0] === "portfolioDetails"
              ? window[1]
              : window
        const windowFocus = window
        return <div key={windowName} className="openedPorgramAccess" onClick={()=>focusProgram(windowFocus)}>
            <span>{windowName}</span>
        </div>
      })
    }
    </div>
    <div className="time">
        <Reloj></Reloj>
    </div>
  </div>
}


export default Footer