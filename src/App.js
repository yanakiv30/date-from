import { useState } from "react";
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>    
  );
}

function Counter() {
  const [count, setCount] = useState();
  return <div>
    Test
    </div>
}


