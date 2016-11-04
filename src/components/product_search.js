import React, { Component } from 'react';

export default class extends Component {
    render() {
        // values
        const app = this.props.app;
        const searchTerm = app.searchTerm();

        // app methods
        const searchProduct = app.searchProduct;

        return (<div>
            <input
                value={searchTerm}
                onChange={(event) => searchProduct(event.target.value)}
            />
        </div>);
    }
}
