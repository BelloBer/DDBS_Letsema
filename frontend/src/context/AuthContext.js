//frontend/src/context/AuthContext.js
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("access") || "");

    const login = async (username, password) => {
        const response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `grant_type=password&username=${username}&password=${password}&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET`,
        });

        const data = await response.json();
        if (response.ok) {
            setToken(data.access_token);
            localStorage.setItem("access", data.access_token);
            setUser(username);
        } else {
            alert("Login failed: " + (data.error || "Invalid credentials"));
        }
    };

    const logout = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("access");
    };

    useEffect(() => {
        if (token) {
            setUser("Authenticated User"); // Adjust as needed
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
