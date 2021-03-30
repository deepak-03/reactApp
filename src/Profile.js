import React,{Component} from "react";
import ProfilePic from "./ProfilePic";
import ProfileData from "./ProfileData";
import "./index.css"

class Profile extends Component{
    state ={
        profileData : {}
    };

    componentDidMount(){
        fetch("./../Data.json")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            this.setState({
                profileData: data.profileData
            });
        });
    }

    render(){
        return(
            <div className="profile">
                <ProfilePic profilePicUrl = {this.state.profileData.profilePicUrl} />
                <ProfileData profileData = {this.state.profileData} />
            </div>
        )
    }

}

export default Profile;