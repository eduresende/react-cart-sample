import React, { Component } from 'react';

export default class extends Component {
    render() {
        // values
        const app = this.props.app;
        const product = app.state.selectedProduct;

        // app methods
        const addToCart = app.addToCart;

        if (!product) {
            return (<div>
                <h1>Produto selecionado</h1>
                <p>Nenhum produto foi selecionado</p>
            </div>);
        }

        return (<div>
            <h1>Produto selecionado</h1>
            <h4>{product.title}</h4>
            <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
        </div>);
    }
}
