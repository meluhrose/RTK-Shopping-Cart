import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuthenticated } from "../features/auth/authSlice";

function LogoutButton() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(selectIsAuthenticated);

    if (!isAuthenticated) { return null; }

    return (
        <button onClick={() => dispatch(logout())}>
            Logout
        </button>
    );
}

export default LogoutButton;