import React from "react";
import ProfilePic from "./ProfilePic";
import ProfileData from "./ProfileData";

function Profile(props){
    // console.log(props.profileData.followers)
    return (
        <div className="profile">
            <ProfilePic profilePicUrl={props.profileData.profilePicUrl} />
            <ProfileData profileData={props.profileData} />
        </div>
    )
}

export default Profile;