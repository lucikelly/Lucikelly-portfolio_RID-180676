/* eslint-disable react/prop-types */
import "./Card.css"

function Card (props) {
  return (
    <div className="styled-card" >
      <img src={props.image} />
      <h2> {props.titleProject}</h2>
      <p> {props.descricao } </p>
      <div className="d-flex jc-space-b">
        <a href={props.git} > Projeto no github </a>
        <a href={props.deploy} > Deploy do projeto</a>
      </div>
      
    </div>
  )
}

export default Card