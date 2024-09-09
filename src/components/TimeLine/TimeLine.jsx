import './TimeLine.css'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import FaGraduationCap from '@meronex/icons/fa/FaGraduationCap';

function TimeLine (){
  return(
    <>
    <VerticalTimeline lineColor="#333">
      <VerticalTimelineElement className="text-time-line" iconStyle={{background: '#333', color:'black'}}
      icon={<FaGraduationCap/>}
      date="2008">
         <h3>formei</h3>
         <p>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="text-time-line" iconStyle={{background: '#333', color:'black'}}
      icon={<FaGraduationCap/>}
      date="2008">
         <h3>formei</h3>
         <p>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="text-time-line" iconStyle={{background: '#333', color:'black'}}
      icon={<FaGraduationCap/>}
      date="2008">
         <h3>formei</h3>
         <p>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="text-time-line" iconStyle={{background: '#333', color:'black'}}
      icon={<FaGraduationCap/>}
      date="2008">
         <h3>formei</h3>
         <p>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </>
  )
}
export default TimeLine