/* eslint-disable react/prop-types */
import './Header.css'






function Header (props) {

 
  return (
     <header>
      <div className='d-flex jc-space-b al-start' id='headerInverso' >
      <nav > 
          <ul className='d-flex'>
            <li><a href='#projetos'>Projetos</a></li>
            <li><a href='#tecnologias'>Tecnologias</a></li>
            <li><a href='#sobre'>Sobre mim</a></li>
          </ul>
        </nav>
      <div className='icons jc-space-b ' >
       
        <a href='https://github.com/lucikelly/' target="_blank" className='iconsImg' >{<img src={props.icon} height="30px"/>}</a>
        <a href='https://www.linkedin.com/in/lucikellysantos/' target="_blank" className='iconsImg' ><img src={props.icon2} height="30px"/></a>
        <button className='button-header' onClick={props.fun} >{props.title}</button>
      </div>
   
      </div>
        
     </header>
  )
}

export default Header