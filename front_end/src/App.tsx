import { useState } from "react";
import "./App.css";
//import Item from "./components/Products/Item";
import ProductList from "./components/Products/ProductList"
//import Item from "./assets/components/item";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>E-commerce CoProject</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Here is a random button count is {count}
        </button>
      </div>

      <div className="dunno">
        <ProductList />
        <h2>dunno how to do tdcxfghhissdfg lmao ;P</h2>
      </div>

    </>
  );
}
export default App;
