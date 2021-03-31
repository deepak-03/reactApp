import LikeCommentDiv from "./LikeCommentDiv"

function ImageElement(props){
   return(
     <div className="imagePost">
      <img className="images" src={props.image.imgLink}/>
      <LikeCommentDiv data={props.data} />
     </div>
     )
}

export default ImageElement;