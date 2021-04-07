import React from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

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

ProfileBio.propTypes = {
    profileData : PropTypes.object
}

const mapStateToProps = state => ({
    profileData : state.profile.profileData
  })
  
export default connect(mapStateToProps)(ProfileBio);

