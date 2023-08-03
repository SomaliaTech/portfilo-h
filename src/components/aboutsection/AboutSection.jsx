import "./aboutsection.scss";
import { AiOutlineFieldTime, AiOutlineLaptop}from 'react-icons/ai'
import {MdSupportAgent} from 'react-icons/md'
function AboutSection() {
  return (
    <div className="about">
      <div className="left">
        <div className="bg"></div>
        <div className="card">
          <img src="/wecole.png" alt="" className="img" />
        </div>
      </div>
      <div className="right">
        <h1 className="title">About Me</h1>
        <p className="desc">
        I design and develop services for all sizes ,specializing in create styles , modren web services and onlin store aslo have 4 years of experince content management tools like wordPress 
        </p>
     <div className="continer">
      <div className="row">
        <AiOutlineFieldTime className="icon"/>
        <span>Experince</span>
        <span>2 {">"} Years </span>
      </div>
      <div className="row">
        <AiOutlineLaptop className="icon"/>
        <span>Completed</span>
        <span>30 {">"} Projects </span>
      </div>
      <div className="row">
        <MdSupportAgent className="icon"/>
        <span>Support</span>
        <span>Online 24/7</span>
      </div>
     </div>
      </div>
    </div>
  );
}

export default AboutSection;
