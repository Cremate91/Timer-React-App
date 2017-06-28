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
                            <div className="col-md-3">
                                <span className="time top">
                                    {this.state.date.getHours()}
                                </span>
                                <span className="time bottem">
                                    {this.state.date.getHours()}
                                </span>
                            </div>
                            <div className="col-md-3 minutes">
                                <span className="time top">
                                    {this.state.date.getMinutes()}
                                </span>
                                <span className="time bottem">
                                    {this.state.date.getMinutes()}
                                </span>
                            </div>
                            <div className="col-md-3 seounds">
                                <span className="time current top">
                                    {this.state.date.getSeconds()}
                                </span>
                                <span className="time next top">
                                    {this.state.date.getSeconds()}
                                </span>
                                <span className="time next bottem">
                                    {this.state.date.getSeconds()}
                                </span>
                                <span className="time current bottem">
                                    {this.state.date.getSeconds()}
                                </span>
                            </div>
                            {/*<div className="col-md-3 hour">{this.state.date.getHours()}</div>
                            <div className="col-md-3 offset-md-1 minutes">{this.state.date.getMinutes()}</div>
                            <div className="col-md-3 offset-md-1 seounds">{this.state.date.getSeconds()}</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;