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
        <a href="https://drive.google.com/file/d/1k8y8iH46Ajjn0wSU8EK5KcfKhcv1CWRu/view?usp=sharing" target="_blanck"> 
        <Button title="Saiba mais" />
        </a>
         
      </div>
     
    </div>

  )
}
export default Hero