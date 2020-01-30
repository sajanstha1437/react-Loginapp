import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import ReactPlayer from 'react-player';


export default class Login extends Component {

    constructor(props){
        super(props);
        const token = localStorage.getItem("token")

        let loggedIn = true;

        if (token == null){
            loggedIn = false
        }
        
        this.state={
            username:'',
            password:'',
            loggedIn
        }

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);

    }


    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault();
        const { username, password } = this.state;

        //login logic begins from here
        if(username === "sajan" && password === "visitnepal2020"){
            localStorage.setItem("token", "dfasfd");
            this.setState({
                loggedIn : true
            })

        }



    }

    render() {
        if (this.state.loggedIn){
            return <Redirect to="/Home" />
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
                        <ReactPlayer muted width="100%" height="100%" url="htps://www.https://www.youtube.com/watch?v=ut-U-4m42aQ" playing />

                    </div>
                    <div className="wrapper-right">
                        <h1 className="h1-wrapper">Login in to see details</h1>
                        <form onSubmit={this.submitForm} className="form">
                            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.onChange}/>
                            
                            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange}/>
                            
                            <input type="submit" value="Login"/>
                        </form>
                         
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
