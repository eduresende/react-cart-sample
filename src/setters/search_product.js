import lodash from 'lodash';

export default function (searchTerm) {
    const allProducts = this.props.allProducts;
    const searchTermRegex = new RegExp(searchTerm, 'i');
    const products = [];

    lodash.forEach(allProducts, (product) => {
        if (product.title.match(searchTermRegex)) {
            products.push(product);
        }
    });

    this.setState({ searchTerm, products });
}
