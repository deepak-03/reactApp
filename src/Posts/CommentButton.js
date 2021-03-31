import React, { Component } from "react";

class CommentButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            ifCommented : this.props.data.ifCommented,
            comments : this.props.data.comments
        };
        this.handleCommentButton = this.handleCommentButton.bind(this);
    }

    handleCommentButton(e){
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
                <i className= {this.state.ifCommented ? "fas fa-comment onHoverIcon unCommentedIcon" : "fas fa-comment onHoverIcon"} />
                <div>{this.state.comments}</div>
            </button>
        )
    }

}

export default CommentButton;
