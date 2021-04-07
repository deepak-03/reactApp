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
            igtvData:[],
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
                    //    postsData: data.posts,
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
                <Navbar/>
                <div className="mainPage">
                    <Profile />
                    <div id="imageVideoWrapper">
                        <MenuContainer handleTabSwitch = {this.handleTabSwitch} currentTab={this.state.currentTab} />
                        <Posts currentTab = {this.state.currentTab} igtvData={this.state.igtvData}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;