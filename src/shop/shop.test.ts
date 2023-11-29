import { Cart } from "./shop";

describe("Calculator", () => {
  let cart;
  beforeEach(() => {
    cart = new Cart();
  });

  // afterEach(() => {
  //   const { getByText } = component;
  //   fireEvent.click(getByText("C"));
  // });

  it("should addToCart", () => {
    const item = { name: "Dove Soap", price: 39.99 };

    cart.addToCart(item, cart);

    expect(cart.items).toEqual([
      { name: "Dove Soap", price: 39.99, quantity: 1 },
    ]);
  });

  it("should update the quantity", () => {
    const item = { name: "Dove Soap", price: 39.99 };

    cart.addToCart(item, cart);
    cart.addToCart(item, cart);
    cart.addToCart(item, cart);
    cart.addToCart(item, cart);
    cart.addToCart(item, cart);

    expect(cart.items).toEqual([
      { name: "Dove Soap", price: 39.99, quantity: 5 },
    ]);
  });

  it("should get the total", () => {
    const item = { name: "Dove Soap", price: 39.99 };

    cart.addToCart(item, cart);
    cart.addToCart(item, cart);
    cart.addToCart(item, cart);
    cart.addToCart(item, cart);
    cart.addToCart(item, cart);

    expect(cart.getTotal()).toEqual(199.95);
  });
});
