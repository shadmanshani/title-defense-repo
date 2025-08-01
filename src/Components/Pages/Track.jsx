import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Track = () => {
    const navigate = useNavigate();
    const [orderId, setOrderId] = useState('');
    const [orderData, setOrderData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Mock order data for demonstration - 12 orders covering all 5 service categories
    const mockOrders = {
        // Mobile Service Orders (3 orders)
        'ORD001': {
            id: 'ORD001',
            service: 'Mobile Screen Replacement',
            device: 'iPhone 12 Pro',
            status: 'In Progress',
            currentStep: 4,
            estimatedCompletion: '2024-01-15',
            cost: '৳3,500',
            technician: 'Ahmed Hassan',
            createdAt: '2024-01-12',
            steps: [
                { step: 1, title: 'Order Received', completed: true, date: '2024-01-12' },
                { step: 2, title: 'Diagnosis Complete', completed: true, date: '2024-01-13' },
                { step: 3, title: 'Parts Ordered', completed: true, date: '2024-01-13' },
                { step: 4, title: 'Repair in Progress', completed: true, date: '2024-01-14' },
                { step: 5, title: 'Quality Check', completed: false, date: null },
                { step: 6, title: 'Ready for Pickup', completed: false, date: null }
            ]
        },
        'ORD002': {
            id: 'ORD002',
            service: 'Mobile Battery Replacement',
            device: 'Samsung Galaxy S21',
            status: 'Ready for Pickup',
            currentStep: 6,
            estimatedCompletion: '2024-01-14',
            cost: '৳2,800',
            technician: 'Rafiq Ahmed',
            createdAt: '2024-01-10',
            steps: [
                { step: 1, title: 'Order Received', completed: true, date: '2024-01-10' },
                { step: 2, title: 'Diagnosis Complete', completed: true, date: '2024-01-11' },
                { step: 3, title: 'Parts Ordered', completed: true, date: '2024-01-11' },
                { step: 4, title: 'Repair in Progress', completed: true, date: '2024-01-12' },
                { step: 5, title: 'Quality Check', completed: true, date: '2024-01-13' },
                { step: 6, title: 'Ready for Pickup', completed: true, date: '2024-01-14' }
            ]
        },
        'ORD003': {
            id: 'ORD003',
            service: 'Mobile Camera Repair',
            device: 'iPhone 13',
            status: 'Order Received',
            currentStep: 1,
            estimatedCompletion: '2024-01-18',
            cost: '৳4,200',
            technician: 'Karim Uddin',
            createdAt: '2024-01-15',
            steps: [
                { step: 1, title: 'Order Received', completed: true, date: '2024-01-15' },
                { step: 2, title: 'Diagnosis Complete', completed: false, date: null },
                { step: 3, title: 'Parts Ordered', completed: false, date: null },
                { step: 4, title: 'Repair in Progress', completed: false, date: null },
                { step: 5, title: 'Quality Check', completed: false, date: null },
                { step: 6, title: 'Ready for Pickup', completed: false, date: null }
            ]
        },
        
        // Laptop Service Orders (3 orders)
        'ORD004': {
            id: 'ORD004',
            service: 'Laptop Screen Replacement',
            device: 'HP Pavilion 15',
            status: 'In Progress',
            currentStep: 3,
            estimatedCompletion: '2024-01-17',
            cost: '৳8,500',
            technician: 'Nasir Ahmed',
            createdAt: '2024-01-13',
            steps: [
                { step: 1, title: 'Order Received', completed: true, date: '2024-01-13' },
                { step: 2, title: 'Diagnosis Complete', completed: true, date: '2024-01-14' },
                { step: 3, title: 'Parts Ordered', completed: true, date: '2024-01-15' },
                { step: 4, title: 'Repair in Progress', completed: false, date: null },
                { step: 5, title: 'Quality Check', completed: false, date: null },
                { step: 6, title: 'Ready for Pickup', completed: false, date: null }
            ]
        },
        'ORD005': {
            id: 'ORD005',
            service: 'Laptop Keyboard Repair',
            device: 'Lenovo ThinkPad',
            status: 'Ready for Pickup',
            currentStep: 6,
            estimatedCompletion: '2024-01-16',
            cost: '৳3,200',
            technician: 'Salim Khan',
            createdAt: '2024-01-11',
            steps: [
                { step: 1, title: 'Order Received', completed: true, date: '2024-01-11' },
                { step: 2, title: 'Diagnosis Complete', completed: true, date: '2024-01-12' },
                { step: 3, title: 'Parts Ordered', completed: true, date: '2024-01-12' },
                { step: 4, title: 'Repair in Progress', completed: true, date: '2024-01-14' },
                { step: 5, title: 'Quality Check', completed: true, date: '2024-01-15' },
                { step: 6, title: 'Ready for Pickup', completed: true, date: '2024-01-16' }
            ]
        },
        'ORD006': {
            id: 'ORD006',
            service: 'Laptop RAM Upgrade',
            device: 'ASUS VivoBook',
            status: 'In Progress',
            currentStep: 2,
            estimatedCompletion: '2024-01-19',
            cost: '৳5,500',
            technician: 'Jahir Rayhan',
            createdAt: '2024-01-16',
            steps: [
                { step: 1, title: 'Order Received', completed: true, date: '2024-01-16' },
                { step: 2, title: 'Diagnosis Complete', completed: true, date: '2024-01-17' },
                { step: 3, title: 'Parts Ordered', completed: false, date: null },
                { step: 4, title: 'Repair in Progress', completed: false, date: null },
                { step: 5, title: 'Quality Check', completed: false, date: null },
                { step: 6, title: 'Ready for Pickup', completed: false, date: null }
            ]
        },
        
        // Mouse & Keyboard Service Orders (2 orders)
        'ORD007': {
            id: 'ORD007',
            service: 'Mouse Sensor Repair',
            device: 'Logitech G502',
            status: 'Ready for Pickup',
            currentStep: 6,
            estimatedCompletion: '2024-01-15',
            cost: '৳1,200',
            technician: 'Mizanur Rahman',
            createdAt: '2024-01-12',
            steps: [
                { step: 1, title: 'Order Received', completed: true, date: '2024-01-12' },
                { step: 2, title: 'Diagnosis Complete', completed: true, date: '2024-01-13' },
                { step: 3, title: 'Parts Ordered', completed: true, date: '2024-01-13' },
                { step: 4, title: 'Repair in Progress', completed: true, date: '2024-01-14' },
                { step: 5, title: 'Quality Check', completed: true, date: '2024-01-14' },
                { step: 6, title: 'Ready for Pickup', completed: true, date: '2024-01-15' }
            ]
        },
        'ORD008': {
            id: 'ORD008',
            service: 'Mechanical Keyboard Repair',
            device: 'Corsair K95 RGB',
            status: 'In Progress',
            currentStep: 4,
            estimatedCompletion: '2024-01-20',
            cost: '৳2,800',
            technician: 'Tarek Hassan',
            createdAt: '2024-01-17',
            steps: [
                { step: 1, title: 'Order Received', completed: true, date: '2024-01-17' },
                { step: 2, title: 'Diagnosis Complete', completed: true, date: '2024-01-18' },
                { step: 3, title: 'Parts Ordered', completed: true, date: '2024-01-18' },
                { step: 4, title: 'Repair in Progress', completed: true, date: '2024-01-19' },
                { step: 5, title: 'Quality Check', completed: false, date: null },
                { step: 6, title: 'Ready for Pickup', completed: false, date: null }
            ]
        },
        
        // Others Service Orders (4 orders)
        'ORD009': {
            id: 'ORD009',
            service: 'Printer Repair',
            device: 'HP LaserJet Pro',
            status: 'Order Received',
            currentStep: 1,
            estimatedCompletion: '2024-01-22',
            cost: '৳3,500',
            technician: 'Rubel Hossain',
            createdAt: '2024-01-18',
            steps: [
                { step: 1, title: 'Order Received', completed: true, date: '2024-01-18' },
                { step: 2, title: 'Diagnosis Complete', completed: false, date: null },
                { step: 3, title: 'Parts Ordered', completed: false, date: null },
                { step: 4, title: 'Repair in Progress', completed: false, date: null },
                { step: 5, title: 'Quality Check', completed: false, date: null },
                { step: 6, title: 'Ready for Pickup', completed: false, date: null }
            ]
        },
        'ORD010': {
            id: 'ORD010',
            service: 'Projector Service',
            device: 'Epson EB-X41',
            status: 'In Progress',
            currentStep: 5,
            estimatedCompletion: '2024-01-19',
            cost: '৳4,800',
            technician: 'Shakil Ahmed',
            createdAt: '2024-01-14',
            steps: [
                { step: 1, title: 'Order Received', completed: true, date: '2024-01-14' },
                { step: 2, title: 'Diagnosis Complete', completed: true, date: '2024-01-15' },
                { step: 3, title: 'Parts Ordered', completed: true, date: '2024-01-15' },
                { step: 4, title: 'Repair in Progress', completed: true, date: '2024-01-17' },
                { step: 5, title: 'Quality Check', completed: true, date: '2024-01-18' },
                { step: 6, title: 'Ready for Pickup', completed: false, date: null }
            ]
        },
        'ORD011': {
            id: 'ORD011',
            service: 'CCTV Installation',
            device: 'Hikvision 4CH System',
            status: 'Ready for Pickup',
            currentStep: 6,
            estimatedCompletion: '2024-01-17',
            cost: '৳12,500',
            technician: 'Mamun Khan',
            createdAt: '2024-01-10',
            steps: [
                { step: 1, title: 'Order Received', completed: true, date: '2024-01-10' },
                { step: 2, title: 'Diagnosis Complete', completed: true, date: '2024-01-11' },
                { step: 3, title: 'Parts Ordered', completed: true, date: '2024-01-12' },
                { step: 4, title: 'Repair in Progress', completed: true, date: '2024-01-15' },
                { step: 5, title: 'Quality Check', completed: true, date: '2024-01-16' },
                { step: 6, title: 'Ready for Pickup', completed: true, date: '2024-01-17' }
            ]
        },
        'ORD012': {
            id: 'ORD012',
            service: 'Data Recovery',
            device: 'WD External HDD 1TB',
            status: 'In Progress',
            currentStep: 3,
            estimatedCompletion: '2024-01-25',
            cost: '৳6,800',
            technician: 'Farhan Kabir',
            createdAt: '2024-01-19',
            steps: [
                { step: 1, title: 'Order Received', completed: true, date: '2024-01-19' },
                { step: 2, title: 'Diagnosis Complete', completed: true, date: '2024-01-20' },
                { step: 3, title: 'Parts Ordered', completed: true, date: '2024-01-21' },
                { step: 4, title: 'Repair in Progress', completed: false, date: null },
                { step: 5, title: 'Quality Check', completed: false, date: null },
                { step: 6, title: 'Ready for Pickup', completed: false, date: null }
            ]
        }
    };

    const handleSearch = () => {
        if (!orderId.trim()) {
            setError('Please enter an Order ID');
            return;
        }

        setIsLoading(true);
        setError('');

        // Simulate API call delay
        setTimeout(() => {
            const order = mockOrders[orderId.toUpperCase()];
            if (order) {
                setOrderData(order);
                setError('');
            } else {
                setOrderData(null);
                setError('Order not found. Please check your Order ID.');
            }
            setIsLoading(false);
        }, 1000);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Order Received': return 'text-blue-600';
            case 'In Progress': return 'text-yellow-600';
            case 'Ready for Pickup': return 'text-green-600';
            case 'Completed': return 'text-green-700';
            default: return 'text-base-content';
        }
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Order Received': return 'badge-info';
            case 'In Progress': return 'badge-warning';
            case 'Ready for Pickup': return 'badge-success';
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
                                placeholder="Enter Order ID (e.g., ORD001)"
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
                                    <p className="text-sm text-base-content/60">Est. Completion: {orderData.estimatedCompletion}</p>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="stat">
                                    <div className="stat-title">Service Cost</div>
                                    <div className="stat-value text-primary">{orderData.cost}</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Technician</div>
                                    <div className="stat-value text-lg">{orderData.technician}</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Order Date</div>
                                    <div className="stat-value text-lg">{orderData.createdAt}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Tracker */}
                    <div className="card bg-base-100 shadow-xl mb-8">
                        <div className="card-body">
                            <h3 className="text-xl font-bold text-base-content mb-6">Repair Progress</h3>
                            
                            <div className="space-y-4">
                                {orderData.steps.map((step, index) => (
                                    <div key={step.step} className="flex items-center">
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                            step.completed 
                                                ? 'bg-success text-success-content' 
                                                : step.step === orderData.currentStep 
                                                    ? 'bg-warning text-warning-content'
                                                    : 'bg-base-300 text-base-content/50'
                                        }`}>
                                            {step.completed ? '✓' : step.step}
                                        </div>
                                        
                                        <div className="ml-4 flex-1">
                                            <div className={`font-medium ${
                                                step.completed 
                                                    ? 'text-success' 
                                                    : step.step === orderData.currentStep 
                                                        ? 'text-warning'
                                                        : 'text-base-content/50'
                                            }`}>
                                                {step.title}
                                            </div>
                                            {step.date && (
                                                <div className="text-sm text-base-content/60">
                                                    Completed on {step.date}
                                                </div>
                                            )}
                                        </div>
                                        
                                        {step.completed && (
                                            <div className="text-success">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {orderData.status === 'Ready for Pickup' && (
                            <button className="btn btn-success btn-lg px-8">
                                📞 Call for Pickup
                            </button>
                        )}
                        <button 
                            onClick={() => navigate('/booking')}
                            className="btn btn-primary btn-lg px-8"
                        >
                            📱 Book Another Repair
                        </button>
                        <button className="btn btn-outline btn-lg px-8">
                            💬 Contact Support
                        </button>
                    </div>
                </div>
            )}

            {/* Demo Order IDs Section */}
            {!orderData && !error && (
                <div className="container mx-auto px-4 py-12">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body text-center">
                            <h3 className="text-2xl font-bold text-base-content mb-4">Demo Order IDs</h3>
                            <p className="text-base-content/70 mb-6">Try these sample Order IDs to see the tracking system in action:</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="card bg-base-200 shadow">
                                    <div className="card-body items-center text-center py-4">
                                        <h4 className="font-bold">ORD001</h4>
                                        <p className="text-sm text-base-content/70">Mobile Screen Repair</p>
                                        <div className="badge badge-warning">In Progress</div>
                                    </div>
                                </div>
                                <div className="card bg-base-200 shadow">
                                    <div className="card-body items-center text-center py-4">
                                        <h4 className="font-bold">ORD002</h4>
                                        <p className="text-sm text-base-content/70">Laptop Battery</p>
                                        <div className="badge badge-success">Ready</div>
                                    </div>
                                </div>
                                <div className="card bg-base-200 shadow">
                                    <div className="card-body items-center text-center py-4">
                                        <h4 className="font-bold">ORD003</h4>
                                        <p className="text-sm text-base-content/70">Mouse Repair</p>
                                        <div className="badge badge-info">Received</div>
                                    </div>
                                </div>
                            </div>
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
                            <p className="text-base-content/70">support@esolution.com</p>
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