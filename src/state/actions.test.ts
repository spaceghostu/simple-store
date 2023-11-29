import { addToCart, updateCartItem, removeFromCart } from "./actions";
import { cart } from "./state";
import { Product } from "./types";

describe("addToCart", () => {
  beforeEach(() => {
    cart.value = new Set<Product>();
  });

  test("should add new product to cart with quantity 1", () => {
    const product: Product = { name: "Product 1", price: 39.99 };
    addToCart(product);

    expect(Array.from(cart.value)[0]).toEqual(product);
    expect(Array.from(cart.value)[0].quantity).toBe(1);
  });

  test("should update quantity if product already exists in cart", () => {
    const product: Product = { name: "Product 1", price: 39.99 };
    addToCart(product);
    addToCart(product);
    addToCart(product);
    addToCart(product);
    addToCart(product);

    expect(Array.from(cart.value)[0].quantity).toBe(5);
  });

  test("should update quantity by given quantity", () => {
    const product: Product = { name: "Product 1", price: 39.99 };
    addToCart(product, 5);
    expect(Array.from(cart.value)[0].quantity).toBe(5);
    addToCart(product, 5);
    expect(Array.from(cart.value)[0].quantity).toBe(10);
  });
});

describe("updateCartItem", () => {
  beforeEach(() => {
    cart.value = new Set<Product>();
  });

  test("should update quantity of existing product in cart", () => {
    const product: Product = { name: "Product 1", price: 39.99 };
    addToCart(product);
    updateCartItem(product, 10);

    expect(Array.from(cart.value)[0].quantity).toBe(10);
  });

  test("should add new product to cart if it doesn't exist", () => {
    const product: Product = { name: "Product 1", price: 39.99 };
    updateCartItem(product, 10);

    expect(Array.from(cart.value)[0]).toEqual(product);
  });

  test("should remove product from cart if quantity is 0 or less", () => {
    const product: Product = { name: "Product 1", price: 39.99 };
    addToCart(product);
    updateCartItem(product, 0);

    expect(cart.value.size).toBe(0);
  });
});

describe("removeFromCart", () => {
  beforeEach(() => {
    cart.value = new Set<Product>();
  });

  test("should remove product from cart", () => {
    const product: Product = { name: "Product 1", price: 39.99 };
    addToCart(product);
    removeFromCart(product);

    expect(cart.value.size).toBe(0);
  });

  test("should not remove other products from cart", () => {
    const product1: Product = { name: "Product 1", price: 39.99 };
    const product2: Product = { name: "Product 2", price: 39.99 };
    addToCart(product1);
    addToCart(product2);
    removeFromCart(product1);

    expect(cart.value.size).toBe(1);
    expect(Array.from(cart.value)[0]).toEqual(product2);
  });
});
