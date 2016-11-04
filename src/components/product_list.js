import React, { Component } from 'react';

import ProductListItem from './product_list_item';
import ProductSearch from './product_search';

export default class extends Component {
    render() {
        // values
        const app = this.props.app;
        const products = app.products();

        const listItems = products.map((product) => {
            return <ProductListItem key={product.title} product={product} app={this.props.app} />;
        });

        return (
            <div>
                <h1>Lista de Produtos</h1>
                <ProductSearch app={app}/>
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                      {listItems}
                    </tbody>
                </table>
                <hr />
            </div>
        );
    }
}
