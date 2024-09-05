import "./Card.css"

function Card (props) {
  return (
    <div className="styled-card" >
      <img src={props.image} height="30px"/>
      <h2> {props.titleProject}</h2>
      <p> {props.descricao } </p>
    </div>
  )
}

export default Card