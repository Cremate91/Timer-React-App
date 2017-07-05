import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Main title={'Timer'}></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
