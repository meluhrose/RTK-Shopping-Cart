import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../features/auth/authSlice";

function AuthStatus() {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const user = useSelector((state) => state.auth.user);
    
    return (
        <p>
            {isAuthenticated ? `Logged in as ${user.name}` : "Not logged in"}
        </p>
    );
}

export default AuthStatus;