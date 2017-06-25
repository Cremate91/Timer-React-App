import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return (
            <footer className="bg-faded">
                <div className="row">
                    <div className="col-md-2 align-self-center copyright">Copyright &copy;2017 <a target="_blank" href="http://www.cremate-dev.de">cremate-dev.de</a></div>
                    <div className="col-md-2 offset-md-8 social-icons text-right">
                        <a href="https://de.linkedin.com/in/andreasburger4medieninformatik"><i className="fa fa-linkedin-square fa-icon"></i></a>
                        <a href="https://github.com/Cremate91"><i className="fa fa-github-square fa-icon"></i></a>
                        <a href="https://github.com/Cremate91"><i className="fa fa-slack fa-icon"></i></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;