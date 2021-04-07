import React from "react";
import IgtvElement from "./IgtvElement";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

function Igtv(props){
    const videos = props.igtvData.map(video => {
        return <IgtvElement key={video.id} video={video} />
    })

    if(props.loading)
    return "Loading..."

    return(
        <div className={props.currentTab==="igtvLink" ? "images" : "images hidden"} id="igtvHere">
            <div id="igtvContainer" className="videosTab">
                    {videos}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    loading : state.posts.igtvLoading,
    igtvData : state.posts.igtvData,
    currentTab : state.posts.currentTab
  })
  
Igtv.propTypes = {
    loading : PropTypes.bool,
    igtvData : PropTypes.array,
    currentTab : PropTypes.string
}

export default connect(mapStateToProps)(Igtv);
