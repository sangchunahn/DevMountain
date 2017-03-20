import React, { Component } from 'react';
import Navbar from './navbar/navbar'
import Home from './home/home';
import Footer from './footer/footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {'empty string'}
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
