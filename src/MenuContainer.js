import React from "react";

function MenuContainer(){
    return(
        <div id="imageVideoWrapper">
        <div className="menuContainer" id="menuContainer">
          <a href="#imagesContainer" id="imageLink" className="menuItems active">
              <i className="fas fa-th "></i>
              <h4>POSTS</h4>
          </a>
          <a href="#igtvContainer" id="igtvLink" className="menuItems">
              <i className="fas fa-tv"></i>
              <h4>IGTV</h4>
          </a>
        </div>
        {/* <div class="images" id="postsHere">
          <div id="imagesContainer" class="imagesTab ">
          </div>  
        </div>
        <div class="images hidden" id="igtvHere">
          <div id="igtvContainer" class="videosTab">
            <!-- <video class="images" controls>
              <source src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4">
            </video> -->
          </div>   */}
        {/* </div> */}
      </div>
    )
}

export default MenuContainer;