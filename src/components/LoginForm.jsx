import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectIsAuthenticated, selectAuthError } from "../features/auth/authSlice";

function LoginForm() {
    const dispatch = useDispatch();
    const status = useSelector(selectIsAuthenticated);
    const error = useSelector(selectAuthError);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (status !== "loading") {
            dispatch(loginUser({ email, password }));
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Logging in..." : "Login"}
            </button>
            {error && <p>{error}</p>}
        </form>
    );
}

export default LoginForm;