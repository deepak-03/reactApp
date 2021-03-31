import React from "react";
import Images from "./Images.js";
import Igtv from "./Igtv.js";

{/* <div>
    <div class="images" id="postsHere">
        <div id="imagesContainer" class="imagesTab "></div>
    </div>
    <div class="images hidden" id="igtvHere">
        <div id="igtvContainer" class="videosTab"></div>
    </div>
</div> */}

function Posts(props){
    return(
        <div>
            <Images data={props.postsData} currentTab={props.currentTab} />
            <Igtv data={props.igtvData} currentTab={props.currentTab} />
        </div>
    )
}

export default Posts;