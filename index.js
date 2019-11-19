import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      products: []
    };
  }
  componentDidMount() {
    fetch("https://anatta-demo-app.herokuapp.com/api/images")
      .then(res => res.json())
      .then(res => this.setState({ data: res }));
    console.log(this.state.data);
    fetch("https://anatta-demo-app.herokuapp.com/api/products")
      .then(res => res.json())
      .then(res => this.setState({ products: res }));
    console.log(this.state.products);
  }
  render() {
    return (
      <div>
        {this.state.data.map((resp, index) => {
          console.log("index", index);
          return (
            <div>
              <img style={{width:300,height:300}} src={resp.url} alt={resp.productId} />;
              {this.state.products.map(
                res =>
                  res.id === resp.productId && (
                    <form>
                      <span>{res.name}</span>
                      <span>{res.description}</span>
                      <span style={{ color: res.color }}>{res.color}</span>
                      <span>{res.price}</span>
                      <span>{res.id}</span>
                    </form>
                  )
              )}
              ;
            </div>
          );
        })}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
