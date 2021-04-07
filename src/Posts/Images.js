import React from "react";
import ImageElement from "./ImageElement";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

function Images(props){
    const images = props.postsData.map((image) =>{
        return <ImageElement key={image.id1} image={image}/>;
    });

    if(props.loading)
    return "Loading..."
   
    return(
        <div className={props.currentTab === "imageLink" ? "images" : "images hidden"}>
            <div id="imagesContainer" className="imagesTab">
                    {images}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loading : state.posts.postsLoading,
    postsData : state.posts.postsData,
    currentTab : state.posts.currentTab
  })
  
Images.propTypes = {
    loading : PropTypes.bool,
    currentTab : PropTypes.string,
    postsData : PropTypes.array
}

export default connect(mapStateToProps)(Images);
