import React from "react";

function Navbar(props){
     return (
         <nav>
             <div className="headerContainer">
                <div className="instaLogo">
                    <a href="/#">
                        <img src="https://assets.website-files.com/5c75b94c8dd1ae50d3b9294b/5d48831280adb734a5db5620_hukglfkfklk%3B.png" alt="instaLogo" />
                    </a>
                </div>
                <div className="searchBar">
                    <input type="text" name="" placeholder="Search" />
                </div>
                <div className="icons">
                    <div><a href="/# "><i className="fas fa-home"></i></a></div>
                        <div><a href="/#"><i className="far fa-compass"></i></a></div>
                        <div><a href="/#"><i className="far fa-heart"></i></a></div>
                        <div><a href="/#"><i className="fas fa-envelope"></i></a></div>
                        <div><a href="/#"><img src={props.accountPicUrl} id="accountPic" alt="accountPic" /></a></div>
                    </div>
                </div>
        </nav>
            )
    
}


export default Navbar;