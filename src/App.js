import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Footer></Footer>
      </div>
      /*
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="btn btn-primary">test</button>
      </div>
      */
    );
  }
}

export default App;
