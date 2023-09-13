import React from "react";
import "../styles/Article.css"
import avatar  from '../assets/avatar-michelle.jpg'
import drawers from '../assets/drawers.jpg'
// import {BiLogoFacebookSquare} from "react-icons/bi"//smaller icon
import {AiFillFacebook} from "react-icons/ai"//bigger icon
import {SiTwitter} from "react-icons/si"
import {BsPinterest} from "react-icons/bs"
import { PiShareFatFill } from "react-icons/pi";



export const Article =()=>{
    return(
        <div className="main">
           <div className="picture">

           </div>
           <div className="article">
            your article will appear here 
           </div>
        </div>
    )
}