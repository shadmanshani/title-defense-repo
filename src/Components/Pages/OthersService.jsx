import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';

// Others Service Images (using laptop screen as placeholder for some)
import Lscreen from '../../../src/assets/laptop/Lscreen.jpg'

const OthersService = () => {
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = useState(1);
	const servicesPerPage = 8;

	const othersServices = [
		{ name: "Coffee Maker Repair", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="18" height="14" x="3" y="7" rx="2" /><path d="M7 7V3h10v4" /></svg>, desc: "Repair and maintenance for all printers.", price: "৳800 - ৳3,000" },
		{ name: "Blender Repair", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Fix scanner hardware and software issues.", price: "৳600 - ৳2,500" },
		{ name: "Microwave Repair", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="8" /></svg>, desc: "Projector cleaning and lamp replacement.", price: "৳1,500 - ৳5,000" },
		{ name: "Stove Repair", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg>, desc: "Fix speaker sound and connectivity issues.", price: "৳400 - ৳2,000" },
		{ name: "Vacuum Cleaner", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="8" /></svg>, desc: "Install and configure CCTV systems.", price: "৳2,000 - ৳10,000" },
		{ name: "Water Purifier", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M2 12a10 10 0 0120 0" /></svg>, desc: "Network setup and troubleshooting.", price: "৳500 - ৳3,000" },
		{ name: "Electric Fan", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80", icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></svg>, desc: "Chargers, cables, and other accessories.", price: "৳200 - ৳1,500" },
		{ name: "Washing Maching", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h8" /></svg>, desc: "Backup important data securely.", price: "৳300 - ৳1,000" },
		{ name: "Clothes Iron", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 7v10c0 1.1.9 2 2 2h12a2 2 0 002-2V7M4 7l4-4h8l4 4M4 7l4 4h8l4-4" /></svg>, desc: "Maintenance and repair for 3D printers.", price: "৳1,500 - ৳5,000" },
		{ name: "Electric Drill", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h.01M12 12h.01M16 12h.01M8 8h.01M16 8h.01" /></svg>, desc: "Fix hardware issues in gaming consoles.", price: "৳1,000 - ৳4,000" },
		{ name: "Rice Cooker", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>, desc: "Install and configure smart home devices.", price: "৳2,000 - ৳8,000" },
		{ name: "Drone Repair", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15l-3-3m0 0l3-3m-3 3h6" /></svg>, desc: "Repair and maintenance for consumer drones.", price: "৳1,500 - ৳6,000" },
		{ name: "VR Headset Repair", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" /><path d="M12 8v8m-4-4h8" /></svg>, desc: "Fix display and tracking issues in VR headsets.", price: "৳2,000 - ৳7,000" },
		{ name: "Smartwatch Repair", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M12 18v-4" /></svg>, desc: "Repair screens and batteries in smartwatches.", price: "৳1,000 - ৳5,000" },
		{ name: "Tablet Repair", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M12 18h.01" /></svg>, desc: "Fix screens, batteries, and charging ports in tablets.", price: "৳1,500 - ৳6,000" },
		{ name: "External Drive Recovery", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M8 3v4m0 0V3m0 4H4m4 0h4m-8 4h16m0 0v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8" /></svg>, desc: "Data recovery from damaged external drives.", price: "৳1,000 - ৳4,000" },
	];

	const handleBookNow = (serviceName) => {
		navigate('/booking', { state: { service: serviceName, category: 'Others Service' } });
	};

	const handleGetDiagnosis = () => {
		navigate('/diagnosis', { state: { category: 'Others Service' } });
	};

	// Pagination logic
	const indexOfLastService = currentPage * servicesPerPage;
	const indexOfFirstService = indexOfLastService - servicesPerPage;
	const currentServices = othersServices.slice(indexOfFirstService, indexOfLastService);
	const totalPages = Math.ceil(othersServices.length / servicesPerPage);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="min-h-screen bg-base-200">
			{/* Hero Section */}
			<div className="bg-gradient-to-r from-orange-600 to-red-600 text-white pt-24 pb-16">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">Other Tech Services</h1>
					<p className="text-xl mb-8">Complete solutions for all your technology needs</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							onClick={handleGetDiagnosis}
							className="btn btn-warning btn-lg px-8"
						>
							🔍 Check Device
						</button>
						<button
							onClick={() => navigate('/booking')}
							className="btn btn-success btn-lg px-8"
						>
							📞 Get Quote
						</button>
					</div>
				</div>
			</div>

			{/* Services Grid */}
			<div className="container mx-auto px-4 py-12">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-base-content mb-4">Additional Tech Services</h2>
					<p className="text-base-content/70 max-w-2xl mx-auto">
						Beyond mobile and laptop repairs, we offer comprehensive solutions for
						printers, projectors, networking, and more.
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
								<p className="text-xs sm:text-sm text-gray-600 line-clamp-2 h-10 sm:h-12 mb-1 sm:mb-2 py-1">
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
								<button
									onClick={() => navigate('/details', {
										state: {
											service: { ...service, category: 'Others Service' }
										}
									})}
									className="btn btn-ghost btn-sm w-full gap-2 mt-2"
								>
									<FaInfoCircle /> View Details
								</button>
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

			{/* Service Categories */}
			<div className="bg-base-100 py-16 rounded-lg mx-4">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-base-content mb-12">Service Categories</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2 text-base-content">Office Equipment</h3>
							<p className="text-base-content/70">Printers, scanners, and office devices</p>
						</div>
						<div className="text-center">
							<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2 text-base-content">Audio/Visual</h3>
							<p className="text-base-content/70">Projectors, speakers, and AV equipment</p>
						</div>
						<div className="text-center">
							<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 717.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2 text-base-content">Networking</h3>
							<p className="text-base-content/70">WiFi setup, routers, and network solutions</p>
						</div>
						<div className="text-center">
							<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2 text-base-content">Data Services</h3>
							<p className="text-base-content/70">Data backup, recovery, and migration</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OthersService;