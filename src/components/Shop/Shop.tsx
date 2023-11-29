import styles from "./Shop.module.css";
import { Products } from "../Products/Products";
import { Cart } from "../Cart/Cart";

export const Shop = () => {
  return (
    <div className={styles.shop}>
      <Products />
      <Cart />
    </div>
  );
};
