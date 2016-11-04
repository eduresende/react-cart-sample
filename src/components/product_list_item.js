import React, { Component } from 'react';

export default class extends Component {
    render() {
        // values
        const app = this.props.app;
        const product = this.props.product;

        // app methods
        const selectProduct = app.selectProduct;

        return (
            <tr onClick={() => selectProduct(product)}>
                <td>{product.title}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}
