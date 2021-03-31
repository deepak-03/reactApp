import React from "react";
import LikeCommentDiv from "./LikeCommentDiv";

function IgtvElement(props){
    return(
        <div className="imagePost">
            <video className="images" controls>
                <source src={props.video.vidLink} />
            </video>
            <LikeCommentDiv data={props.data} />
        </div>
    )
}

export default IgtvElement;