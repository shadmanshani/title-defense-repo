import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { getUserOrders, getAllOrders } from '../../utils/orderDB';

const Track = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [orderId, setOrderId] = useState('');
    const [orderData, setOrderData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [userOrders, setUserOrders] = useState([]);

    // Load user's orders on mount
    useEffect(() => {
        if (user) {
            const orders = getUserOrders(user.id);
            setUserOrders(orders);
        }
    }, [user]);

    const handleSearch = () => {
        if (!orderId.trim()) {
            setError('Please enter an Order ID');
            return;
        }

        setIsLoading(true);
        setError('');

        // Simulate API call delay
        setTimeout(() => {
            // Search in localStorage first
            const allOrders = getAllOrders();
            const order = allOrders.find(o => o.id.toUpperCase() === orderId.toUpperCase());

            if (order) {
                setOrderData(order);
                setError('');
            } else {
                setOrderData(null);
                setError('Order not found. Please check your Order ID.');
            }
            setIsLoading(false);
        }, 500);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending': return 'text-blue-600';
            case 'Confirmed': return 'text-green-600';
            case 'In Progress': return 'text-yellow-600';
            case 'Ready': return 'text-green-700';
            case 'Completed': return 'text-green-800';
            default: return 'text-base-content';
        }
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Pending': return 'badge-info';
            case 'Confirmed': return 'badge-success';
            case 'In Progress': return 'badge-warning';
            case 'Ready': return 'badge-success';
            case 'Completed': return 'badge-success';
            default: return 'badge-neutral';
        }
    };

    return (
        <div className="min-h-screen bg-base-200">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white pt-24 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Track Your Order</h1>
                    <p className="text-xl mb-8">Enter your Order ID to check the status of your repair</p>

                    {/* Search Section */}
                    <div className="max-w-md mx-auto">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Enter Order ID (e.g., BK123456)"
                                className="input input-bordered flex-1 text-base-content"
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <button
                                onClick={handleSearch}
                                disabled={isLoading}
                                className="btn btn-warning px-6"
                            >
                                {isLoading ? (
                                    <span className="loading loading-spinner loading-sm"></span>
                                ) : (
                                    '🔍 Search'
                                )}
                            </button>
                        </div>

                        {error && (
                            <div className="alert alert-error mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{error}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Order Details Section */}
            {orderData && (
                <div className="container mx-auto px-4 py-12">
                    {/* Order Summary Card */}
                    <div className="card bg-base-100 shadow-xl mb-8">
                        <div className="card-body">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-base-content mb-2">Order #{orderData.id}</h2>
                                    <p className="text-base-content/70">{orderData.service} - {orderData.device}</p>
                                </div>
                                <div className="text-right mt-4 md:mt-0">
                                    <div className={`badge ${getStatusBadge(orderData.status)} badge-lg mb-2`}>
                                        {orderData.status}
                                    </div>
                                    <p className="text-sm text-base-content/60">Created: {new Date(orderData.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="stat">
                                    <div className="stat-title">Service Cost</div>
                                    <div className="stat-value text-primary">৳{orderData.estimatedCost}</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Pickup Option</div>
                                    <div className="stat-value text-lg">{orderData.pickupOption === 'pickup' ? '🚗 Pickup' : '🏪 Drop-off'}</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Date</div>
                                    <div className="stat-value text-lg">{orderData.selectedDate}</div>
                                </div>
                            </div>

                            {orderData.address && (
                                <div className="mt-4 p-4 bg-base-200 rounded-lg">
                                    <h4 className="font-semibold mb-2">Address:</h4>
                                    <p>{orderData.address}</p>
                                </div>
                            )}

                            {orderData.notes && (
                                <div className="mt-4 p-4 bg-base-200 rounded-lg">
                                    <h4 className="font-semibold mb-2">Notes:</h4>
                                    <p>{orderData.notes}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                            <div className="space-y-2">
                                <p><strong>Name:</strong> {orderData.userName}</p>
                                <p><strong>Email:</strong> {orderData.userEmail}</p>
                                <p><strong>Phone:</strong> {orderData.userPhone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* User's Orders Section */}
            {!orderData && userOrders.length > 0 && (
                <div className="container mx-auto px-4 py-12">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-2xl font-bold text-base-content mb-6">Your Recent Orders</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {userOrders.slice(0, 6).map((order) => (
                                    <div key={order.id} className="card bg-base-200 shadow hover:shadow-lg transition-shadow cursor-pointer" onClick={() => {
                                        setOrderId(order.id);
                                        handleSearch();
                                    }}>
                                        <div className="card-body p-4">
                                            <h4 className="font-bold text-lg">{order.id}</h4>
                                            <p className="text-sm text-base-content/70">{order.service}</p>
                                            <p className="text-sm text-base-content/70">{order.device}</p>
                                            <div className={`badge ${getStatusBadge(order.status)} mt-2`}>
                                                {order.status}
                                            </div>
                                            <p className="text-xs text-base-content/60 mt-2">
                                                {new Date(order.createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Empty State */}
            {!orderData && !error && userOrders.length === 0 && (
                <div className="container mx-auto px-4 py-12">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body text-center">
                            <div className="text-6xl mb-4">📦</div>
                            <h3 className="text-2xl font-bold text-base-content mb-4">No Orders Yet</h3>
                            <p className="text-base-content/70 mb-6">
                                You haven't made any bookings yet. Start by booking a repair service!
                            </p>
                            <button
                                onClick={() => navigate('/booking')}
                                className="btn btn-primary mx-auto"
                            >
                                Book a Repair
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Support Section */}
            <div className="bg-base-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-base-content mb-4">Need Help?</h2>
                        <p className="text-base-content/70 max-w-2xl mx-auto">
                            Can't find your order or have questions? Our support team is here to help.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-base-content">Call Us</h3>
                            <p className="text-base-content/70">+880 1234-567890</p>
                            <p className="text-sm text-base-content/60">9 AM - 8 PM, 7 days a week</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-base-content">Email Us</h3>
                            <p className="text-base-content/70">support@repairbeforereplace.com</p>
                            <p className="text-sm text-base-content/60">We'll respond within 24 hours</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-base-content">Visit Us</h3>
                            <p className="text-base-content/70">Dhanmondi, Dhaka</p>
                            <p className="text-sm text-base-content/60">Open 7 days a week</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Track;