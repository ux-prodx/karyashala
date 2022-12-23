//completely coded by Anushka Singh
import "./footer.css";
//! IMPORT USE STATE
import React from "react";
import { AiFillYoutube, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { TiSocialTwitterCircular } from "react-icons/ti";

//! IMPORT REACT ICON
//import { GiHamburgerMenu } from "react-icons/gi";
//! IMPORT CHILD COMPONENT
//import HeaderLinks from "./HeaderLinks";
//* PARENT COMPONENT
const Footer = () => {
  return(
    <div className="container">
    <div class="parent">

    <div class="fixed">
    <img src="./images/Vector.jpg" alt=""/></div>
    <div class="fi">
    <img src="./images/log.jpg" alt=""/></div>

    <div class="fl">
      <AiFillYoutube />&nbsp;&nbsp;
      <AiFillLinkedin />&nbsp;&nbsp;
      <AiOutlineInstagram />&nbsp;&nbsp;
      <BsFacebook />&nbsp;&nbsp;
      <TiSocialTwitterCircular />
    </div>

    <div class="fluid">We are a volunteer-driven community and internships cohorts for enthusiasts who
    <br/> are passionate about making an impact and help everyone grow together.</div>
    
    </div>

  <div class="parents">
    <div class="left">
     Internship &nbsp;&nbsp; Events  &nbsp;&nbsp;   Join Communities </div>
    
    <div class="right"> Contact Us  &nbsp;&nbsp;  FAQ's  &nbsp;&nbsp;  Privacy Policy</div>
  </div>
      
 
  
  

</div>
  
 );

};

export default Footer;