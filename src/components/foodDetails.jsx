import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./itemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "7eee8ba6671549b08c71869c3f42c8a6";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title} </h1>
        <img className={styles.recipeImage} src={food.image} alt="foodimage" />
        <div className={styles.recipeInfo}>
          <span>
            <strong>Ready in Minutes: {food.readyInMinutes}</strong>
          </span>
          <span>
            <strong>Serves {food.servings} Peoples</strong>
          </span>
          <span>
            {food.vegetarian ? (
              <strong>Vegetarian</strong>
            ) : (
              <strong>Non-Vegetarian</strong>
            )}
          </span>
          <span>{food.vegan ? "Vegan" : " "}</span>
        </div>
        <div>
          $<span>{(food.pricePerServing / 100).toFixed(2)} Per Serving</span>
        </div>

        <div>
          <h2>Ingredients</h2>
            <ItemList food={food} isLoading={isLoading}/>
          <h2>Instructions</h2>
          <div className={styles.recipeInstructions} >
            <ol>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                food.analyzedInstructions[0].steps.map((step) => (
                  <li>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
