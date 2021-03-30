import React from "react";

function ProfilePic(props){
    return(
        <div className="profilePicContainer">
            <div className="profilePic">
                <img src={props.profilePicUrl} id="profileImage" alt="profilePhoto"></img>
            </div>
        </div>
    )
}

export default ProfilePic;