import React from "react";
import ProfilePic from "./ProfilePic";
import ProfileData from "./ProfileData";
// import "../index.css"

function Profile(props){
    const {profileData} = props;
    return (
        <div className="profile">
            <ProfilePic profilePicUrl={profileData.profilePicUrl} />
            <ProfileData profileData={profileData} />
        </div>
    )
}

export default Profile;