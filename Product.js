import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Product extends Component {
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
    var productId = [];
    var uniqueArray = [];
    return (
      <div className="mainDivWidth">
        <Carousel>
          {this.state.data.map((resp, index) => {
            return (
              <div>
                <img
                  // style={{ width: 600, height: 270, marginTop: 10}}
                  src={resp.url}
                  alt={resp.productId}
                />
                {this.state.products.map(
                  res =>
                    res.id === resp.productId && (
                      <form>
                        <span>{res.name}</span>
                        <span>{res.description}</span>
                        <span>{res.price}</span>
                        <span>{res.id}</span>
                      </form>
                    )
                )}
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default Product;
