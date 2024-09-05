
import "./LisTec.css"
import java from "../../assets/java.svg"
import c from "../../assets/c++.svg"
import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import javascript from "../../assets/javascript.svg"
import react from "../../assets/react-original.svg"
import nextjs from "../../assets/nextjs-original.svg"
import vitejs from "../../assets/vitejs-original.svg"
import godot from "../../assets/godot-original.svg"






function LisTec () {
  return(
    <div className="tec-title container" id="tecnologias">
      <h1 >Tecnologias</h1>

      <div className="tec-grid container "> 
          <img src={java}/>
          <img src={c}/>
          <img src={html}/>
          <img src={css}/>
          <img src={javascript}/>
          <img src={react}/>
          <img src={nextjs}/>
          <img src={vitejs}/>
          <img src={godot}/>
      </div>
    </div>

  )
}

export default LisTec