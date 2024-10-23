import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      const apiUrl = import.meta.env.VITE_API_URL_TWO;
      const apiKey = import.meta.env.VITE_API_KEY;
      const res = await fetch(
        `${apiUrl}/${foodId}/information?apiKey=${apiKey}`
      );
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
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👩‍👦
            <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vegetarian" : "🍖Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          $
          <strong>
            <span>{food.pricePerServing / 100} Per serving</span>
          </strong>
        </div>
        <h2>Ingredients</h2>
        {food.extendedIngredients && food.extendedIngredients.length > 0 ? (
          food.extendedIngredients.map((item) => (
            <div key={item.id}>
              <img
                src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
                alt={item.name}
              />
              <h3>{item.name}</h3>
              <h3>
                {item.amount} {item.unit}
              </h3>
            </div>
          ))
        ) : (
          <p>No ingredients available.</p>
        )}
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : food.analyzedInstructions &&
              food.analyzedInstructions.length > 0 ? (
              food.analyzedInstructions[0].steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))
            ) : (
              <p>No instructions available.</p>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
