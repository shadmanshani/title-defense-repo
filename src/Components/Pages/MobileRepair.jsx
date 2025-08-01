import React from 'react';
import { useNavigate } from 'react-router-dom';

// Mobile Service Images
import screen from '../../../src/assets/mobile/screen.jpg'
import battery from '../../../src/assets/mobile/battery.jpg'
import mport from '../../../src/assets/mobile/mport.jpg'
import speaker from '../../../src/assets/mobile/speaker.jpg'
import motherb from '../../../src/assets/mobile/motherb.jpg'
import camera from '../../../src/assets/mobile/camera.jpg'
import repair from '../../../src/assets/mobile/repair.jpg'

const MobileRepair = () => {
    const navigate = useNavigate();

    const mobileServices = [
        { name: "Screen Replacement", image: `${screen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M8 18h8" /></svg>, desc: "Replace broken or cracked mobile screens.", price: "৳1,500 - ৳3,500" },
        { name: "Battery Replacement", image: `${battery}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="7" width="12" height="10" rx="2" /><path d="M22 11v2" /></svg>, desc: "Install new batteries for longer life.", price: "৳800 - ৳2,000" },
        { name: "Charging Port Repair", image: `${mport}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M12 18v-2" /></svg>, desc: "Fix charging issues and ports.", price: "৳500 - ৳1,200" },
        { name: "Camera Repair", image: `${camera}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="3" /><rect x="2" y="7" width="20" height="14" rx="2" /></svg>, desc: "Repair or replace mobile cameras.", price: "৳1,000 - ৳2,500" },
        { name: "Speaker/Mic Repair", image: `${speaker}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 18h8" /></svg>, desc: "Fix sound and microphone issues.", price: "৳600 - ৳1,500" },
        { name: "Software Update", image: `${motherb}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v4m0 0l-2-2m2 2l2-2" /><circle cx="12" cy="12" r="10" /></svg>, desc: "Update and optimize mobile software.", price: "৳300 - ৳800" },
        { name: "Water Damage Repair", image: `${repair}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C12 2 7 8 7 12a5 5 0 0010 0c0-4-5-10-5-10z" /></svg>, desc: "Restore mobiles from water damage.", price: "৳1,200 - ৳4,000" },
        { name: "Data Recovery", image: `${mport}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h8" /></svg>, desc: "Recover lost data from devices.", price: "৳500 - ৳2,000" },
    ];

    const handleBookNow = (serviceName) => {
        navigate('/booking', { state: { service: serviceName, category: 'Mobile Repair' } });
    };

    const handleGetDiagnosis = () => {
        navigate('/diagnosis', { state: { category: 'Mobile Repair' } });
    };

    return (
        <div className="min-h-screen bg-base-200">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-24 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Mobile Repair Services</h1>
                    <p className="text-xl mb-8">Professional mobile repair with genuine parts and warranty</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={handleGetDiagnosis}
                            className="btn btn-warning btn-lg px-8"
                        >
                            📸 Get Free Diagnosis
                        </button>
                        <button 
                            onClick={() => navigate('/booking')}
                            className="btn btn-success btn-lg px-8"
                        >
                            📞 Emergency Repair
                        </button>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-base-content mb-4">Our Mobile Repair Services</h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        We provide comprehensive mobile repair services with experienced technicians, 
                        genuine parts, and quick turnaround time.
                    </p>
                </div>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {mobileServices.map((service, index) => (
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
                                    <span className="text-sm text-base-content/60">⏱️ 1-2 hours</span>
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