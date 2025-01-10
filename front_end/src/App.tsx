import "./App.css";
import ProductList from "./components/Products/ProductList";

function App() {
  return (
    <>
      <div className="best_deals">
        <div>
          <h1>E-commerce CoProject</h1>
        </div>
        <div>
          <ProductList/>
        </div>
      </div>

      <div className="best_sellers">
        <ProductList />
        <ProductList />
        <h2></h2>
      </div>
    </>
  );
}
export default App;
