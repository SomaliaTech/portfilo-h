import { useContext, useRef } from "react";
import "./contect.scss";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarked } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context/ThemeContext";


function Contact() {
    const useFrom = useRef()
const {darkamode} = useContext(ThemeContext)
    const handleSubmit = (e)=> {
        emailjs.sendForm("service_bc4xnkt", "template_6erklte", useFrom.current, 'q1wB_PzzuIrPmMA_T')
        .then((user)=> {
            console.log(user.text)
        }), (err) =>{
            console.log(err)
        }
e.preventDefault()

    }
    
  return (
    <div className="c">
      <div className="bg-left"></div>
      <div className="container">
        <div className="left" style={{backgroundColor: darkamode ? "black" : 'white' ,color: darkamode && "white"}}>
          <h1>Let's Disucss what is project you want</h1>
          <div className="info">
            <div className="info-item">
              <BsFillTelephoneFill style={{color: darkamode ? "white" : "black"}} className="icon" />
              <span>+252 615328654</span>
            </div>
            <div className="info-item">
              <AiOutlineMail style={{color: darkamode ? "white" : "black"}} className="icon" />
              <span>Info@kasmal.com</span>
            </div>
            <div className="info-item">
              <FaMapMarked style={{color: darkamode ? "white" : "black"}} className="icon" />
              <span>Road 30 Mogodisho Somalia</span>
            </div>
          </div>
        </div>
        <div className="right">
          <p className="desc">
            <b>We Know that good design means good bussiness</b> We care your business and guarantee you to acheive market goals ,
            
          </p>
          <form ref={useFrom} onSubmit={handleSubmit}>
            <input type="email"  style={{backgroundColor: darkamode ? "black" : "white", color: darkamode && "white"}} placeholder="Enter your Email" name="user_email" />
            <input type="text" style={{backgroundColor: darkamode ? "black" : "white", color: darkamode && "white"}} placeholder="Enter your Username" name="user_name" />
            <input type="text" style={{backgroundColor: darkamode ? "black" : "white", color: darkamode && "white"}} placeholder="Enter your Subjet" name="user_subject" />
            <textarea style={{backgroundColor: darkamode ? "black" : "white", color: darkamode && "white"}} name="message" rows="6" placeholder="Enter your the detail of your project"></textarea>
            <button>Complate</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
