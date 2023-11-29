import { PRODUCTS, addToCart } from "../../state";
import styles from "./Products.module.css";

export const Products = () => {
  return (
    <div className={styles.list}>
      {PRODUCTS.map((product) => (
        <div className={styles.item}>
          <div>{product.name}</div>
          <button onClick={() => addToCart(product)}>add</button>
        </div>
      ))}
    </div>
  );
};
