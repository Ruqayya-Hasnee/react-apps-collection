import ConditionalComponent from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
function App() {
  const seatNumbers=[6,3,7]
  const person={
    name: "Rob",
    message: "Hi there!", 
    emoji: "✋",
    seatNumbers: [6,3,7]
  }
  return (
    <div className="App">
     <ConditionalComponent />
    </div>
  )
}

export default App;
