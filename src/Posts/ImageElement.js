import LikeCommentDiv from "./LikeCommentDiv"
import React from "react";

function ImageElement(props){
   return(
     <div className="imagePost">
      <img className="images" src={props.image.imgLink} alt= {props.image.id1}/>
      <LikeCommentDiv data={props.image} />
     </div>
     )
}

export default ImageElement;