import "./App.css";
import ProductList from "./components/Products/ProductList";

function App() {
  return (
    <>
      <div className="best_deals">
        <div><h1>E-commerce CoProject</h1></div>
        <div><ProductList style={{ display: "flex",textAlign: "right", gap: "30px", margin: 30}}/></div>
      </div>

      <div className="best_sellers">
        <ProductList style={{ display: "flex", gap: "30px", margin: 30}}/>
        <ProductList style={{ display: "flex", gap: "30px", margin: 30}}/>
        <h2></h2>
      </div>
    </>
  );
}
export default App;
