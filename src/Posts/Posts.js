import React from "react";
import Images from "./Images.js";
import Igtv from "./Igtv.js";

function Posts(props){
    return(
        <div>
            <Images data={props.postsData} currentTab={props.currentTab} />
            <Igtv data={props.igtvData} currentTab={props.currentTab} />
        </div>
    )
}

export default Posts;