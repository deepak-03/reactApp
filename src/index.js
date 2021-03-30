import React,{Component} from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Profile from "./Profile/Profile";
import MenuContainer from "./MenuContainer";
import "./index.css";

class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            profileData:{},
            igtvData:{},
            postsData:{},
            currentTab: "imageLink"
        };
        this.handleTabSwitch = this.handleTabSwitch.bind(this);
    }

    componentDidMount(){
        fetch("./../Data.json")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            this.setState({
                profileData: data.profileData,
                postsData: data.posts,
                igtvData: data.igtv
            });
        });
    }

    handleTabSwitch(e){
        document.getElementById(e.target.parentElement.id).classList.add("active");
        document.getElementById(this.state.currentTab).classList.remove("active");
        this.setState({
            currentTab: e.target.parentElement.id
        })
    }

    render(){
        return (
            <div className="wrapper">
                <Navbar />
                <div className="mainPage">
                    <Profile profileData={this.state.profileData} />
                    <div id="imageVideoWrapper">
                        <MenuContainer handleTabSwitch = {this.handleTabSwitch} />
                        <Posts currentTab = {this.state.currentTab} postsData={this.state.postsData} igtvData={this.state.igtvData}/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));