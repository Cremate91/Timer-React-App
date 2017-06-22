import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return (
            <footer className="bg-faded">
                <div className="container">
                    <div className="row vcenter">
                        <div className="pull-left col-lg-4 col-xs-12">
                            <p>Copyright &copy;2017 <a target="_blank" href="http://www.cremate-dev.de">cremate-dev.de</a></p>
                        </div>
                        <div className="col-lg-4 col-lg-offset-4 col-xs-12">
                            <div className="pull-right">
                                <a href="#"><i className="fa fa-behance-square fa-icon"></i></a>
                                <a href="#"><i className="fa fa-linkedin-square fa-icon"></i></a>
                                <a href="#"><i className="fa fa-twitter-square fa-icon"></i></a>
                                <a href="#"><i className="fa fa-skype fa-icon"></i></a>
                                <a href="#"><i className="fa fa-facebook-square fa-icon"></i></a>
                                <a href="#"><i className="fa fa-github-square fa-icon"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;