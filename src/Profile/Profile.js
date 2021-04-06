import React, {Component} from "react";
import ProfilePic from "./ProfilePic";
import ProfileData from "./ProfileData";
import {connect} from "react-redux";
import {fetchProfileData} from "../Redux/profile/profileActions"

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

//not required here
const mapStateToProps = state => ({
    profileData : state.profileData
})

// const mapDispatchToProps = dispatch => ({
//     fetchProfileData: () => dispatch(fetchProfileData())
// });

const mapDispatchToProps = {
    fetchProfileData,
};

export default connect(mapStateToProps,mapDispatchToProps)(Profile);

