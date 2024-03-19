import styles from "./Item.module.css"

const Item =({foodItem}) => {
  return <li className={styles["food-item"]}>
    <span className={styles["food-span"]}>{foodItem}</span></li>;
};
export default Item;
