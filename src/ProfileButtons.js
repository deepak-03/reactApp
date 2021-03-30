import React,{Component} from "react";
import FollowButton from "./FollowButton"

class ProfileButtons extends Component{
  constructor(props) {
    super(props);
    this.state = {
      ifFollowed: this.props.ifFollowed,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prev => {
      return {
        ifFollowed: !prev.ifFollowed
      }
    });
  }

  render() {
    return (
      <div className="buttons">
        <FollowButton ifFollowed={this.state.ifFollowed} handleClick={this.handleClick} />
        <div className="button_2"><i className="fas fa-caret-down"></i></div>
      </div>
    )
  }
}

export default ProfileButtons;