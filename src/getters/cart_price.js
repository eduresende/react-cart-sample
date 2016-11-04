import lodash from 'lodash';

export default function () {
    const cartItems = this.state.cartItems;

    const itemPrices = cartItems.map((item) => {
        return item.quantity * item.product.price;
    });

    return lodash.sum(itemPrices);
}
