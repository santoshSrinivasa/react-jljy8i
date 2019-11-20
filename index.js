import React, { Component } from "react";
import { render } from "react-dom";
import Anatta from "./Anatta";
import Product from "./Product";
import "./style.css";
import ProductDetails from "./ProductDetails"

class App extends Component {
  render() {
    return (
      <div>
        <Anatta />
        <Product />
        <ProductDetails/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
