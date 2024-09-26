import './Header.css'
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import animationTheme from "../../assets/animationtheme.gif"


function Header () {
  return (
     <header >
      <div className='d-flex jc-space-b al-start' >
      <nav > 
          <ul className='d-flex'>
            <li><a href='#projetos'>Projetos</a></li>
            <li><a href='#tecnologias'>Tecnologias</a></li>
            <li><a href='#sobre'>Sobre mim</a></li>
          </ul>
        </nav>
      <div className='icons' >
       
        <a href='https://github.com/lucikelly/' target="_blank"><img src={github} height="25px"/></a>
        <a href='https://www.linkedin.com/in/lucikellysantos/' target="_blank"><img src={linkedin} height="25px"/></a>
        <img src={animationTheme} width={60} height={30}/>
      </div>
   
      </div>
        
     </header>
  )
}

export default Header