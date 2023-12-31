import React, { useState } from "react";
import "../styles/Article.css"
import avatar  from '../assets/avatar-michelle.jpg'
import drawers from '../assets/drawers.jpg'
// import {BiLogoFacebookSquare} from "react-icons/bi"//smaller icon
import {AiFillFacebook} from "react-icons/ai"//bigger icon
import {SiTwitter} from "react-icons/si"
import {BsPinterest} from "react-icons/bs"
import { PiShareFatFill } from "react-icons/pi";



export const Article =()=>{
    const [clicked,setClicked] = useState(false);
    const [screenWidth,SetScreenWidth] = useState(window.innerWidth);

    const handleClickEvent=()=>{
        const newClicked = !clicked;
        setClicked(newClicked);
    }

    const shareButtonStyle = (state) => {
        state = clicked;
        if (state) {
            return {
                color: 'hsl(217, 19%, 35%)',
                backgroundColor: 'hsl(210, 46%, 95%)',
            };
        } else {
            return {};
        }
    };


    return(
        <div className="main">
           <div className="picture">
                <img src={drawers} alt="" height={280} className="drawers"/>
           </div>
           <div className="articlePage">
                <div className="content">
                    <h2>
                    Shift the overall look and feel by adding these wonderful touches to furniture in your home
                    </h2>
                    
                    {screenWidth<600?<p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting.I've got some simple tips to help you make any room feel complete.</p>:<p>
                        Ever been in a room and felt like something was missing?<br /> Perhaps it felt slightly bare and uninviting.I've got some simple tips to help you make any room feel complete.
                    </p>}
                </div>
                <div className="source">
                    <div className="profile">
                     <img src={avatar} alt="" />
                     <div>
                        <h3>Michelle Appleton</h3>
                        <p>20 Jun 2020</p>
                     </div>
                    </div>

                    
                    <div className="share">
                        {clicked?
                        <div className="shareOptions">
                            <p>SHARE</p> 
                            <a href="https://web.facebook.com/"> <button className="optionsBtn"><AiFillFacebook/></button></a>
                           <a href="https://twitter.com/"><button className="optionsBtn"><SiTwitter/></button></a>
                            <a href="https://www.pinterest.com/"><button className="optionsBtn"><BsPinterest/></button></a>
                            
                        </div>
                        :""
                         }

                        <button style={shareButtonStyle()} className="shareBtn">
                        <PiShareFatFill onClick={handleClickEvent} />
                        </button>
                    </div>
                    
                </div>
           </div>
        </div>
    )
}