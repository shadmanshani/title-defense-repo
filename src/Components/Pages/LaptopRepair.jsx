import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Laptop Service Images - Using only available images
import Lscreen from '../../../src/assets/laptop/Lscreen.jpg'
import Lkeyboard from '../../../src/assets/laptop/Lkeybord.jpg'
import Lbattery from '../../../src/assets/laptop/Lbattery.jpg'
import mBoard from '../../../src/assets/laptop/mBoard.jpg'
import ram from '../../../src/assets/laptop/ram.jpg'
import ssd from '../../../src/assets/laptop/ssd.jpg'
import fan from '../../../src/assets/laptop/fan.jpg'
import os from '../../../src/assets/laptop/os.jpeg'
// Using existing images for missing imports
import Lscreen2 from '../../../src/assets/laptop/Lscreen.jpg'  // For camera
import mBoard2 from '../../../src/assets/laptop/mBoard.jpg'    // For wireless
import Lbattery2 from '../../../src/assets/laptop/Lbattery.jpg' // For hinge
import ram2 from '../../../src/assets/laptop/ram.jpg'          // For motherb

const LaptopRepair = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const servicesPerPage = 8;

    const laptopServices = [
        { name: "Screen Replacement", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="5" width="20" height="14" rx="2" /></svg>, desc: "Replace broken or damaged laptop screens.", price: "৳3,500 - ৳8,000" },
        { name: "Keyboard Repair", image: `${Lkeyboard}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Fix or replace faulty keyboards.", price: "৳1,200 - ৳3,000" },
        { name: "Battery Replacement", image: `${Lbattery}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="7" width="12" height="10" rx="2" /><path d="M22 11v2" /></svg>, desc: "Install new laptop batteries.", price: "৳2,500 - ৳6,000" },
        { name: "Motherboard Repair", image: `${mBoard}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /></svg>, desc: "Diagnose and repair motherboard issues.", price: "৳4,000 - ৳12,000" },
        { name: "RAM Upgrade", image: `${ram}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Upgrade laptop memory for better performance.", price: "৳2,000 - ৳8,000" },
        { name: "SSD/HDD Replacement", image: `${ssd}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Replace or upgrade storage drives.", price: "৳3,000 - ৳15,000" },
        { name: "Cooling Fan Repair", image: `${fan}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="8" /><path d="M12 4v8l6 2" /></svg>, desc: "Fix overheating and fan issues.", price: "৳800 - ৳2,500" },
        { name: "OS Installation", image: `${os}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v4m0 0l-2-2m2 2l2-2" /><circle cx="12" cy="12" r="10" /></svg>, desc: "Install or reinstall operating systems.", price: "৳500 - ৳1,500" },
        { name: "Liquid Spill Repair", image: `${Lbattery}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C12 2 7 8 7 12a5 5 0 0010 0c0-4-5-10-5-10z" /></svg>, desc: "Repair liquid-damaged laptops.", price: "৳2,000 - ৳5,000" },
        { name: "DC Jack Replacement", image: `${mBoard}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M12 18v-2" /></svg>, desc: "Fix charging port and connector issues.", price: "৳1,500 - ৳3,500" },
        { name: "Webcam Repair", image: `${Lscreen2}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="10" r="3.5" /><path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" /></svg>, desc: "Fix or replace faulty webcams.", price: "৳1,500 - ৳4,000" },
        { name: "Wireless Card Replacement", image: `${mBoard2}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M2 12a10 10 0 0120 0" /></svg>, desc: "Replace or upgrade WiFi/Bluetooth cards.", price: "৳2,000 - ৳5,000" },
        { name: "Hinge Repair", image: `${Lbattery2}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16" /></svg>, desc: "Fix broken or loose laptop hinges.", price: "৳1,500 - ৳4,000" },
        { name: "Motherboard Replacement", image: `${ram2}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /></svg>, desc: "Replace faulty motherboards.", price: "৳5,000 - ৳15,000" },
        { name: "Thermal Paste", image: `${fan}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C12 2 7 8 7 12a5 5 0 0010 0c0-4-5-10-5-10z" /></svg>, desc: "Apply new thermal paste for better cooling.", price: "৳500 - ৳1,500" },
    ];

    const handleBookNow = (serviceName) => {
        navigate('/booking', { state: { service: serviceName, category: 'Laptop Repair' } });
    };

    const handleGetDiagnosis = () => {
        navigate('/diagnosis', { state: { category: 'Laptop Repair' } });
    };

    // Pagination logic
    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = laptopServices.slice(indexOfFirstService, indexOfLastService);
    const totalPages = Math.ceil(laptopServices.length / servicesPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="min-h-screen bg-base-200">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white pt-24 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Laptop Repair Services</h1>
                    <p className="text-xl mb-8">Expert laptop repairs with warranty</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={handleGetDiagnosis}
                            className="btn btn-warning btn-lg px-8"
                        >
                            🔍 Get Free Diagnosis
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
                    <h2 className="text-3xl font-bold text-base-content mb-4">Our Laptop Services</h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        Professional laptop repair services for all major brands. Our certified technicians 
                        provide reliable solutions with quality parts and warranty.
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
                                    <span className="text-sm text-base-content/60">⏱️ 2-4 hours</span>
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
                                        Diagnose
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

            {/* Features Section */}
            <div className="bg-base-100 py-16 rounded-lg mx-4">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-base-content mb-12">Why Choose Our Laptop Service?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-base-content">Expert Diagnosis</h3>
                            <p className="text-base-content/70">Advanced diagnostic tools for accurate problem detection</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-base-content">Fair Pricing</h3>
                            <p className="text-base-content/70">Transparent pricing with no hidden charges</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-base-content">Fast Turnaround</h3>
                            <p className="text-base-content/70">Most repairs completed same day or next day</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-base-content">Data Safety</h3>
                            <p className="text-base-content/70">Your data privacy and security is our priority</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaptopRepair;