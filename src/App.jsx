import CartDisplayRTK from "./components/CartDisplay";
import CartSummaryRTK from "./components/CartSummaryRTK";
import ProductAdderRTK from "./components/ProductAdderRTK";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>RTK Shopping Cart</h1>
      <hr />
      <CartDisplayRTK />
      <CartSummaryRTK />
      <ProductAdderRTK />
      <LoginForm />
      <LogoutButton />
    </div>
  );
}

export default App;