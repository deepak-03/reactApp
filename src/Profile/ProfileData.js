import React,{Component} from "react";
import ProfileButtons from "./ProfileButtons.js"
import ProfileNumbers from "./ProfileNumbers.js"
import ProfileBio from "./ProfileBio.js"
import {connect} from "react-redux";

class ProfileData extends Component{
    constructor(props) {
        super(props);
      }

    render(){
        return(
            <div className="staticText">
                <div className="row_1">
                    <h2 id="profileName">{this.props.name}</h2>
                    <ProfileButtons/>
                </div>
                <ProfileNumbers />
                <ProfileBio />
            </div>
        );
    }
}

const mapStateToProps = state => ({
  name : state.profileData.name
})

export default connect(mapStateToProps)(ProfileData);
