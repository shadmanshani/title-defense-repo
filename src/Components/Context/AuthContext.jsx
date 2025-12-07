import React, { createContext, useContext, useState, useEffect } from 'react';
import { registerUser, loginUser, getCurrentUser, logoutUser } from '../../utils/userDB';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    // Check if user is logged in on mount
    useEffect(() => {
        const currentUser = getCurrentUser();
        if (currentUser) {
            setUser(currentUser);
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        const result = loginUser(email, password);
        if (result.success) {
            setUser(result.user);
            setIsAuthenticated(true);
        }
        return result;
    };

    const register = (userData) => {
        const result = registerUser(userData);
        if (result.success) {
            // Auto-login after registration
            setUser(result.user);
            setIsAuthenticated(true);
            // Also save to current user
            localStorage.setItem('repairBeforeReplace_currentUser', JSON.stringify(result.user));
        }
        return result;
    };

    const logout = () => {
        logoutUser();
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
