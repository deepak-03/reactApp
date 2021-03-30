import React from "react";

function Navbar(){
     return (
         <nav>
             <div className="headerContainer">
                <div className="instaLogo">
                    <a href="#">
                        <img src="https://assets.website-files.com/5c75b94c8dd1ae50d3b9294b/5d48831280adb734a5db5620_hukglfkfklk%3B.png" alt="" />
                    </a>
                </div>
                <div className="searchBar">
                    <input type="text" name="" placeholder="Search" />
                </div>
                <div className="icons">
                    <div><a href="# "><i className="fas fa-home"></i></a></div>
                        <div><a href="#"><i className="far fa-compass"></i></a></div>
                        <div><a href="#"><i className="far fa-heart"></i></a></div>
                        <div><a href="#"><i className="fas fa-envelope"></i></a></div>
                        <div><a href="#"><img src="https://media-exp1.licdn.com/dms/image/C560BAQGB0W6_ixPclA/company-logo_200_200/0/1547049504116?e=2159024400&v=beta&t=mVUK4jxzHuRq2mTkGbPfWXBcBGXzQrcGOlEPRZ-V4II" id="accountPic" /></a></div>
                    </div>
                </div>
        </nav>
            )
    
}
export default Navbar;