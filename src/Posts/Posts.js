import React, { Component } from "react";
import Images from "./Images.js";
import Igtv from "./Igtv.js";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { fetchPostsData, fetchIgtvData } from "../redux/posts/postsActions"

class Posts extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPostsData();
        this.props.fetchIgtvData()
    }

    render() {
        return (
            <div>
                <Images />
                <Igtv />
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPostsData: PropTypes.func,
    currentTab: PropTypes.string
}

const mapDispatchToProps = {
    fetchPostsData,
    fetchIgtvData
};



export default connect(null, mapDispatchToProps)(Posts);