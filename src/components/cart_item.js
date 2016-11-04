import React, { Component } from 'react';

export default class extends Component {
    render() {
        // values
        const app = this.props.app;
        const item = this.props.item;
        const product = item.product;
        const itemPrice = app.itemPrice(item);

        // app methods
        const addToCart = app.addToCart;
        const removeFromCart = app.removeFromCart;

        return (
            <tr>
                <td>{item.product.title}</td>
                <td>{item.quantity}</td>
                <td>{itemPrice}</td>
                <td><button onClick={() => addToCart(product)}>add</button></td>
                <td><button onClick={() => removeFromCart(product)}>remove</button></td>
            </tr>
        );
    }
}
