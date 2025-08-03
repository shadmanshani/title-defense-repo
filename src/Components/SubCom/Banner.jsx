import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../../src/assets/Banner/banner-1504653.png';

// Service data for recommendations
const serviceCategories = [
    {
        category: "Mobile Service",
        services: [
            { name: "Screen Replacement" },
            { name: "Battery Replacement" },
            { name: "Charging Port Repair" },
            { name: "Camera Repair" },
            { name: "Speaker/Mic Repair" },
            { name: "Software Update" },
            { name: "Water Damage Repair" },
            { name: "Data Recovery" },
        ]
    },
    {
        category: "Laptop Service",
        services: [
            { name: "Screen Replacement" },
            { name: "Keyboard Repair" },
            { name: "Battery Replacement" },
            { name: "Motherboard Repair" },
            { name: "RAM Upgrade" },
            { name: "SSD/HDD Replacement" },
            { name: "Cooling Fan Repair" },
            { name: "OS Installation" },
        ]
    },
    {
        category: "Mouse & Keyboard Service",
        services: [
            { name: "Mouse Sensor Repair" },
            { name: "Button Replacement" },
            { name: "Wireless Connectivity" },
            { name: "Keyboard Cleaning" },
            { name: "Key Replacement" },
            { name: "USB Port Repair" },
            { name: "Firmware Update" },
            { name: "RGB Lighting Repair" },
        ]
    },
    {
        category: "Others Service",
        services: [
            { name: "Printer Repair" },
            { name: "Scanner Repair" },
            { name: "Projector Service" },
            { name: "Speaker Repair" },
            { name: "CCTV Installation" },
            { name: "Networking" },
            { name: "Accessories" },
            { name: "Data Backup" },
        ]
    },
];

// Replace flatMap with map + flat
const allServiceNames = serviceCategories.map(cat => cat.services.map(s => s.name)).flat();

const Banner = () => {
    const [search, setSearch] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();

    const filteredSuggestions = search.trim()
        ? allServiceNames.filter(name => name.toLowerCase().includes(search.trim().toLowerCase()))
        : [];

    const getCategoryByService = (serviceName) => {
        for (const cat of serviceCategories) {
            if (cat.services.some(s => s.name === serviceName)) {
                return cat.category;
            }
        }
        return null;
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (!search.trim()) {
            // Do nothing if search is empty
            return;
        }
        let category = getCategoryByService(search.trim());
        if (category) {
            navigate(`/services?search=${encodeURIComponent(search.trim())}#${category.replace(/\s+/g, '-').toLowerCase()}`);
        } else {
            navigate(`/services?search=${encodeURIComponent(search.trim())}`);
        }
        setShowSuggestions(false);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearch(suggestion);
        setShowSuggestions(false);
        let category = getCategoryByService(suggestion);
        if (category) {
            navigate(`/services?search=${encodeURIComponent(suggestion)}#${category.replace(/\s+/g, '-').toLowerCase()}`);
        } else {
            navigate(`/services?search=${encodeURIComponent(suggestion)}`);
        }
    };

    return (
        <div
            className="hero min-h-[550px] pb-10 md:min-h-[600px] lg:min-h-[650px]"
            style={{
                backgroundImage: `url(${banner})`,
            }}>
            <div className="hero-overlay bg-black bg-opacity-60 h-full"></div>
            <div className="hero-content text-neutral-content text-center flex flex-col items-center w-full pt-16 md:pt-0">
                <div className="w-full max-w-3xl flex flex-col items-center">
                    <h1 className="text-4xl mb-4 lg:text-6xl font-bold text-blue-500 drop-shadow-lg">Fast & Reliable Device Repair</h1>
                    <p className="mb-5 text-lg lg:text-2xl text-base-200 font-medium drop-shadow text-white" >
                        We repair mobiles, laptops, mouse & keyboards, and more. Get expert service, genuine parts, and unbeatable prices—all in one place!
                    </p>
                    <form onSubmit={handleSearch} className='relative mt-6 border flex justify-between items-center max-w-[500px] w-full rounded-md bg-white bg-opacity-80 shadow-lg'>
                        <input
                            type="text"
                            value={search}
                            onChange={e => {
                                setSearch(e.target.value);
                                setShowSuggestions(true);
                            }}
                            onFocus={() => setShowSuggestions(true)}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                            placeholder="Search your device or service..."
                            className="w-full max-w-md bg-transparent p-4 text-base text-black focus:outline-none"
                            autoComplete="off"
                        />
                        <button type="submit" className="btn btn-primary mr-2 font-semibold">Search</button>
                        {/* Suggestions Dropdown */}
                        {showSuggestions && filteredSuggestions.length > 0 && (
                            <ul className="absolute left-0 top-full mt-1 w-full bg-white rounded shadow z-10 text-left max-h-48 overflow-auto">
                                {filteredSuggestions.map((suggestion, idx) => (
                                    <li
                                        key={idx}
                                        className="px-4 py-2 cursor-pointer hover:bg-primary/10 text-black"
                                        onMouseDown={() => handleSuggestionClick(suggestion)}
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </form>
                    {/* Offer/Discount Section */}
                    <div className="mt-8 w-full flex flex-col md:flex-row items-center justify-center gap-4">
                        <div className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg font-semibold text-lg animate-pulse">
                            20% OFF on First Repair!
                        </div>
                        <div className="bg-base-200 text-base-content px-6 py-3 rounded-lg shadow font-medium text-base">
                            Free Diagnosis for All Devices
                        </div>
                        <div className="bg-green-600 text-white px-6 py-3 rounded-lg shadow font-medium text-base">
                            Combo Offer: Repair 2 Devices, Get 1 Accessory Free!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;