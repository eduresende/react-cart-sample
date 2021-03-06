import lodash from 'lodash';

export default function (product) {
    const oldItems = this.state.cartItems;
    const newItems = [];
    let added = false;
    var cartTotalPrice = 0;

    lodash.forEach(oldItems, (item) => {
        let quantity = item.quantity;

        if (item.product.title === product.title) {
            quantity += 1;
            added = true;
        }

        newItems.push({ product: item.product, quantity });
    });

    if (!added) {
        newItems.push({ product, quantity: 1 });
    }

    cartTotalPrice = this.computeCartTotalPrice(newItems);

    this.setState({ cartItems: newItems, cartTotalPrice: cartTotalPrice });
}
