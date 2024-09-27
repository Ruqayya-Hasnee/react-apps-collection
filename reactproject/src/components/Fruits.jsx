import Fruit from "./Fruit";

export default function Fruits() {
//   const fruits = ["Apple", "Mango", "Orange", "Banana"];
const fruits = [
    {name: "Apple", price: 10, emoji: "🍎", soldout: false},
    {name: "Mango", price: 2, emoji: "🥭", soldout: false},
    {name: "Banana", price: 15, emoji: "🍌", soldout: true},
    {name: "Pineapple", price: 4, emoji: "🍍", soldout: false},
    {name: "Orange", price: 19, emoji: "🍊", soldout: true},
]
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
           <Fruit key={Fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} soldout={fruit.soldout}/>
        ))}
      </ul>
    </div>
  );
}
