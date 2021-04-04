import React from "react";

function ProfileButton(props){
    return(
    <div className="button_1">
        <input id="followButton" type="button" 
         className= {props.ifFollowed ?  "followed" : "followButton"}
         value={props.ifFollowed ? "Unfollow" : "Follow"}
         onClick={props.handleClick}
        />
    </div>
    ) 
}

export default ProfileButton;