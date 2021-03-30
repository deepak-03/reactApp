import React from "react";

function ProfileNumbers(props){
    return(
        <div className="row_2">
        <div> <b id="numberOfPosts">{props.numberOfPosts}</b> posts </div>
        <div> <b id="numberOfFollowers">{props.followers}</b> followers </div>
        <div> <b id="numberOfFollowing">{props.following}</b> following </div> 
        </div>
    )
}

export default ProfileNumbers;