import './TimeLine.css'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import FaGraduationCap from '@meronex/icons/fa/FaGraduationCap';
import FdPageSearch from '@meronex/icons/fd/FdPageSearch';
import AiOutlineGlobal from '@meronex/icons/ai/AiOutlineGlobal';
import AiTwotoneTool from '@meronex/icons/ai/AiTwotoneTool';

function TimeLine (){
  return(
    <>
    <VerticalTimeline lineColor="#c8c8c8" >
      <VerticalTimelineElement 
      contentStyle={{ backgroundColor: '#0F1624',
        boxShadow:' 0 0 10px' ,
        border: '1px solid #ffffff',
        borderRadius: '37px  0 37px 0'
       }}
      iconStyle={{background: '#c8c8c8', color:'black'}}
      icon={<FaGraduationCap/>}
      date="2021">
        <div className="text-time-line">
          <h3 >Formação</h3>
         <p> 
          Iniciei meu bacharel em ciências da computação na faculdade digital Descomplica, 
          ao qual estou atualmente cursando, com formação prevista para o primeiro semestre de 2025.
          </p>
        </div>
       
      </VerticalTimelineElement>
      <VerticalTimelineElement   
      contentStyle={{ backgroundColor: '#0F1624',
        boxShadow:' 0 0 10px' ,
        border: '1px solid #ffffff',
        borderRadius: '37px  0 37px 0'
       }}
      iconStyle={{background: '#c8c8c8', color:'black'}}
      icon={<AiOutlineGlobal/>}
      date="2024">
        <div className="text-time-line">
        <h3 >Certificação </h3>
         <p>
          O Centro Universitário Católica de Quixadá, me concede a Certificação Intermediária em Infraestrutura 
          de Redes e Arquitetura de Computadores com  carga horária de 300 horas.

         </p>
        </div>
        
      </VerticalTimelineElement>
      <VerticalTimelineElement 
      contentStyle={{ backgroundColor: '#0F1624',
        boxShadow:' 0 0 10px' ,
        border: '1px solid #ffffff',
        borderRadius: '37px  0 37px 0'
       }}
      iconStyle={{background: '#c8c8c8', color:'black'}}
      icon={<FdPageSearch/>}
      date="2024">
        <div className="text-time-line">
        <h3 >Estudos Paralelos</h3>
         <p>
          Em 2024, iniciei minha formação na escola de tecnologia DNC em Engenheiro de Software (Full-Stack), 
          formação prevista para o primeiro semestre de 2025.
         </p>
        </div>
       
      </VerticalTimelineElement>
      <VerticalTimelineElement  
      contentStyle={{ backgroundColor: '#0F1624',
        boxShadow:' 0 0 10px' ,
        border: '1px solid #ffffff',
        borderRadius: '37px  0 37px 0'
       }}
      iconStyle={{background: '#c8c8c8', color:'black'}}
      icon={<AiTwotoneTool/>}
      date="2024">
        <div className="text-time-line">
        <h3 >Atuação Front-end</h3>
         <p>
          Trabalhei em parceria com a DNC na realização do front-end para projeto de desevolvimento uma plataforma de alugueis de jogos de tabuleiro para 
          empresa Sócio do Tabuleiro.
         </p>
        </div>
        
      </VerticalTimelineElement >
      
    </VerticalTimeline>

    
    </>
  )
}
export default TimeLine