import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const [errors, setErrors] = useState({});
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
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

		if (!formData.email) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Email address is invalid';
		}

		// Password validation rules
		const password = formData.password;
		if (!password) {
			newErrors.password = 'Password is required';
		} else if (password.length < 6) {
			newErrors.password = 'Password must be at least 6 characters';
		} else if (!/[A-Z]/.test(password)) {
			newErrors.password = 'Password must contain at least one uppercase letter';
		} else if (!/[a-z]/.test(password)) {
			newErrors.password = 'Password must contain at least one lowercase letter';
		} else if (!/[0-9]/.test(password)) {
			newErrors.password = 'Password must contain at least one number';
		} else if (!/[!@#$%^&*(),.?":{}|<>_\-\\[\]\/~`+=;']/g.test(password)) {
			newErrors.password = 'Password must contain at least one special character';
		} else if (/^[!@#$%^&*(),.?":{}|<>_\-\\[\]\/~`+=;']/.test(password)) {
			newErrors.password = 'Password cannot start with a special character';
		}

		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const validationErrors = validateForm();
		setErrors(validationErrors);

		if (Object.keys(validationErrors).length > 0) {
			return;
		}

		// Attempt login
		const result = login(formData.email, formData.password);

		if (result.success) {
			// Redirect to the page they were trying to access, or home
			const from = location.state?.from?.pathname || '/';
			navigate(from, { replace: true });
		} else {
			// Show error message
			setErrors({ general: result.error });
		}
	};

	return (
		<div className="min-h-screen bg-base-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 bg-base-100 p-8 rounded-xl shadow-lg">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-base-content">
						Sign in to your account
					</h2>
					<p className="mt-2 text-center text-sm text-base-content/70">
						Enter your credentials to access your account
					</p>
				</div>

				{errors.general && (
					<div className="alert alert-error">
						<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span>{errors.general}</span>
					</div>
				)}

				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md space-y-4">
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
							<div className="relative">
								<input
									id="password"
									name="password"
									type={showPassword ? "text" : "password"}
									autoComplete="current-password"
									required
									className={`input input-bordered w-full pr-10 ${errors.password ? 'input-error' : ''}`}
									placeholder="••••••••"
									value={formData.password}
									onChange={handleChange}
								/>
								<button
									type="button"
									className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400"
									tabIndex={-1}
									onClick={() => setShowPassword((prev) => !prev)}
									aria-label={showPassword ? "Hide password" : "Show password"}
								>
									{showPassword ? (
										// Eye Open SVG
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
										</svg>
									) : (
										// Eye Closed SVG
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95M6.634 6.634A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.293 5.95M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
										</svg>
									)}
								</button>
							</div>
							{errors.password && (
								<p className="mt-1 text-sm text-error">{errors.password}</p>
							)}
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="checkbox checkbox-primary"
							/>
							<label htmlFor="remember-me" className="ml-2 block text-sm text-base-content">
								Remember me
							</label>
						</div>

						<div className="text-sm">
							<a href="#" className="font-medium text-primary hover:text-primary-focus">
								Forgot your password?
							</a>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="btn btn-primary w-full"
						>
							Sign in
						</button>
					</div>
				</form>
				<div className="text-center text-sm text-base-content/70">
					<p>
						Don't have an account?{' '}
						<a href="/register" className="font-medium text-primary hover:text-primary-focus">
							Sign up
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;