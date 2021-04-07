import React from "react";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import PropTypes from 'prop-types';

function LikeCommentDiv(props){
    return(
        <div className="likeComment">
            <LikeButton likes={props.data.likes} ifLiked={props.data.ifLiked} />
            <CommentButton comments={props.data.comments} ifCommented={props.data.ifCommented}/>
        </div>
    )
}

LikeCommentDiv.propTypes = {
    data: PropTypes.object
}

export default LikeCommentDiv;