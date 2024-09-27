import Counter from "./components/Counter";
import Message from "./components/Message";
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
     <Counter />
    </div>
  )
}

export default App;
