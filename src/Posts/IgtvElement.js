import React from "react";
import LikeCommentDiv from "./LikeCommentDiv";
import PropTypes from 'prop-types';

function IgtvElement(props){
    return(
        <div className="imagePost">
            <video className="images" controls>
                <source src={props.video.vidLink} />
            </video>
            <LikeCommentDiv data={props.video} />
        </div>
    )
}

IgtvElement.propTypes = {
    video : PropTypes.object,
    vidLink : PropTypes.string
}

export default IgtvElement;