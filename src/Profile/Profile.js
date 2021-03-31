import React from "react";
import ProfilePic from "./ProfilePic";
import ProfileData from "./ProfileData";
// import "../index.css"

function Profile(props){
    return (
        <div className="profile">
            <ProfilePic profilePicUrl={props.profileData.profilePicUrl} />
            <ProfileData profileData={props.profileData} />
        </div>
    )
}

export default Profile;