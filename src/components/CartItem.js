import React from "react";
import "./CartItem.css"
class CartItem extends React.Component {
    render() {
        return (
            <div>
                <div className="information">
                    <p>{this.props.count} x {this.props.name}</p>
                </div>

            </div>
        );
    }
}

export default CartItem;