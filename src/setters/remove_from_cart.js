import lodash from 'lodash';

export default function removeFromCart(product) {
    const oldItems = this.state.cartItems;
    const newItems = [];

    lodash.forEach(oldItems, (item) => {
        let quantity = item.quantity;

        if (item.product.title === product.title) {
            quantity -= 1;
        }

        if (quantity > 0) {
            newItems.push({ product: item.product, quantity });
        }
    });

    this.setState({ cartItems: newItems });
}
