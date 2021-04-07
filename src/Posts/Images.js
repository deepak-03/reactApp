import React from "react";
import ImageElement from "./ImageElement";
import {connect} from "react-redux";

function Images(props){
    const images = props.postsData.map((image) =>{
        return <ImageElement key={image.id1} image={image}/>;
    });

    return(
        <div className={props.currentTab === "imageLink" ? "images" : "images hidden"}>
            <div id="imagesContainer" className="imagesTab">
                    {images}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    postsData : state.posts.postsData
  })
  

export default connect(mapStateToProps)(Images);
