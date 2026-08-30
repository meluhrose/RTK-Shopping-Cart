import CartDisplayRTK from "./components/cartDisplayRTK";
import CartSummaryRTK from "./components/CartSummaryRTK";
import ProductAdderRTK from "./components/ProductAdderRTK";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>RTK Shopping Cart</h1>
      <hr />
      <CartDisplayRTK />
      <CartSummaryRTK />
      <ProductAdderRTK />
    </div>
  );
}

export default App;