import { useSelector } from "react-redux";
import { selectCartTotalQuantity } from "../features/cart/cartSlice";

function CartSummaryRTK() {
    const totalItems = useSelector(selectCartTotalQuantity);

    return (
        <div style={{ position: "fixed", top: "10px", right: "10px", backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "5px" }}>
            <h3>Cart Summary</h3>
            <p>Total Items: <strong>{totalItems}</strong></p>
        </div>
    );
}

export default CartSummaryRTK;
