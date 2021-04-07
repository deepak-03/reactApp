import React, { Component } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

class CommentButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            ifCommented : this.props.ifCommented,
            comments : this.props.comments
        };
        this.handleCommentButton = this.handleCommentButton.bind(this);
    }

    handleCommentButton(){
        this.setState(prev => {
            return {
                ifCommented : !prev.ifCommented,
                comments : prev.ifCommented ? prev.comments - 1 : prev.comments + 1
            };
        });
    }

    render(){
        return(
            <button className="likeCommentButton" onClick={this.handleCommentButton}>
                <FontAwesomeIcon className="onHoverIcon" color={this.state.ifCommented ? "green" : ""} icon={faComment} />
                {/* <i className= {this.state.ifCommented ? "fas fa-comment onHoverIcon unCommentedIcon" : "fas fa-comment onHoverIcon"} /> */}
                <div>{this.state.comments}</div>
            </button>
        )
    }

}

CommentButton.propTypes = {
    ifCommented : PropTypes.bool,
    comments : PropTypes.string
}

export default CommentButton;
