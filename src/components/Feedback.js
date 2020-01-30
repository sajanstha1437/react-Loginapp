import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import ReactPlayer from 'react-player';


export default class Home extends Component {
    constructor(props){
        super(props);
        const token = localStorage.getItem("token")

        let loggedIn = true;

        if (token == null){
            loggedIn = false
        }

        this.state = {
            loggedIn
        }
    }
    
    render() {

        if ( this.state.loggedIn === false){
            return <Redirect to="/" />
        }
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
                        <p className="p-wrapper">  This is Feedback Page</p>
                    </div>
                    <div className="wrapper-right">
                         <h1 className="h1-wrapper">If you wish to logout:</h1>
                         <Link to ="/Logout" ><button>Logout</button></Link>
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
