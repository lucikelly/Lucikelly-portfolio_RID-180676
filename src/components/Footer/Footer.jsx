import './Footer.css'
import git from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"

function Footer () {
  return(
    <footer className='d-flex jc-space-b container' >
      <div>
        <p>Meu contato: <br/>
        (88) 99711-4540</p> 
      </div>
      <div>
        <p>Email: <br/>
        Lucikelly2001@gmail.com</p>
      </div>
      <div className='footer-icons'>
        <a href='https://github.com/lucikelly/' target="_blank"><img src={git} height="40px"/></a>
        <a href='https://www.linkedin.com/in/lucikellysantos/' target="_blank"><img src={linkedin} height="40px"/></a>
          
      </div>
    </footer>
  )
}

export default Footer