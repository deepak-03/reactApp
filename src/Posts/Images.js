import React from "react";
import ImageElement from "./ImageElement";
// import LikeCommentDiv from "./LikeCommentDiv";

function Images(props){
    const images = props.data.map((image) =>{
        return <ImageElement key={image.id1} image={image} data={image} />;
    });

    return(
        <div className={props.currentTab === "imageLink" ? "images" : "images hidden"}>
            <div id="imagesContainer" className="imagesTab">
                {/* <div className="imagePost"> */}
                    {images}
                {/* </div> */}
            </div>
        </div>
    );
}

export default Images;