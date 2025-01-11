import "./App.css";
import ProductList, { ProdListBS } from "./components/Products/ProductList";

function App() {
  return (
    <>
      <div className="best_deals">
        <div style={{display: "flex", fontFamily: "arial", color : "white"}}>
          <h1 style = {{alignSelf: "flex-end"}}>BEST DEALS</h1>
        </div>
        <div style = {{display: "flex", justifyContent: "flex-end"}}>
          <ProdListBS />
        </div>
      </div>

      <div className="best_sellers">
        <div style = {{display: "flex", justifyContent: "flex-end"}}><ProductList /></div>
        <div style = {{display: "flex", justifyContent: "flex-start"}}><ProductList /></div>
      </div>
    </>
  )
}
export default App

//{{textAlign: "right", fontFamily: "Arial", fontStyle: "normal", fontWeight : 200, fontSize: 128, lineHeight: 114, letterSpacing: "-0.14em"}}