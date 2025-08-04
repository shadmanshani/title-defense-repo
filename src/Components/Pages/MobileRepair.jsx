import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mobile Service Images
import screen from '../../../src/assets/mobile/screen.jpg'
import battery from '../../../src/assets/mobile/battery.jpg'
import mport from '../../../src/assets/mobile/mport.jpg'
import speaker from '../../../src/assets/mobile/speaker.jpg'
import motherb from '../../../src/assets/mobile/motherb.jpg'
import camera from '../../../src/assets/mobile/camera.jpg'
import repair from '../../../src/assets/mobile/repair.jpg'
// Using existing image for button
import button from '../../../src/assets/mobile/repair.jpg'

const MobileRepair = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const servicesPerPage = 8;

    const mobileServices = [
        { name: "Screen Replacement", image: `${screen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M8 18h8" /></svg>, desc: "Replace broken or cracked mobile screens.", price: "৳1,500 - ৳3,500" },
        { name: "Battery Replacement", image: `${battery}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="7" width="12" height="10" rx="2" /><path d="M22 11v2" /></svg>, desc: "Install new batteries for longer life.", price: "৳800 - ৳2,000" },
        { name: "Charging Port Repair", image: `${mport}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M12 18v-2" /></svg>, desc: "Fix charging issues and ports.", price: "৳500 - ৳1,200" },
        { name: "Camera Repair", image: `${camera}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="3" /><rect x="2" y="7" width="20" height="14" rx="2" /></svg>, desc: "Repair or replace mobile cameras.", price: "৳1,000 - ৳2,500" },
        { name: "Speaker/Mic Repair", image: `${speaker}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 18h8" /></svg>, desc: "Fix sound and microphone issues.", price: "৳600 - ৳1,500" },
        { name: "Software Update", image: `${motherb}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v4m0 0l-2-2m2 2l2-2" /><circle cx="12" cy="12" r="10" /></svg>, desc: "Update and optimize mobile software.", price: "৳300 - ৳800" },
        { name: "Water Damage Repair", image: `${repair}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C12 2 7 8 7 12a5 5 0 0010 0c0-4-5-10-5-10z" /></svg>, desc: "Restore mobiles from water damage.", price: "৳1,200 - ৳4,000" },
        { name: "Data Recovery", image: `${mport}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h8" /></svg>, desc: "Recover lost data from devices.", price: "৳500 - ৳2,000" },
        { name: "Screen Protector", image: `${screen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="2" width="16" height="20" rx="2" /></svg>, desc: "Install high-quality screen protectors.", price: "৳200 - ৳800" },
        { name: "Back Glass Repair", image: `${battery}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="2" width="16" height="20" rx="2" /></svg>, desc: "Replace cracked or damaged back glass.", price: "৳1,000 - ৳3,000" },
        { name: "Vibration Motor", image: `${mport}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2v4m0 0l-2-2m2 2l2-2" /><circle cx="12" cy="12" r="10" /></svg>, desc: "Fix or replace vibration motor.", price: "৳400 - ৳1,200" },
        { name: "Proximity Sensor", image: `${camera}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4m9-9h-4M3 12h4" /></svg>, desc: "Repair or replace proximity sensor.", price: "৳300 - ৳900" },
        { name: "Power Button", image: `${button}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /></svg>, desc: "Fix unresponsive power buttons.", price: "৳500 - ৳1,500" },
        { name: "Volume Buttons", image: `${button}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M19 12a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>, desc: "Repair or replace volume buttons.", price: "৳400 - ৳1,200" },
        { name: "Earpiece Speaker", image: `${speaker}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2v4m0 0l-2-2m2 2l2-2" /><circle cx="12" cy="12" r="10" /></svg>, desc: "Fix or replace earpiece speaker.", price: "৳300 - ৳1,000" },
    ];

    const handleBookNow = (serviceName) => {
        navigate('/booking', { state: { service: serviceName, category: 'Mobile Repair' } });
    };

    const handleGetDiagnosis = () => {
        navigate('/diagnosis', { state: { category: 'Mobile Repair' } });
    };

    // Pagination logic
    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = mobileServices.slice(indexOfFirstService, indexOfLastService);
    const totalPages = Math.ceil(mobileServices.length / servicesPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="min-h-screen bg-base-200">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white pt-24 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Mobile Repair Services</h1>
                    <p className="text-xl mb-8">Fast and reliable repair services for all mobile devices</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={handleGetDiagnosis}
                            className="btn btn-warning btn-lg px-8"
                        >
                            📱 Test Device
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
                    <h2 className="text-3xl font-bold text-base-content mb-4">Our Mobile Services</h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        We provide comprehensive repair services for all major mobile brands and models.
                        Our expert technicians use high-quality parts and tools to ensure the best results.
                    </p>
                </div>

                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
                    {currentServices.map((service, index) => (
                        <div key={index} className="card bg-base-200 shadow-xl hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
                            <div className="card-body p-3 sm:p-4 text-center flex flex-col h-full">
                                <div className="flex-shrink-0">
                                    <img 
                                        src={service.image} 
                                        alt={service.name}
                                        className="w-full h-24 sm:h-28 object-cover rounded-lg mb-2"
                                    />
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-primary/10 mx-auto mb-2">
                                        <div className="w-6 h-6 sm:w-8 sm:h-8">
                                            {React.cloneElement(service.icon, { className: 'w-full h-full' })}
                                        </div>
                                    </div>
                                </div>
                                <h4 className="card-title text-sm sm:text-base font-medium line-clamp-2 h-10 sm:h-12 flex items-center justify-center">
                                    {service.name}
                                </h4>
                                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 h-10 sm:h-12 mb-1 sm:mb-2">
                                    {service.desc}
                                </p>
                                <div className="flex justify-between items-center mt-auto mb-2 w-full">
                                    <span className="text-sm sm:text-base font-semibold text-green-600">{service.price}</span>
                                    <span className="text-xs sm:text-sm text-gray-500">⏱️ 1-2h</span>
                                </div>
                                
                                <div className="flex gap-2 w-full mt-2">
                                    <button 
                                        onClick={() => handleBookNow(service.name)}
                                        className="btn btn-primary btn-sm flex-1 text-xs sm:text-sm h-8 min-h-8"
                                    >
                                        Book Now
                                    </button>
                                    <button 
                                        onClick={handleGetDiagnosis}
                                        className="btn btn-outline btn-sm text-xs sm:text-sm h-8 min-h-8"
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

            {/* Why Choose Us Section */}
            <div className="bg-base-100 py-16 rounded-lg mx-4">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-base-content mb-12">Why Choose Our Mobile Repair?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-base-content">Genuine Parts</h3>
                            <p className="text-base-content/70">We use only original and high-quality replacement parts</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-base-content">Quick Service</h3>
                            <p className="text-base-content/70">Most repairs completed within 1-2 hours</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-base-content">6 Month Warranty</h3>
                            <p className="text-base-content/70">All repairs come with comprehensive warranty</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileRepair;