import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// ==========Mobile Picture===========
import screen from '../../../src/assets/mobile/screen.jpg'
import battery from '../../../src/assets/mobile/battery.jpg'
import mport from '../../../src/assets/mobile/mport.jpg'
import speaker from '../../../src/assets/mobile/speaker.jpg'
import motherb from '../../../src/assets/mobile/motherb.jpg'
import camera from '../../../src/assets/mobile/camera.jpg'
import repair from '../../../src/assets/mobile/repair.jpg'

// ============Laptop Picture==========
import Lscreen from '../../../src/assets/laptop/Lscreen.jpg'
import Lkeyboard from '../../../src/assets/laptop/Lkeybord.jpg'
import Lbattery from '../../../src/assets/laptop/Lbattery.jpg'
import mBoard from '../../../src/assets/laptop/mBoard.jpg'
import ram from '../../../src/assets/laptop/ram.jpg'
import ssd from '../../../src/assets/laptop/ssd.jpg'
import fan from '../../../src/assets/laptop/fan.jpg'
import os from '../../../src/assets/laptop/os.jpeg'

// ===========Mouse & Keyboard Service============
import sensor from '../../../src/assets/k_mouse/sensor.jpg'
import button from '../../../src/assets/k_mouse/button.jpg'
import wireless from '../../../src/assets/k_mouse/wireless.jpg'
import clean from '../../../src/assets/k_mouse/clean.jpg'
// import button from '../../../src/assets/k_mouse/button.jpg'
import usb from '../../../src/assets/k_mouse/usb.jpg'
import wheel from '../../../src/assets/k_mouse/wheel.jpeg'
import rgb from '../../../src/assets/k_mouse/rgb.jpg'


const serviceCategories = [
    {
        category: "Mobile Service",
        services: [
            { name: "Screen Replacement", image: `${screen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M8 18h8" /></svg>, desc: "Replace broken or cracked mobile screens." },
            { name: "Battery Replacement", image: `${battery}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="7" width="12" height="10" rx="2" /><path d="M22 11v2" /></svg>, desc: "Install new batteries for longer life." },
            { name: "Charging Port Repair", image: `${mport}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M12 18v-2" /></svg>, desc: "Fix charging issues and ports." },
            { name: "Camera Repair", image: `${camera}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="3" /><rect x="2" y="7" width="20" height="14" rx="2" /></svg>, desc: "Repair or replace mobile cameras." },
            { name: "Speaker/Mic Repair", image: `${speaker}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 18h8" /></svg>, desc: "Fix sound and microphone issues." },
            { name: "Software Update", image: `${motherb}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v4m0 0l-2-2m2 2l2-2" /><circle cx="12" cy="12" r="10" /></svg>, desc: "Update and optimize mobile software." },
            { name: "Water Damage Repair", image: `${repair}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C12 2 7 8 7 12a5 5 0 0010 0c0-4-5-10-5-10z" /></svg>, desc: "Restore mobiles from water damage." },
            { name: "Data Recovery", image: `${mport}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h8" /></svg>, desc: "Recover lost data from devices." },
        ]
    },
    {
        category: "Laptop Service",
        services: [
            { name: "Screen Replacement", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="5" width="20" height="14" rx="2" /></svg>, desc: "Replace broken or damaged laptop screens." },
            { name: "Keyboard Repair", image: `${Lkeyboard}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Fix or replace faulty keyboards." },
            { name: "Battery Replacement", image: `${Lbattery}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="7" width="12" height="10" rx="2" /><path d="M22 11v2" /></svg>, desc: "Install new laptop batteries." },
            { name: "Motherboard Repair", image: `${mBoard}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /></svg>, desc: "Diagnose and repair motherboard issues." },
            { name: "RAM Upgrade", image: `${ram}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Upgrade laptop memory for better performance." },
            { name: "SSD/HDD Replacement", image: `${ssd}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Replace or upgrade storage drives." },
            { name: "Cooling Fan Repair", image: `${fan}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="8" /><path d="M12 4v8l6 2" /></svg>, desc: "Fix overheating and fan issues." },
            { name: "OS Installation", image: `${os}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h8" /></svg>, desc: "Install or upgrade operating systems." },
        ]
    },
    {
        category: "Mouse & Keyboard Service",
        services: [
            { name: "Mouse Sensor Repair", image: `${sensor}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="8" /></svg>, desc: "Fix mouse sensor and tracking issues." },
            { name: "Button Replacement", image: `${button}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="8" y="8" width="8" height="8" rx="2" /></svg>, desc: "Replace faulty mouse or keyboard buttons." },
            { name: "Wireless Connectivity", image: `${wireless}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M2 12a10 10 0 0120 0" /></svg>, desc: "Fix wireless connection problems." },
            { name: "Keyboard Cleaning", image: `${clean}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Deep clean for keyboards." },
            { name: "Key Replacement", image: `${button}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="8" y="8" width="8" height="8" rx="2" /></svg>, desc: "Replace missing or broken keys." },
            { name: "USB Port Repair", image: `${usb}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Repair USB connectivity issues." },
            { name: "Firmware Update", image: `${wheel}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v4m0 0l-2-2m2 2l2-2" /><circle cx="12" cy="12" r="10" /></svg>, desc: "Update device firmware for better performance." },
            { name: "RGB Lighting Repair", image: `${rgb}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="8" /></svg>, desc: "Fix RGB lighting issues in devices." },
        ]
    },
    {
        category: "Others Service",
        services: [
            { name: "Printer Repair", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="18" height="14" x="3" y="7" rx="2" /><path d="M7 7V3h10v4" /></svg>, desc: "Repair and maintenance for all printers." },
            { name: "Scanner Repair", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Fix scanner hardware and software issues." },
            { name: "Projector Service", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="8" /></svg>, desc: "Projector cleaning and lamp replacement." },
            { name: "Speaker Repair", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Fix speaker sound and connectivity issues." },
            { name: "CCTV Installation", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="8" /></svg>, desc: "Install and configure CCTV systems." },
            { name: "Networking", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M2 12a10 10 0 0120 0" /></svg>, desc: "Network setup and troubleshooting." },
            { name: "Accessories", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></svg>, desc: "Chargers, cables, and other accessories." },
            { name: "Data Backup", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h8" /></svg>, desc: "Backup important data securely." },
        ]
    },
];

const tabList = serviceCategories.map((cat) => cat.category);
const Services = () => {
    const [activeTab, setActiveTab] = useState(tabList[0]);
    const activeCategory = serviceCategories.find(cat => cat.category === activeTab);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const hashCategory = location.hash.replace('#', '').replace(/-/g, ' ');
            const found = serviceCategories.find(cat => cat.category.toLowerCase() === hashCategory.replace(/\s+/g, ' ').toLowerCase());
            if (found) setActiveTab(found.category);
        }
    }, [location.hash]);

    const handleSeeMore = (category) => {
        // Map service categories to their corresponding individual pages
        const categoryRoutes = {
            'Mobile Service': '/services/mobile',
            'Laptop Service': '/services/laptop',
            'Mouse & Keyboard Service': '/services/mouse-keyboard',
            'Others Service': '/services/others'
        };
        
        // Navigate to corresponding individual service page
        const route = categoryRoutes[category];
        if (route) {
            navigate(route);
        } else {
            // Fallback to services page with hash if no specific route found
            navigate(`/services#${category.replace(/\s+/g, '-').toLowerCase()}`);
            setTimeout(() => {
                const el = document.getElementById(category.replace(/\s+/g, '-').toLowerCase());
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <section className="py-12 bg-base-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-primary mb-2">Our Services</h2>
                    <p className="text-base-content text-lg">We offer a wide range of repair services for all your devices</p>
                </div>
                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {tabList.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-t-lg font-semibold border-b-2 transition-colors duration-200 focus:outline-none ${activeTab === tab
                                ? 'bg-primary text-white border-primary'
                                : 'bg-base-200 text-base-content border-transparent hover:bg-primary/10'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                {/* Active Tab Content */}
                <div id={activeCategory.category.replace(/\s+/g, '-').toLowerCase()}>
                    <h3 className="text-2xl font-bold text-secondary mb-8 text-left">{activeCategory.category}</h3>
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                        {activeCategory.services.map((service, idx) => (
                            <div key={idx} className="card bg-base-200 shadow-xl hover:scale-105 transition-transform duration-300">
                                <div className="card-body items-center text-center">
                                    <img src={service.image} alt={service.name + ' image'} className="rounded-xl mb-3 w-[300px] h-[200px] object-cover" />
                                    {/* <div className="mb-4">{service.icon}</div> */}
                                    <h4 className="card-title text-lg font-semibold mb-2">{service.name}</h4>
                                    <p className="text-base-content text-sm">{service.desc}</p>
                                    <div className="mt-3">
                                        <button className="btn btn-outline btn-primary">Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-12">
                        <button className="btn btn-outline btn-secondary" onClick={() => handleSeeMore(activeCategory.category)}>See More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;