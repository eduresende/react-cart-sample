
/*

 - todo o estado da aplicacao fica no componente raiz: App

 - nenhum componente tem state proprio. eles so tem props

 - nenhum componente muda o state diretamente

 - nenhum componente faz calculo baseado no state diretamente

 - enfim, nenhum componente acessa o state, exceto App

 - todos os componentes internos recebem a referencia a app como propriedade.

    exemplo:

    // app={this}   ----> referencia ao componente App
    <ProductList products={this.state.products} app={this} />

 - os componentes interagem com o state invocando metodos de app

 - os metodos da app podem ser getters ou setters

 - getters sao metodos que computam valores, sem alterar o state

 - setters sao metodos que alteram o state da aplicacao

        exemplo:

        // botao comprar no componente product_detail:
        this.props.app.addToCart(product);

 - getters e setters ficam em pastas separadas e sao incluidos em app para melhorar a organizacao

 - getters/setters podem ser reusados

        exemplo:

        setters/add_to_cart por exemplo, é usado no componente product_detail e no cart_item
        para adicionar unidades do produto ao carrinho

*/

// import libs
import React, { Component } from 'react';

// import components
import ProductSearch from './product_search';
import ProductList from './product_list';
import ProductDetail from './product_detail';
import Cart from './cart';

// import setters
import searchProductSetter from '../setters/search_product';
import selectProductSetter from '../setters/select_product';
import addToCartSetter from '../setters/add_to_cart';
import removeFromCartSetter from '../setters/remove_from_cart';

// import getters
import productsGetter from '../getters/products';
import searchTermGetter from '../getters/search_term';
import itemPriceGetter from '../getters/item_price';
import cartPriceGetter from '../getters/cart_price';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            products: this.props.allProducts,
            selectedProduct: null,
            cartItems: []
        };

        // disponibilizando getters e setters como metodos de App:

        // binding setters
        this.searchProduct = searchProductSetter.bind(this);
        this.selectProduct = selectProductSetter.bind(this);
        this.addToCart = addToCartSetter.bind(this);
        this.removeFromCart = removeFromCartSetter.bind(this);

        // binding getters
        this.products = productsGetter.bind(this);
        this.searchTerm = searchTermGetter.bind(this);
        this.itemPrice = itemPriceGetter.bind(this);
        this.cartPrice = cartPriceGetter.bind(this);
    }

    render() {
        return (
            <div>
                <ProductSearch app={this}/>
                <ProductList products={this.state.products} app={this} />
                <ProductDetail product={this.state.selectedProduct} app={this} />
                <Cart cartItems={this.state.cartItems} app={this} />
            </div>
        );
    }
}
