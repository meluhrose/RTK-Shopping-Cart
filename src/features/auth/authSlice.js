import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockLoginAPI } from "../../api/mockAuthApi"; // Import the mock API function


export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const data = await mockLoginAPI(credentials.email, credentials.password);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

const initialState = {
    user: null,
    token: null,
    status: "idle",
    error: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.status = "idle";
            state.error = null;
            console.log("Reducer handled: logged out");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                console.log("Reducer handled: loginUser.pending");
                state.status = "loading";
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log("Reducer handled: loginUser.fulfilled");
                state.status = "succeeded";
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log("Reducer handled: loginUser.rejected");
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;
export const selectIsAuthenticated = (state) => !!state.auth.token;