import React, { Component } from 'react';
import { render } from 'react-dom';
import "./style.css";

class Anatta extends React.Component{
  render(){
    return (
    <div>
      <div className="header">
        <p className="header-txt">FREE US SHIPPING & RETURN</p>
      </div>
      <div className="navbar">
        <a href="#">MEN</a>
        <a href="#">WOMEN</a>
      </div>
      <div class="row">
    <div class="side">
      <h5>MEN</h5>
      <div class="main-content">
        <span class="product-name">Red Canvas</span>
        <span class="price">$79 USD</span></div>
    </div>
  </div>
    </div>
    )
  }
}

export default Anatta;

