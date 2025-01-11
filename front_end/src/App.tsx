import "./App.css";
import ProductList, { ProdListBS } from "./components/Products/ProductList";

function App() {
  return (
    <>
      <div className="best_deals">
        <div style={{textAlign: "left"}}>
          <h1>E-commerce CoProject</h1>
        </div>
        <div>
          <ProdListBS />
        </div>
      </div>

      <div className="best_sellers">
        <ProductList />
        <ProductList />
        <h2></h2>
      </div>
    </>
  )
}
export default App
