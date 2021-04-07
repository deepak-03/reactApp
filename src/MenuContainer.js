import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeCurrentTab} from "./redux/posts/postsActions";
 
function MenuContainer(props){
  console.log(props.currentTab)
  return (
    <div className="menuContainer" id="menuContainer" onClick={props.changeCurrentTab}>
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

const mapStateToProps = state => ({
  currentTab : state.posts.currentTab
})

const mapDispatchToProps = {
  changeCurrentTab
}

MenuContainer.propTypes = {
  handleTabSwitch : PropTypes.func,
  currentTab : PropTypes.string
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuContainer);