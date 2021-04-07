import React, {Component} from "react";
import ProfilePic from "./ProfilePic";
import ProfileData from "./ProfileData";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {fetchProfileData} from "../redux/profile/profileActions"

class Profile extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchProfileData();
    }

    render(){
        return (
            <div className="profile">
                <ProfilePic />
                <ProfileData />
            </div>
        )
    }
}

Profile.propTypes = {
    fetchProfileData : PropTypes.func
}

//not required here
// const mapStateToProps = state => ({
//     profileData : state.profile.profileData
// })

// const mapDispatchToProps = dispatch => ({
//     fetchProfileData: () => dispatch(fetchProfileData())
// });

const mapDispatchToProps = {
    fetchProfileData,
};



export default connect(null,mapDispatchToProps)(Profile);

