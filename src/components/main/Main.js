import React, { Component } from 'react';
import './Main.css';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = { date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
        () => this.tick(),
        1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
        date: new Date()
        });
    }

    render(props){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="headline text-center">{this.props.title}</h2>
                        <div className="row timebar text-center center">
                            <div className="col-md-3 hour">{this.state.date.getHours()}</div>
                            <div className="col-md-3 offset-md-1 minutes">{this.state.date.getMinutes()}</div>
                            <div className="col-md-3 offset-md-1 seounds">{this.state.date.getSeconds()}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;