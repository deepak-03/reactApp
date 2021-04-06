import React from "react";
import {connect} from "react-redux";

function ProfileBio({profileData :{profileName,aboutYou,description,externalLink}}){
    return(
        <div className="row_3" id="row_3">
            <div className="companyName">
                <p>{profileName}</p>
            </div>
            <div className="companyTag">
                <p>{aboutYou}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div className="siteLink">
                <a href="/#">
                    <p>{externalLink}</p>
                </a>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    profileData : state.profileData
  })
  
export default connect(mapStateToProps)(ProfileBio);

