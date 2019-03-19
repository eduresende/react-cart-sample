import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import components
import ProductList from './components/product_list';
import ProductDetail from './components/product_detail';
import Cart from './components/cart';

// import getters
import productsGetter from './getters/products';
import searchTermGetter from './getters/search_term';
import itemPriceGetter from './getters/item_price';
import cartPriceGetter from './getters/cart_price';

// import setters
import searchProductSetter from './setters/search_product';
import selectProductSetter from './setters/select_product';
import addToCartSetter from './setters/add_to_cart';
import removeFromCartSetter from './setters/remove_from_cart';
import computeCartTotalPrice from './setters/compute_cart_total_price';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          searchTerm: '',
          products: this.props.allProducts,
          selectedProduct: null,
          cartItems: [],
          cartTotalPrice: 0
      };

      // disponibilizando getters e setters como metodos de App:

      // binding getters
      this.products = productsGetter.bind(this);
      this.searchTerm = searchTermGetter.bind(this);
      this.itemPrice = itemPriceGetter.bind(this);
      this.cartPrice = cartPriceGetter.bind(this);

      // binding setters
      this.searchProduct = searchProductSetter.bind(this);
      this.selectProduct = selectProductSetter.bind(this);
      this.addToCart = addToCartSetter.bind(this);
      this.removeFromCart = removeFromCartSetter.bind(this);
      this.computeCartTotalPrice = computeCartTotalPrice.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Cart</h2>
        </div>

        <div>
          <ProductList app={this} />
          <ProductDetail app={this} />
          <Cart app={this} />
        </div>
      </div>
    );
  }
}

export default App;
