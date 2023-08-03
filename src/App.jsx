import { useContext, useState } from "react"
import ProductList from "./components/ProductList/ProductList"
import AboutSection from "./components/aboutsection/AboutSection"
import Contact from "./components/contact/Contact"
import HeroSetion from "./components/heroSection/HeroSetion"
import { ThemeContext } from "./context/ThemeContext"
import Header from "./components/header/Header"



function App() {
const {darkamode}= useContext(ThemeContext)



  return (

    <div className="home" style={{backgroundColor: darkamode ? "black"  :  "white" , color: darkamode && 'white'}}>
<Header/>
<HeroSetion/>
<AboutSection/>
<ProductList/>
<Contact/>
    </div>
  )
}

export default App
