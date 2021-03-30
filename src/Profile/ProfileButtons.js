import React,{Component} from "react";
import FollowButton from "./FollowButton"

function ProfileButtons(props){
  return (
    <div className="buttons">
      <FollowButton ifFollowed={props.ifFollowed} handleClick={props.handleClick} />
      <div className="button_2"><i className="fas fa-caret-down"></i></div>
    </div>
  )
}

export default ProfileButtons;