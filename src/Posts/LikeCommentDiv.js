import React from "react";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";

function LikeCommentDiv(props){
    return(
        <div className="likeComment">
            <LikeButton data={props.data} />
            <CommentButton data={props.data} />
        </div>
    )
}

export default LikeCommentDiv;