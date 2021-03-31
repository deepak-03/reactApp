import React,{Component} from "react";
import ProfileButtons from "./ProfileButtons.js"
import ProfileNumbers from "./ProfileNumbers.js"
import ProfileBio from "./ProfileBio.js"

class ProfileData extends Component{
    constructor(props) {
        super(props);
        this.state = {
          ifFollowed: this.props.profileData.ifFollowed,
          followers: this.props.profileData.followers
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(){
        this.setState(prev => {
          return {
            followers: prev.ifFollowed ? (prev.followers-1) : (prev.followers+1),
            ifFollowed: !prev.ifFollowed
          }
        });
      }

    render(){
        const {
            profileName,
            aboutYou,
            description,
            externalLink,
            name,
            numberOfPosts,
            following,
        } = this.props.profileData;
        //  console.log(this.props.profileData.followers);
        return(
            <div className="staticText">
                <div className="row_1">
                    <h2 id="profileName">{name}</h2>
                    <ProfileButtons ifFollowed = {this.state.ifFollowed} handleClick={this.handleClick}/>
                </div>
                {/* <div> <b id="numberOfFollowers">{this.state.followers}</b> followers </div> */}
                <ProfileNumbers numberOfPosts = {numberOfPosts} followers = {this.state.followers} following = {following} />
                <ProfileBio profileName ={profileName} aboutYou = {aboutYou} description = {description} externalLink = {externalLink} />
            </div>
        );
    }
}

export default ProfileData;