import React, { Component } from 'react';
// import {GoogleLogin} from 'react-google-login-component';
import logo from '../../assets/img/logo.svg';
import './Nav.css';

class Nav extends Component{
    
    // responseGoogle (googleUser) {
    //     var id_token = googleUser.getAuthResponse().id_token;
    //     console.log({accessToken: id_token});
    //     //anything else you want to do(save to localStorage)...
    // }

    render(){
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a href="#home" className="navbar-brand">
                        <img src={logo} alt="" width="50" height="50" className="d-inline-block align-top"/>
                    </a>
                    <div className="collapse navbar-collapse" classID="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a href="#timer" className="nav-link">
                                    Timer
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#kalender" className="nav-link">Kalender</a>
                            </li>
                        </ul>
                        {/*<GoogleLogin socialId="533538884669-ne2apg4hvqlnnie2au2i42bp83jgo0b8.apps.googleusercontent.com"
                                     className="btn btn-outline-success"
                                     scope="profile"
                                     responseHandler={this.responseGoogle}
                                     buttonText="Login With Google"/>*/}
                        <button className="btn btn-outline-success" id="login-btn">Login</button>
                        <button className="btn btn-secondary" id="logout-btn" disabled>Logout</button>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;