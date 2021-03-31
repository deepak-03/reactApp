import React, {Component} from "react";

class LikeButton extends Component{

    constructor(props){
        super(props);
        this.state = {
            ifLiked : this.props.data.ifLiked,
            likes : this.props.data.likes
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
        return(
            <button className="likeCommentButton" onClick={this.handleLikeButton}>
                <i className= {this.state.ifLiked ? "fas fa-heart onHoverIcon unlikedIcon" : "fas fa-heart onHoverIcon"} />
                <div>{this.state.likes}</div>
            </button>
        )
    }

}

export default LikeButton;