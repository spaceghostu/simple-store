import { ChangeEvent } from "preact/compat";
import {
  cart,
  grandTotal,
  removeFromCart,
  tax,
  total,
  totalQuantity,
  updateCartItem,
} from "../../state";
import styles from "./Cart.module.css";
import { formatCurrency } from "../../utils/formatCurrency";

export const Cart = () => {
  return (
    <div className={styles.list}>
      {Array.from(cart.value).map((product) => (
        <div className={styles.item}>
          <div>{product.name}</div>
          <input
            min="0"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateCartItem(
                product,
                +(event.target as HTMLInputElement).value,
              );
            }}
            type="number"
            value={product.quantity}
          />
          <div>{formatCurrency(product.price * product.quantity)}</div>
        </div>
      ))}
      <div className={styles.divider} />
      <div className={styles.item}>
        <div>Total</div>
        <div>{totalQuantity} items</div>
        <div>{formatCurrency(total.value)}</div>
      </div>
      <div className={styles.item}>
        <div>Tax</div>
        <div />
        <div>{formatCurrency(tax.value)}</div>
      </div>
      <div className={styles.item}>
        <div>Grand Total</div>
        <div />
        <div>{formatCurrency(grandTotal.value)}</div>
      </div>
    </div>
  );
};
