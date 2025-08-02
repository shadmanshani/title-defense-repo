import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const [errors, setErrors] = useState({});
    const [isButtonFocused, setIsButtonFocused] = useState(false);
    const [buttonShake, setButtonShake] = useState(false);
    const buttonRef = useRef(null);
    const navigate = useNavigate();
    const { login } = useAuth();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };
    
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        
        return newErrors;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // If button is not focused, prevent submission if fields are empty
        if (!isButtonFocused) {
            const newErrors = validateForm();
            setErrors(newErrors);
            
            if (Object.keys(newErrors).length > 0) {
                // Trigger button shake effect
                setButtonShake(true);
                setTimeout(() => setButtonShake(false), 500);
                
                // Move cursor around the button
                if (buttonRef.current) {
                    const button = buttonRef.current;
                    const rect = button.getBoundingClientRect();
                    
                    // Move cursor to different positions around the button
                    const positions = [
                        { x: rect.left - 10, y: rect.top + rect.height / 2 },     // Left
                        { x: rect.right + 10, y: rect.top + rect.height / 2 },    // Right
                        { x: rect.left + rect.width / 2, y: rect.top - 10 },      // Top
                        { x: rect.left + rect.width / 2, y: rect.bottom + 10 },   // Bottom
                        { x: rect.left - 10, y: rect.top - 10 },                  // Top-left
                        { x: rect.right + 10, y: rect.top - 10 },                 // Top-right
                        { x: rect.left - 10, y: rect.bottom + 10 },               // Bottom-left
                        { x: rect.right + 10, y: rect.bottom + 10 }               // Bottom-right
                    ];
                    
                    // This would normally move the cursor, but we'll just simulate the effect
                    // by adding a visual indicator
                }
                
                return;
            }
        }
        
        // If we're here, either button is focused or validation passed
        console.log('Registration submitted:', formData);
        // Here you would typically send the data to your backend
        // For now, we'll just simulate a successful registration and login
        login();
        alert('Registration successful!');
        navigate('/'); // Redirect to home page after registration
    };
    
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-base-100 p-8 rounded-xl shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-base-content">
                        Create an account
                    </h2>
                    <p className="mt-2 text-center text-sm text-base-content/70">
                        Register to access our services
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-base-content mb-1">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-error">{errors.name}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-base-content mb-1">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-error">{errors.email}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-base-content mb-1">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className={`input input-bordered w-full ${errors.password ? 'input-error' : ''}`}
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-error">{errors.password}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-base-content mb-1">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                autoComplete="new-password"
                                required
                                className={`input input-bordered w-full ${errors.confirmPassword ? 'input-error' : ''}`}
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            {errors.confirmPassword && (
                                <p className="mt-1 text-sm text-error">{errors.confirmPassword}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            className="checkbox checkbox-primary"
                            required
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-base-content">
                            I agree to the <a href="#" className="text-primary hover:text-primary-focus">Terms and Conditions</a>
                        </label>
                    </div>

                    <div>
                        <button
                            ref={buttonRef}
                            type="submit"
                            className={`btn btn-primary w-full ${buttonShake ? 'animate-shake' : ''}`}
                            onFocus={() => setIsButtonFocused(true)}
                            onBlur={() => setIsButtonFocused(false)}
                        >
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="text-center text-sm text-base-content/70">
                    <p>
                        Already have an account?{' '}
                        <a href="/login" className="font-medium text-primary hover:text-primary-focus">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
            <style jsx>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }
                .animate-shake {
                    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
                }
            `}</style>
        </div>
    );
};

export default Register;