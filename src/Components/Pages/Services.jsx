import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

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
            { name: "Screen Replacement", image: `${screen}`, priceRange: "$50 - $200", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M8 18h8" /></svg>, desc: "Replace broken or cracked mobile screens." },
            { name: "Battery Replacement", image: `${battery}`, priceRange: "$30 - $100", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="7" width="12" height="10" rx="2" /><path d="M22 11v2" /></svg>, desc: "Install new batteries for longer life." },
            { name: "Charging Port Repair", image: `${mport}`, priceRange: "$40 - $80", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M12 18v-2" /></svg>, desc: "Fix charging issues and ports." },
            { name: "Camera Repair", image: `${camera}`, priceRange: "$60 - $150", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="3" /><rect x="2" y="7" width="20" height="14" rx="2" /></svg>, desc: "Repair or replace mobile cameras." },
            { name: "Speaker/Mic Repair", image: `${speaker}`, priceRange: "$30 - $80", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 18h8" /></svg>, desc: "Fix sound and microphone issues." },
            { name: "Software Update", image: `${motherb}`, priceRange: "$20 - $50", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v4m0 0l-2-2m2 2l2-2" /><circle cx="12" cy="12" r="10" /></svg>, desc: "Update and optimize mobile software." },
            { name: "Water Damage Repair", image: `${repair}`, priceRange: "$80 - $200", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C12 2 7 8 7 12a5 5 0 0010 0c0-4-5-10-5-10z" /></svg>, desc: "Restore mobiles from water damage." },
            { name: "Data Recovery", image: `${mport}`, priceRange: "$100 - $300", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h8" /></svg>, desc: "Recover lost data from devices." },
            { name: "Screen Protector", image: `${screen}`, priceRange: "$10 - $30", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="16" height="20" x="4" y="2" rx="2" /></svg>, desc: "High-quality screen protector installation." },
            { name: "Back Glass Repair", image: `${battery}`, priceRange: "$60 - $120", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="7" width="12" height="10" rx="2" /></svg>, desc: "Fix or replace cracked back glass." },
            { name: "Vibration Motor", image: `${mport}`, priceRange: "$25 - $60", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C12 2 7 8 7 12a5 5 0 0010 0c0-4-5-10-5-10z" /></svg>, desc: "Replace faulty vibration motors." },
            { name: "Proximity Sensor", image: `${camera}`, priceRange: "$30 - $70", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="3" /></svg>, desc: "Fix sensor issues during calls." },
            { name: "Power Button", image: `${speaker}`, priceRange: "$20 - $50", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /></svg>, desc: "Repair or replace power buttons." },
            { name: "Volume Buttons", image: `${motherb}`, priceRange: "$20 - $50", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v4m0 0l-2-2m2 2l2-2" /></svg>, desc: "Fix unresponsive volume controls." },
            { name: "Earpiece Speaker", image: `${repair}`, priceRange: "$30 - $70", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C12 2 7 8 7 12a5 5 0 0010 0c0-4-5-10-5-10z" /></svg>, desc: "Replace faulty earpiece speakers." },
        ]
    },
    {
        category: "Laptop Service",
        services: [
            { name: "Laptop Screen Replacement", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="5" width="20" height="14" rx="2" /></svg>, desc: "Replace broken or damaged laptop screens." },
            { name: "Keyboard Repair", image: `${Lkeyboard}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Fix or replace faulty keyboards." },
            { name: "Battery Replacement", image: `${Lbattery}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="7" width="12" height="10" rx="2" /><path d="M22 11v2" /></svg>, desc: "Install new laptop batteries." },
            { name: "Motherboard Repair", image: `${mBoard}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /></svg>, desc: "Diagnose and repair motherboard issues." },
            { name: "RAM Upgrade", image: `${ram}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Upgrade laptop memory for better performance." },
            { name: "SSD/HDD Replacement", image: `${ssd}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Replace or upgrade storage drives." },
            { name: "Cooling Fan Repair", image: `${fan}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="8" /><path d="M12 4v8l6 2" /></svg>, desc: "Fix overheating and fan issues." },
            { name: "OS Installation", image: `${os}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h8" /></svg>, desc: "Install or upgrade operating systems." },
            { name: "Liquid Spill Repair", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C12 2 7 8 7 12a5 5 0 0010 0c0-4-5-10-5-10z" /></svg>, desc: "Repair laptops damaged by liquid spills." },
            { name: "DC Jack Replacement", image: `${Lkeyboard}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2v20m0 0l-4-4m4 4l4-4" /></svg>, desc: "Fix charging port and power issues." },
            { name: "Webcam Repair", image: `${camera}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="3" /><rect x="2" y="7" width="20" height="14" rx="2" /></svg>, desc: "Fix or replace built-in webcams." },
            { name: "WiFi/Bluetooth Module", image: `${wireless}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M2 12a10 10 0 0120 0" /></svg>, desc: "Repair wireless connectivity issues." },
            { name: "Hinge Repair", image: `${Lbattery}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 12h16M4 8h16M4 16h16" /></svg>, desc: "Fix or replace broken laptop hinges." },
            { name: "BIOS Update", image: `${mBoard}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v4m0 0l-2-2m2 2l2-2" /><circle cx="12" cy="12" r="10" /></svg>, desc: "Update system BIOS for better compatibility." },
            { name: "Thermal Paste", image: `${fan}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C12 2 7 8 7 12a5 5 0 0010 0c0-4-5-10-5-10z" /></svg>, desc: "Apply new thermal paste for better cooling." },
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
            { name: "Mouse Wheel Repair", image: `${wheel}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /></svg>, desc: "Fix scrolling issues with mouse wheels." },
            { name: "Switch Replacement", image: `${button}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16" /></svg>, desc: "Replace mechanical keyboard switches." },
            { name: "Cable Replacement", image: `${usb}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M8 7h12M8 12h12M8 17h12" /></svg>, desc: "Replace damaged USB or charging cables." },
            { name: "Keycap Replacement", image: `${button}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="8" y="8" width="8" height="8" rx="2" /></svg>, desc: "Replace worn or damaged keycaps." },
            { name: "Mouse Feet Replacement", image: `${sensor}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /></svg>, desc: "Replace worn-out mouse feet for smoother gliding." },
            { name: "Macro Key Programming", image: `${Lkeyboard}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15l-3-3m0 0l3-3m-3 3h6m-6 4h6m6-10v16a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>, desc: "Program custom macros for gaming keyboards." },
            { name: "Switch Lubrication", image: `${fan}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C12 2 7 8 7 12a5 5 0 0010 0c0-4-5-10-5-10z" /></svg>, desc: "Lubricate mechanical switches for smoother typing." },
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
            { name: "Smart Home Setup", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>, desc: "Install and configure smart home devices." },
            { name: "Gaming Console Repair", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /></svg>, desc: "Fix hardware and software issues on gaming consoles." },
            { name: "Tablet Repair", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="2" width="16" height="20" rx="2" /></svg>, desc: "Screen replacement and other tablet repairs." },
            { name: "Data Recovery", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, desc: "Recover lost or deleted files from any device." },
            { name: "Software Installation", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, desc: "Install and configure software applications." },
            { name: "Virus Removal", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, desc: "Remove malware and viruses from your devices." },
            { name: "Hardware Upgrade", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, desc: "Upgrade components for better performance." },
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
                    <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {activeCategory.services.map((service, idx) => (
                            <div key={idx} className="card bg-base-200 shadow-xl hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
                                <div className="card-body p-3 sm:p-4 text-center flex flex-col h-full">
                                    <div className="flex-shrink-0">
                                        <img 
                                            src={service.image} 
                                            alt={service.name} 
                                            className="w-full h-32 sm:h-36 object-cover rounded-lg mb-2"
                                        />
                                        {service.icon && (
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-primary/10 mx-auto mb-2">
                                                {React.cloneElement(service.icon, { 
                                                    className: 'w-6 h-6 sm:w-7 sm:h-7 text-primary' 
                                                })}
                                            </div>
                                        )}
                                    </div>
                                    <h4 className="card-title text-sm sm:text-base font-medium line-clamp-2 h-10 sm:h-12 flex items-center justify-center">
                                        {service.name}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 h-10 sm:h-12 mb-2">
                                        {service.desc}
                                    </p>
                                    {service.priceRange && (
                                        <p className="text-xs sm:text-sm font-semibold text-green-600 mb-2">
                                            {service.priceRange}
                                        </p>
                                    )}
                                    <div className="mt-auto">
                                        <Link 
                                            to="/details" 
                                            state={{ 
                                                service: {
                                                    name: service.name,
                                                    image: service.image,
                                                    desc: service.desc,
                                                    priceRange: service.priceRange
                                                } 
                                            }}
                                            className="btn btn-sm btn-primary w-full text-xs sm:text-sm h-8 min-h-8"
                                            onClick={(e) => {
                                                // Create a simplified version of the service object
                                                const simpleService = {
                                                    name: service.name,
                                                    image: service.image,
                                                    desc: service.desc
                                                    // Add other simple properties you need
                                                };
                                                // Store in session storage as fallback
                                                sessionStorage.setItem('selectedService', JSON.stringify(simpleService));
                                            }}
                                        >
                                            Details
                                        </Link>
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