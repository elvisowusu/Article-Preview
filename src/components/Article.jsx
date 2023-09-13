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
                <img src={drawers} alt="" height={400} />
           </div>
           <div className="articlePage">
                <div>
                    <h3>
                    Shift the overall look and feel by adding these wonderful touches to furniture in your home
                    </h3>
                    <p>
                        Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting.I've got some simple tips to help you make any room feel complete.
                    </p>
                </div>
                <div className="source">
                    <div className="profile">
                     <div className="img"><img src={avatar} alt="" /></div>
                     <div>
                        <h3>Michelle Appleton</h3>
                        <p>20 Jun 2020</p>
                     </div>
                    </div>
                    <div className="share">
                   <PiShareFatFill/>
                    </div>
                </div>
           </div>
        </div>
    )
}