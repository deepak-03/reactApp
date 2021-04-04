import React,{Component} from "react";
import Navbar from "./Navbar";
import Profile from "./Profile/Profile";
import MenuContainer from "./MenuContainer";
import Posts from "./Posts/Posts";
import "./index.css";

class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            loading:false,
            profileData:{},
            igtvData:[],
            postsData:[],
            currentTab: "imageLink"
        };
        this.handleTabSwitch = this.handleTabSwitch.bind(this);
    }

   componentDidMount(){
       try{
           fetch("./../Data.json")
               .then(response => response.json())
               .then(data => {
                   this.setState({
                       profileData: data.profileData,
                       postsData: data.posts,
                       igtvData: data.igtv,
                       loading:true
                   });
               });
        }
        catch(err){
            console.log(err);
        }
    }

    handleTabSwitch(e){
        document.getElementById(e.target.parentElement.id).classList.add("active");
        document.getElementById(this.state.currentTab).classList.remove("active");
        this.setState({
            currentTab: e.target.parentElement.id
        })
    }

    render(){
        if(!this.state.loading)
        return(
            <h1>Still Loading...</h1>
        )
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

export default App;