import React from "react";

class ProductDetails extends React.Component {
  render() {
    return (
      <div className="colorPanel">
        <div>
          <h3 style={{marginLeft: 10}}>Size</h3>
          <button className="colorMargin" value="S">
            S
          </button>
          <button className="colorMargin" value="M">
            M
          </button>
          <button className="colorMargin" value="L">
            L
          </button>
          <button className="colorMargin" value="XL">
            XL
          </button>
          <button className="colorMargin" value="XXL">
            XXL
          </button>
        </div>
        <div>
          <h3 style={{marginLeft: 10}}>Color</h3>
          <ul className="listStyle">
            <li className="">
              <label>
                Black
                <button
                  value="Black"
                  class="customCheckbox"
                  style={{ backgroundColor: "rgb(54, 69, 79)" }}
                />
              </label>
            </li>
            <li>
              <label>
                White
                <button
                  value="White"
                  class="customCheckbox colorBorder"
                  style={{ backgroundColor: " rgb(255, 255, 255);" }}
                />
              </label>
            </li>
            <li>
              <label>
                Blue
                <button
                  value="Blue"
                  class="customCheckbox"
                  style={{ backgroundColor: "rgb(0, 116, 217)" }}
                />
              </label>
            </li>
            <li>
              <label>
                Red
                <button
                  value="Red"
                  class="customCheckbox"
                  style={{ backgroundColor: "rgb(211, 75, 86)" }}
                />
              </label>
            </li>
            <li>
              <label>
                Orange
                <button
                  value="Red"
                  class="customCheckbox"
                  style={{ backgroundColor: "rgb(242, 141, 32)" }}
                />
              </label>
            </li>
            <li>
              <label>
                Maroon
                <button
                  value="Maroon"
                  class="customCheckbox"
                  style={{ backgroundColor: "rgb(176, 48, 96)" }}
                />
              </label>
            </li>
          </ul>
        </div>
        <button className="buttonPanel">Add to Image</button>
      </div>
    );
  }
}

export default ProductDetails;
