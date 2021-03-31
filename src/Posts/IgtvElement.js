import React from "react";

function IgtvElement(props){
    return(
        <video className="images" controls>
            <source src={props.video.vidLink} />
        </video>
    )
}

export default IgtvElement;