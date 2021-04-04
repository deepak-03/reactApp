import React from "react";
import IgtvElement from "./IgtvElement";

function Igtv(props){
    const videos = props.data.map(video => {
        return <IgtvElement key={video.id} video={video} data={video} />
    })

    return(
        <div className={props.currentTab==="igtvLink" ? "images" : "images hidden"} id="igtvHere">
            <div id="igtvContainer" className="videosTab">
                    {videos}
            </div>
        </div>
    )
}

export default Igtv;