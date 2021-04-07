import React, {Component} from "react";
import Images from "./Images.js";
import Igtv from "./Igtv.js";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {fetchPostsData} from "../redux/posts/postsActions"

class Posts extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPostsData();
    }

    render(){
    return(
        <div>
            <Images currentTab={this.props.currentTab} />
            <Igtv data={this.props.igtvData} currentTab={this.props.currentTab} />
        </div>
    )
}
}

Posts.propTypes = {
    postsData : PropTypes.array,
    igtvData : PropTypes.array,
    currentTab : PropTypes.string
}

const mapDispatchToProps = {
    fetchPostsData,
};



export default connect(null,mapDispatchToProps)(Posts);