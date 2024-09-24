import Button from "../Button/Button"
import "./Hero.css"

function Hero (){
  return(
    <div className="hero-text container ">
      <h1>Hey, sou a Lucikelly Santos.</h1>
      <p>
         Desenvolvedora Front-End, Academica de Ciências da computação, futura Desenvolvedora Full-Stack.
      </p>
      <div className="button-s">
        <a href="#sobre"> 
        <Button title="Saiba mais" />
        </a>
         
      </div>
     
    </div>

  )
}
export default Hero