import React from "react";
import {connect} from "react-redux";
import {toggleIfFollowed} from "../Redux/profile/profileActions";
// import FollowButton from "./FollowButton"

function ProfileButtons(props){

  return (
    <div className="buttons">
        <div className="button_1">
          <input id="followButton" type="button" 
          className= {props.ifFollowed ?  "followed" : "followButton"}
          value={props.ifFollowed ? "Unfollow" : "Follow"}
          onClick={props.toggleIfFollowed}
          />
        </div>
        <div className="button_2"><i className="fas fa-caret-down"></i></div>
    </div>
  )
}

const mapStateToProps = state => ({
    ifFollowed : state.profileData.ifFollowed
})

// const mapDispatchToProps = dispatch => ({
//     fetchProfileData: () => dispatch(fetchProfileData())
// });

const mapDispatchToProps = {
    toggleIfFollowed
};

export default connect(mapStateToProps,mapDispatchToProps)(ProfileButtons);
