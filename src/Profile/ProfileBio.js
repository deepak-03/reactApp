import React from "react";

function ProfileBio(props){
    return(
        <div className="row_3" id="row_3">
            <div className="companyName">
                <p>{props.profileName}</p>
            </div>
            <div className="companyTag">
                <p>{props.aboutYou}</p>
            </div>
            <div>
                <p>{props.description}</p>
            </div>
            <div className="siteLink">
                <a href="#">
                    <p>{props.externalLink}</p>
                </a>
            </div>
        </div>
    )
}

export default ProfileBio;