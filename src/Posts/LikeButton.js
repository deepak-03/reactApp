import React, {Component} from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class LikeButton extends Component{

    constructor(props){
        super(props);
        this.state = {
            ifLiked : this.props.ifLiked,
            likes : this.props.likes
        };
        this.handleLikeButton = this.handleLikeButton.bind(this);
    }

    handleLikeButton(){
        this.setState(prev => {
            return {
                ifLiked : !prev.ifLiked,
                likes : prev.ifLiked ? prev.likes - 1 : prev.likes + 1
            };
        });
    }

    render(){
        console.log(this.state.ifLiked, 2);
        return(
            <button className="likeCommentButton" onClick={this.handleLikeButton}>
                <FontAwesomeIcon className="onHoverIcon" color={this.state.ifLiked ? "red" : ""} icon={faHeart} />
                <div>{this.state.likes}</div>
            </button>
        )
    }
}
 LikeButton.propTypes = {
     ifLiked: PropTypes.bool,
     likes: PropTypes.string
 }

export default LikeButton;