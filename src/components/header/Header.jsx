import "./header.scss"
import {CiDark} from 'react-icons/ci'
import {BsSunFill} from 'react-icons/bs'
import { useContext, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
function Header() {
const  {darkamode,dispatch} = useContext(ThemeContext)    
console.log(dispatch)

const handleChange = ()=> {
  dispatch({type: "TOOGLE" , payload: false})
   

}
  return (
    <div className="header">
   {/* <div className="left"> */}

            <ul >
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Contect</a></li>
            </ul>
   {/* </div> */}
            <div  className="dark">
                <CiDark className="icon"/>
                <BsSunFill  className="icon"  />
                <div onClick={handleChange}  style={{right: darkamode ? "42px" : 0}}  className="button"></div>
            </div>
   
    </div>
  )
}

export default Header