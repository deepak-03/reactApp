import React,{Component} from "react";
import ProfileButtons from "./ProfileButtons.js"
import ProfileNumbers from "./ProfileNumbers.js"
import ProfileBio from "./ProfileBio.js"

class ProfileData extends Component{
    render(){
        const {
            profileName,
            aboutYou,
            description,
            externalLink,
            name,
            numberOfPosts,
            followers,
            following,
            ifFollowed
        } = this.props.profileData;

        return(
            <div className="staticText">
                <div className="row_1">
                    <h2 id="profileName">{name}</h2>
                    <ProfileButtons ifFollowed = {ifFollowed} />
                </div>
                <ProfileNumbers numberOfPosts = {numberOfPosts} followers = {followers} following = {following} />
                <ProfileBio profileName ={profileName} aboutYou = {aboutYou} description = {description} externalLink = {externalLink} />
            </div>
        );
    }
}

export default ProfileData;