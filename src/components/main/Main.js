import React, { Component } from 'react'
import './Main.css'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  render (props) {
    return (
      <div className="container-fluid main">
        <div className="row">
          <div className="col-12">
            <h2 className="headline text-center">{this.props.title}</h2>
            <div className="row timebar">
              <div className="col-3 time-wrapper text-center">
                <span className="time">
                  {this.state.date.getHours()}
                </span>
              </div>
              <div className="col-3 time-wrapper text-center">
                <span className="time">
                  {this.state.date.getMinutes()}
                </span>
              </div>
              <div className="col-3 time-wrapper text-center">
                <span className="time">
                  {this.state.date.getSeconds()}
                </span>
              </div>
              {/*
              <div className="col-md-3 hour">{this.state.date.getHours()}</div>
              <div className="col-md-3 offset-md-1 minutes">{this.state.date.getMinutes()}</div>
              <div className="col-md-3 offset-md-1 seounds">{this.state.date.getSeconds()}</div>
              */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
