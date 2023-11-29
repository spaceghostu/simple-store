export class Cart {
  items: any[];
  total: number;

  constructor() {
    this.items = [];
    this.total = 0;
  }

  addToCart(item: any) {
    const itemInCart = this.items.find(
      (cartItem) => cartItem.name === item.name,
    );

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      item = { ...item, quantity: 1 };
    }

    this.addTotal(item);
  }

  addTotal(item: any) {
    this.total = this.total + item.price * item.quantity;
  }

  getTotal() {
    return +new Intl.NumberFormat("en-US", {
      currency: "ZAR",
    }).format(this.total);
  }
}
