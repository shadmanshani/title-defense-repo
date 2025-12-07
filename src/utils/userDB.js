// Simple user database using localStorage (JSON format)

const USERS_KEY = 'repairBeforeReplace_users';
const CURRENT_USER_KEY = 'repairBeforeReplace_currentUser';

// Simple password encoding (NOT secure, just for demo)
const encodePassword = (password) => {
    return btoa(password); // Base64 encode
};

const decodePassword = (encoded) => {
    return atob(encoded); // Base64 decode
};

// Get all users from localStorage
export const getAllUsers = () => {
    const usersJSON = localStorage.getItem(USERS_KEY);
    return usersJSON ? JSON.parse(usersJSON) : [];
};

// Save users to localStorage
const saveUsers = (users) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Register a new user
export const registerUser = (userData) => {
    const users = getAllUsers();

    // Check if user already exists
    const existingUser = users.find(u => u.email === userData.email);
    if (existingUser) {
        return { success: false, error: 'User with this email already exists' };
    }

    // Create new user
    const newUser = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone || '',
        password: encodePassword(userData.password),
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);

    return { success: true, user: { ...newUser, password: undefined } };
};

// Login user
export const loginUser = (email, password) => {
    const users = getAllUsers();

    const user = users.find(u => u.email === email);
    if (!user) {
        return { success: false, error: 'User not found' };
    }

    if (decodePassword(user.password) !== password) {
        return { success: false, error: 'Incorrect password' };
    }

    // Save current user
    const userWithoutPassword = { ...user, password: undefined };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));

    return { success: true, user: userWithoutPassword };
};

// Get current logged-in user
export const getCurrentUser = () => {
    const userJSON = localStorage.getItem(CURRENT_USER_KEY);
    return userJSON ? JSON.parse(userJSON) : null;
};

// Logout user
export const logoutUser = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
};

// Check if user is authenticated
export const isAuthenticated = () => {
    return getCurrentUser() !== null;
};
