import LikeCommentDiv from "./LikeCommentDiv"
import React from "react";
import PropTypes from 'prop-types';

function ImageElement(props){
   return(
     <div className="imagePost">
      <img className="images" src={props.image.imgLink} alt= {props.image.id1}/>
      <LikeCommentDiv data={props.image} />
     </div>
     )
}

ImageElement.propTypes = {
  image : PropTypes.object,
  imgLink : PropTypes.string
}

export default ImageElement;