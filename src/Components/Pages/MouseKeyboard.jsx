import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mouse & Keyboard Service Images
import sensor from '../../../src/assets/k_mouse/sensor.jpg'
import button from '../../../src/assets/k_mouse/button.jpg'
import wireless from '../../../src/assets/k_mouse/wireless.jpg'
import clean from '../../../src/assets/k_mouse/clean.jpg'
import usb from '../../../src/assets/k_mouse/usb.jpg'
import wheel from '../../../src/assets/k_mouse/wheel.jpeg'
import rgb from '../../../src/assets/k_mouse/rgb.jpg'
// Using existing images from k_mouse directory
import keyboard from '../../../src/assets/k_mouse/button.jpg'

const MouseKeyboard = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const servicesPerPage = 8;

    const mouseKeyboardServices = [
        { name: "Mouse Sensor Repair", image: `${sensor}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="8" /></svg>, desc: "Fix mouse sensor and tracking issues.", price: "৳300 - ৳800" },
        { name: "Button Replacement", image: `${button}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="8" y="8" width="8" height="8" rx="2" /></svg>, desc: "Replace faulty mouse or keyboard buttons.", price: "৳200 - ৳600" },
        { name: "Wireless Connectivity", image: `${wireless}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M2 12a10 10 0 0120 0" /></svg>, desc: "Fix wireless connection problems.", price: "৳400 - ৳1000" },
        { name: "Keyboard Cleaning", image: `${clean}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Deep clean for keyboards.", price: "৳150 - ৳400" },
        { name: "Key Replacement", image: `${button}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="8" y="8" width="8" height="8" rx="2" /></svg>, desc: "Replace missing or broken keys.", price: "৳100 - ৳300" },
        { name: "USB Port Repair", image: `${usb}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Repair USB connectivity issues.", price: "৳250 - ৳700" },
        { name: "Firmware Update", image: `${wheel}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v4m0 0l-2-2m2 2l2-2" /><circle cx="12" cy="12" r="10" /></svg>, desc: "Update device firmware for better performance.", price: "৳200 - ৳500" },
        { name: "RGB Lighting Repair", image: `${rgb}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="8" /></svg>, desc: "Fix RGB lighting issues in devices.", price: "৳300 - ৳800" },
        { name: "Mouse Wheel Repair", image: `${wheel}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /></svg>, desc: "Fix scrolling issues with mouse wheels.", price: "৳250 - ৳700" },
        { name: "Switch Replacement", image: `${button}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16" /></svg>, desc: "Replace mechanical keyboard switches.", price: "৳800 - ৳2,000" },
        { name: "Cable Replacement", image: `${usb}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M8 7h12M8 12h12M8 17h12" /></svg>, desc: "Replace damaged USB or charging cables.", price: "৳300 - ৳800" },
        { name: "Keycap Replacement", image: `${button}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="8" y="8" width="8" height="8" rx="2" /></svg>, desc: "Replace worn or damaged keycaps.", price: "৳50 - ৳200" },
        { name: "Mouse Feet Replacement", image: `${sensor}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /></svg>, desc: "Replace worn-out mouse feet for smoother gliding.", price: "৳200 - ৳500" },
        { name: "Macro Key Programming", image: `${keyboard}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15l-3-3m0 0l3-3m-3 3h6m-6 4h6m6-10v16a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>, desc: "Program custom macros for gaming keyboards.", price: "৳300 - ৳800" },
        { name: "Switch Lubrication", image: `${keyboard}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C12 2 7 8 7 12a5 5 0 0010 0c0-4-5-10-5-10z" /></svg>, desc: "Lubricate mechanical switches for smoother typing.", price: "৳500 - ৳1,200" },
    ];

    const handleBookNow = (serviceName) => {
        navigate('/booking', { state: { service: serviceName, category: 'Mouse & Keyboard' } });
    };

    const handleGetDiagnosis = () => {
        navigate('/diagnosis', { state: { category: 'Mouse & Keyboard' } });
    };

    // Pagination logic
    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = mouseKeyboardServices.slice(indexOfFirstService, indexOfLastService);
    const totalPages = Math.ceil(mouseKeyboardServices.length / servicesPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="min-h-screen bg-base-200">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white pt-24 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Mouse & Keyboard Repair</h1>
                    <p className="text-xl mb-8">Professional repair services for all types of input devices</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={handleGetDiagnosis}
                            className="btn btn-warning btn-lg px-8"
                        >
                            🖱️ Test Device
                        </button>
                        <button 
                            onClick={() => navigate('/booking')}
                            className="btn btn-success btn-lg px-8"
                        >
                            ⚡ Quick Fix
                        </button>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-base-content mb-4">Mouse & Keyboard Services</h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        From mechanical keyboards to gaming mice, we repair all types of input devices 
                        with precision and care.
                    </p>
                </div>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {currentServices.map((service, index) => (
                        <div key={index} className="card bg-base-200 shadow-xl hover:scale-105 transition-transform duration-300">
                            <div className="card-body items-center text-center">
                                <img 
                                    src={service.image} 
                                    alt={service.name}
                                    className="rounded-xl mb-3 w-[300px] h-[200px] object-cover"
                                />
                                <h4 className="card-title text-lg font-semibold mb-2">{service.name}</h4>
                                <p className="text-base-content text-sm mb-3">{service.desc}</p>
                                <div className="flex justify-between items-center mb-4 w-full">
                                    <span className="text-lg font-bold text-green-600">{service.price}</span>
                                    <span className="text-sm text-base-content/60">⏱️ 30-60 min</span>
                                </div>
                                
                                <div className="flex gap-2 w-full">
                                    <button 
                                        onClick={() => handleBookNow(service.name)}
                                        className="btn btn-primary btn-sm flex-1"
                                    >
                                        Book Now
                                    </button>
                                    <button 
                                        onClick={handleGetDiagnosis}
                                        className="btn btn-outline btn-sm"
                                    >
                                        Test
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Pagination */}
                <div className="flex justify-center mt-8 space-x-2">
                    <button 
                        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-dark'}`}
                    >
                        Previous
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={`px-4 py-2 rounded ${currentPage === number ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        >
                            {number}
                        </button>
                    ))}
                    
                    <button 
                        onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-dark'}`}
                    >
                        Next
                    </button>
                </div>
                
                <div className="text-center mt-4 text-gray-600">
                    Page {currentPage} of {totalPages}
                </div>
            </div>

            {/* Specialties Section */}
            <div className="bg-base-100 py-16 rounded-lg mx-4">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-base-content mb-12">Our Specialties</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-base-content">Gaming Devices</h3>
                            <p className="text-base-content/70">Specialized in gaming mice and mechanical keyboards</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-base-content">Wireless Repair</h3>
                            <p className="text-base-content/70">Expert in wireless connectivity and pairing issues</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-base-content">Quick Service</h3>
                            <p className="text-base-content/70">Most repairs completed within 30-60 minutes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MouseKeyboard;