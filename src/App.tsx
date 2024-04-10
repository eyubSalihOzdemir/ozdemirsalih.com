import { useState } from "react";
import Navbar from "./views/Navbar";
import Home from "./views/Home";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
