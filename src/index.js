import React,{Component} from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Profile from "./Profile";
import MenuContainer from "./MenuContainer";
import "./index.css";

class App extends Component{
    render(){
        return (
            <div className="wrapper">
                <Navbar />
                <div className="mainPage">
                    <Profile />
                    <MenuContainer />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));