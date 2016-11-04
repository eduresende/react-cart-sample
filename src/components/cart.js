import React, { Component } from 'react';
import _ from 'lodash';

import CartItem from './cart_item';

export default class extends Component {
    cartItems() {
        const items = this.props.cartItems;

        if (items.length === 0) {
            return <div>Nenhum produto no carrinho</div>;
        }

        const cItems = items.map((item) => {
            return (<CartItem key={item.product.title} item={item} app={this.props.app} />);
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Total</th>
                        <th colSpan={2}>Opções</th>
                    </tr>
                </thead>
                <tbody>
                  {cItems}
                </tbody>
            </table>
        );
    }

    render() {
        // values
        const app = this.props.app;
        const cartPrice = app.cartPrice();

        return (
            <div>
                <hr />
                <h1>Carrinho de Compras ( Total: {cartPrice} )</h1>
                {this.cartItems()}
            </div>
        );
    }
}
