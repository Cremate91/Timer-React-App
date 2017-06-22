import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg';

class Nav extends Component{
    render(){
        return (
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
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-success my-sm-0" type="sumit">Login</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Nav;