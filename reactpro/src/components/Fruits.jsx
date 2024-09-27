import Fruit from "./Fruit";

export default function Fruits() {
//   const fruits = ["Apple", "Mango", "Orange", "Banana"];
const fruits = [
    {name: "Apple", price: 10, emoji: "🍎"},
    {name: "Mango", price: 20, emoji: "🥭"},
    {name: "Banana", price: 15, emoji: "🍌"},
    {name: "Pineapple", price: 14, emoji: "🍍"},
    {name: "Orange", price: 19, emoji: "🍊"},
]
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
           <Fruit key={Fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji}/>
        ))}
      </ul>
    </div>
  );
}
