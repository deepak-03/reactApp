import React from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

function ProfileNumbers({profileData: {numberOfPosts, followers, following}}){
    // console.log(typeof(props.followers));
    // console.log(props.followers);
    return(
        <div className="row_2">
            <div> <b id="numberOfPosts">{numberOfPosts}</b> posts </div>
            <div> <b id="numberOfFollowers">{followers}</b> followers </div>
            <div> <b id="numberOfFollowing">{following}</b> following </div> 
        </div>
    )
}

ProfileNumbers.propTypes = {
    profileData : PropTypes.object
}

const mapStateToProps = state => ({
    profileData : state.profile.profileData
})

export default connect(mapStateToProps)(ProfileNumbers);