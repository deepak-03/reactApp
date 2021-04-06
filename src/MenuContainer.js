import React from "react";

function MenuContainer(props){
  return (
    <div className="menuContainer" id="menuContainer" onClick={props.handleTabSwitch}>
      <a href="#imagesContainer" id="imageLink" className={`menuItems ${props.currentTab === "imageLink" ? "active" : ""}`}>
        <i className="fas fa-th "></i>
        <h4>POSTS</h4>
      </a>
      <a href="#igtvContainer" id="igtvLink" className={`menuItems ${props.currentTab === "igtvLink" ? "active" : ""}`}>
        <i className="fas fa-tv"></i>
        <h4>IGTV</h4>
      </a>
    </div>
  )
}

export default MenuContainer;