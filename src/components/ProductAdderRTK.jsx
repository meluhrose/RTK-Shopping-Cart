import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

function ProductAdderRTK() {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(addItem({ productId: "product1", name: "Product 1" }))}>
                Add Product 1
            </button>

            <button onClick={() => dispatch(addItem({ productId: "product2", name: "Product 2" }))}>
                Add Product 2
            </button>
        </div>
    );
}

export default ProductAdderRTK;