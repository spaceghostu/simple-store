import { cart } from "./state";
import { Product } from "./types";

export const addToCart = (
  product: Omit<Product, "quantity">,
  quantity: number = 1,
) => {
  const newProduct =
    Array.from(cart.value).find((p) => p.name === product.name) || product;

  updateCartItem(newProduct, (newProduct.quantity || 0) + quantity);
};

export const updateCartItem = (
  product: Omit<Product, "quantity">,
  quantity: number,
) => {
  if (quantity <= 0) return removeFromCart(product);
  const newProduct =
    Array.from(cart.value).find((p) => p.name === product.name) || product;

  newProduct.quantity = quantity;

  cart.value = new Set([...cart.value, newProduct]);
};

export const removeFromCart = (product: Omit<Product, "quantity">) => {
  const newCart = new Set(cart.value);
  newCart.delete(product);
  cart.value = newCart;
};
