import React from "react";
import {connect} from "react-redux";

function ProfilePic(props){
    return(
        <div className="profilePicContainer">
            <div className="profilePic">
                <img src={props.profilePicUrl} id="profileImage" alt="profilePhoto"></img>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    profilePicUrl : state.profileData.profilePicUrl
})



export default connect(mapStateToProps)(ProfilePic);