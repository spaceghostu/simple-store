export class Cart {
  items: any[];
  total: number;
  tax = 1.125;

  constructor() {
    this.items = [];
    this.total = 0;
  }

  addToCart(item: any, quantity: number) {
    const itemInCart = this.items.find(
      (cartItem) => cartItem.name === item.name,
    );

    if (itemInCart) {
      itemInCart.quantity = itemInCart.quantity + quantity;
    } else {
      item = { ...item, quantity };
      this.items.push(item);
    }
    this.addToTotal(item.price * quantity);
  }

  addToTotal(value) {
    this.total = this.total + value;
  }
  getTotalWithTax() {
    const totalWithTax = this.total * this.tax;
    const roundedTotal = Math.ceil(totalWithTax * 100) / 100;
    return roundedTotal;
  }

  getTotal() {
    return +new Intl.NumberFormat("en-US", {
      currency: "ZAR",
    }).format(this.total);
  }
}
