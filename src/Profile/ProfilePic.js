import React from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

function ProfilePic(props){
    return(
        <div className="profilePicContainer">
            <div className="profilePic">
                <img src={props.profilePicUrl} id="profileImage" alt="profilePhoto"></img>
            </div>
        </div>
    )
}

ProfilePic.propTypes = {
    profilePicUrl : PropTypes.string
}

const mapStateToProps = state => ({
    profilePicUrl : state.profile.profileData.profilePicUrl
})

export default connect(mapStateToProps)(ProfilePic);