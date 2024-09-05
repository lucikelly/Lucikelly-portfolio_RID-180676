import Card from "../Card/Card"
import "./ListProjects.css"
import linkedin from '../../assets/linkedin.png'

function ListProjects () {
  return(
    <div className="projects-title container" id="projetos">
      <h1 >Projetos</h1>

      <div className="projects-grid container"> 
        <Card image={linkedin} titleProject="p1" descricao="bajahsueb"/>
        <Card image={linkedin} titleProject="p1" descricao="bajahsueb"/>
        <Card image={linkedin} titleProject="p1" descricao="bajahsueb"/>
        <Card image={linkedin} titleProject="p1" descricao="bajahsueb"/>
        <Card image={linkedin} titleProject="p1" descricao="bajahsueb"/>
        <Card image={linkedin} titleProject="p1" descricao="bajahsueb"/>
      </div>
    </div>

  )
}

export default ListProjects