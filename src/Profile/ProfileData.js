import React from "react";
import ProfileButtons from "./ProfileButtons.js"
import ProfileNumbers from "./ProfileNumbers.js"
import ProfileBio from "./ProfileBio.js"
import {connect} from "react-redux";
import PropTypes from 'prop-types';

function ProfileData(props){
    return (
        <div className="staticText">
            <div className="row_1">
                <h2 id="profileName">{props.name}</h2>
                <ProfileButtons />
            </div>
            <ProfileNumbers />
            <ProfileBio />
        </div>
    );  
}


ProfileData.propTypes = {
    name : PropTypes.string
}

const mapStateToProps = state => ({
  name : state.profile.profileData.name
})

export default connect(mapStateToProps)(ProfileData);
