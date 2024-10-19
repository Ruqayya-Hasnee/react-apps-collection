import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "430bf1db27ff4fc69989b60eba520612";

export default function Search() {
  const [query, setQuery] = useState("pizza");
  
 useEffect(() => {
  async function fetchfood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`); 
      const data = await res.json();
      console.log(data.results);  
  }
  fetchfood();
}, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}

