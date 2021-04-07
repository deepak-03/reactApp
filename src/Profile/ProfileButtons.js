import React from "react";
import {connect} from "react-redux";
import {toggleIfFollowed} from "../redux/profile/profileActions";
import PropTypes from 'prop-types';

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

ProfileButtons.propTypes = {
  ifFollowed : PropTypes.bool,
  toggleIfFollowed : PropTypes.func
}

const mapStateToProps = state => ({
    ifFollowed : state.profile.profileData.ifFollowed
})

// const mapDispatchToProps = dispatch => ({
//     fetchProfileData: () => dispatch(fetchProfileData())
// });

const mapDispatchToProps = {
    toggleIfFollowed
};

export default connect(mapStateToProps,mapDispatchToProps)(ProfileButtons);
