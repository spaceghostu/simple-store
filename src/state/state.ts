import { computed, signal } from "@preact/signals";
import { Product } from "./types";

export const cart = signal<Set<Product>>(new Set());

export const total = computed(() => {
  return (
    Math.ceil(
      Array.from(cart.value).reduce((acc, product) => {
        return acc + (product.price || 0) * (product.quantity || 0);
      }, 0) * 100,
    ) / 100
  );
});

export const totalQuantity = computed(() => {
  return Array.from(cart.value).reduce((acc, product) => {
    return acc + (product.quantity || 0);
  }, 0);
});
