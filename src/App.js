import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile/Profile";
import MenuContainer from "./MenuContainer";
import Posts from "./Posts/Posts";
import "./index.css";

function App () {
    return (
        <div className="wrapper">
            <Navbar />
            <div className="mainPage">
                <Profile />
                <div id="imageVideoWrapper">
                    <MenuContainer />
                    <Posts />
                </div>
            </div>
        </div>
    );
}

export default App;