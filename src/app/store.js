import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import authReducer from "../features/auth/authSlice";


const storage = {
    getItem: async (key) => {
        try {
            return localStorage.getItem(key);
        } catch {
            return null;
        }
    },
    setItem: async (key, value) => {
        try {
            localStorage.setItem(key, value);
        } catch {
            // Ignore storage quota errors in local browser environments.
        }
    },
    removeItem: async (key) => {
        try {
            localStorage.removeItem(key);
        } catch {
            // Ignore storage removal errors.
        }
    },
};

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"], // Only persist the cart slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

