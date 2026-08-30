import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/cart/cartSlice";

function CartDisplayRTK() {
    const itemsMap = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const itemsArray = Object.values(itemsMap);

    if (itemsArray.length === 0) {
        return <p>Your cart is empty.</p>;
    }

    return (
        <div className="cart-display">
            <h2>Your Cart</h2>
            <ul>
                {itemsArray.map((item) => (
                    <li key={item.productId} style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>

                        <span style={{ marginRight: "10px" }}>{item.productId}</span>
                        <br />
                        <span style={{ marginRight: "10px" }}>{item.quantity}</span>
                        
                        <button onClick={() => dispatch(updateQuantity({ productId: item.productId, quantity: item.quantity - 1 }))} style={{ marginRight: "5px" }}>
                            -1
                        </button>

                        <button onClick={() => dispatch(updateQuantity({ productId: item.productId, quantity: item.quantity + 1 }))} style={{ marginRight: "5px" }}>
                            +1
                        </button>

                        <button onClick={() => dispatch(removeItem({ productId: item.productId }))}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            </div>
    );
}

export default CartDisplayRTK;
        
