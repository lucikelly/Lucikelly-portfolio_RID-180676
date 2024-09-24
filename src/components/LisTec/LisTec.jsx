
import "./LisTec.css"
import java from "../../assets/java.svg"
import c from "../../assets/c++.svg"
import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import javascript from "../../assets/javascript.svg"
import react from "../../assets/react-original.svg"
import nextjs from "../../assets/nextjs-original.svg"
import vitejs from "../../assets/vitejs-original.svg"
import typescript from "../../assets/typescript.svg"
import godot from "../../assets/godot-original.svg"







function LisTec () {
  return(
    <div className="tec-title container" id="tecnologias">
      <h1 >Tecnologias</h1>

      <div className="tec-grid container "> 
          <a href="https://www.java.com/pt-BR/" target="_blanck"><img src={java}/></a>
          <a href="https://devdocs.io/cpp/" target="_blanck"><img src={c}/></a>
          <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blanck"><img src={html}/></a>
          <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blanck"><img src={css}/></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blanck"><img src={javascript}/></a>
          <a href="https://www.typescriptlang.org/pt/docs/" target="_blanck"><img src={typescript}/></a>
          <a href="https://pt-br.react.dev/" target="_blanck"><img src={react}/></a>
          <a href="https://nextjs.org/" target="_blanck"><img src={nextjs}/></a>
          <a href="https://vitejs.dev/" target="_blanck"><img src={vitejs}/></a>
          <a href="https://godotengine.org/" target="_blanck"><img src={godot}/></a>
      </div>
    </div>

  )
}

export default LisTec