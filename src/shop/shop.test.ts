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

    cart.addToCart(item, 1);

    expect(cart.items).toEqual([
      { name: "Dove Soap", price: 39.99, quantity: 1 },
    ]);
  });

  it("should update the quantity", () => {
    const item = { name: "Dove Soap", price: 39.99 };

    cart.addToCart(item, 5);

    expect(cart.items).toEqual([
      { name: "Dove Soap", price: 39.99, quantity: 5 },
    ]);
  });

  it("should get the total", () => {
    const item = { name: "Dove Soap", price: 39.99 };

    cart.addToCart(item, 5);

    expect(cart.getTotal()).toEqual(199.95);
  });
  it("should add with quantity", () => {
    const item = { name: "Dove Soap", price: 39.99 };

    cart.addToCart(item, 5);

    cart.addToCart(item, 3);

    expect(cart.getTotal()).toEqual(319.92);
  });
  it("should add with multiple products", () => {
    const dove = { name: "Dove Soap", price: 39.99 };
    const axe = { name: "Axe Deo", price: 99.99 };

    cart.addToCart(dove, 2);

    cart.addToCart(axe, 2);

    expect(cart.getTotalWithTax()).toEqual(314.96);
  });
});
