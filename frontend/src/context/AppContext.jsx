import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

// Create the context
export const AppContent = createContext();

// Create the provider component
export const AppContextProvider = ({ children }) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL; // Retrieve backend URL from environment variables
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
    const [userData, setUserData] = useState(null); // Manage user data

    // Axios default configuration
    axios.defaults.baseURL = backendUrl;
    axios.defaults.withCredentials = true;

    // Fetch auth state
    const getAuthState = async () => {
        try {
            const { data } = await axios.get("/api/auth/is-auth");
            if (data.success) {
                setIsLoggedIn(true);
                getUserData();
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    };

    // Fetch user data
    const getUserData = async () => {
        try {
            const { data } = await axios.get("/api/user/data");
            data.success ? setUserData(data.userData) : toast.error(data.message);
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    };

    useEffect(() => {
        getAuthState();
    }, []);

    // Memoized context value
    const value = useMemo(
        () => ({
            backendUrl,
            isLoggedIn,
            setIsLoggedIn,
            userData,
            setUserData,
            getUserData,
        }),
        [backendUrl, isLoggedIn, userData]
    );

    return <AppContent.Provider value={value}>{children}</AppContent.Provider>;
};
