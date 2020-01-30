import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';


export default class Home extends Component {
    constructor(props){
        super(props);
        localStorage.removeItem("token");

    }
    
    render() {
        return (
            <div className="maindiv">
                <div className="bannerdiv">
                    <h1>Visit Nepal <br/>2020</h1>
                </div>
                <div className="mainMenu">
                    <div className="menu"><Link to="/Home" className="menu-link">  Home </Link></div>              
                    <div className="menu"><Link to="/About" className="menu-link">  About </Link></div>               
                    <div className="menu"><Link to="/Gallery" className="menu-link">  Gallery </Link></div>
                    <div className="menu"><Link to="/Contact" className="menu-link">  Contact </Link></div>
                    <div className="menu"><Link to="/Feedback" className="menu-link">  Feedback </Link></div>
                </div>

                <div className="wrapper">
                    <div className="wrapper-left">
                        <ReactPlayer muted width="100%" height="100%" url="htps://www.https://www.youtube.com/watch?v=ut-U-4m42aQ" playing />

                    </div>
                    <div className="wrapper-right">
                         <h1 className="h1-wrapper">You have been Logged Out</h1>
                         <Link to="/" > <button>Login</button></Link>
                    </div>
                </div>

                <div className="wrapper-bottom">
                    <div className="wrapper-bottom-left">

                    </div>
                    <div className="wrapper-bottom-center"></div>
                    <div className="wrapper-bottom-right"></div>
                </div>
                
                
            </div>
        )
    }
}
