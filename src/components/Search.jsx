import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY="7eee8ba6671549b08c71869c3f42c8a6"


export default function Search({foodData,setFoodData}) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood(){
        const res=await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data=await res.json();
        console.log(data.results);
        setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer }>
      <input className={styles.searchInput}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search for a recipe"
      />
    </div>
  );
}
