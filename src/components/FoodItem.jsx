import styles from "./fooditem.module.css";
export default function FoodItem({ food ,setFoodId}) {
  return (
    <div className={styles.foodItem}>
      <img className={styles.foodImage} src={food.image} alt={food.title} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}> {food.title}</p>
      </div>
      <div className={styles.Btn}>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className={styles.itemBtn}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
