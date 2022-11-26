import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";

class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
        <h1>Cart</h1>
        {Object.keys(this.props.state.items).map((key) => (
          <CartItem count={this.props.state.items[key]} name={key}></CartItem>
        ))}
        <h3>Total: ${this.props.state.price.toFixed(2)}</h3>
      </div>
    );
  }
}

export default Cart;
