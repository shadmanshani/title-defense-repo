import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
	const navigate = useNavigate();
	const [currentStep, setCurrentStep] = useState(1);
	const [bookingData, setBookingData] = useState({
		service: '',
		device: '',
		issue: '',
		selectedDate: '',
		selectedTime: '',
		customerInfo: {
			name: '',
			phone: '',
			email: '',
			address: ''
		},
		pickupOption: 'drop-off'
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [bookingConfirmed, setBookingConfirmed] = useState(false);
	const [bookingId, setBookingId] = useState('');
	const [lastBooking, setLastBooking] = useState(null);

	// Service categories
	const services = [
		{ id: 'mobile', name: 'Mobile Repair', icon: '📱' },
		{ id: 'laptop', name: 'Laptop Repair', icon: '💻' },
		{ id: 'mouse-keyboard', name: 'Mouse & Keyboard', icon: '🖱️' },
		{ id: 'others', name: 'Other Services', icon: '🔧' }
	];

	// Common issues by service
	const commonIssues = {
		mobile: ['Screen Broken', 'Battery Issue', 'Camera Problem', 'Speaker/Mic Issue', 'Charging Port', 'Water Damage'],
		laptop: ['Screen Replacement', 'Keyboard Issue', 'Battery Problem', 'Overheating', 'RAM Upgrade', 'Hard Drive Issue'],
		'mouse-keyboard': ['Button Not Working', 'Sensor Issue', 'Key Stuck', 'Cable Problem', 'Wireless Connection', 'LED Issue'],
		others: ['Printer Repair', 'Projector Service', 'CCTV Installation', 'Data Recovery', 'Router Setup', 'Speaker Repair']
	};

	// Generate available dates (next 14 days, excluding Fridays)
	const generateAvailableDates = () => {
		const dates = [];
		const today = new Date();
		let count = 0;
		let currentDate = new Date(today);
		currentDate.setDate(today.getDate() + 1); // Start from tomorrow

		while (count < 14) {
			if (currentDate.getDay() !== 5) { // Exclude Fridays (5)
				dates.push({
					date: currentDate.toISOString().split('T')[0],
					display: currentDate.toLocaleDateString('en-GB', {
						weekday: 'short',
						day: 'numeric',
						month: 'short'
					})
				});
				count++;
			}
			currentDate.setDate(currentDate.getDate() + 1);
		}
		return dates;
	};

	// Available time slots
	const timeSlots = [
		'09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
		'02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
	];

	const availableDates = generateAvailableDates();

	useEffect(() => {
		const stored = localStorage.getItem('lastBooking');
		if (stored) {
			setLastBooking(JSON.parse(stored));
		}
	}, []);

	const handleServiceSelect = (serviceId) => {
		setBookingData({ ...bookingData, service: serviceId, issue: '' });
	};

	const handleInputChange = (field, value) => {
		if (field.includes('.')) {
			const [parent, child] = field.split('.');
			setBookingData({
				...bookingData,
				[parent]: {
					...bookingData[parent],
					[child]: value
				}
			});
		} else {
			setBookingData({ ...bookingData, [field]: value });
		}
	};

	const handleNextStep = () => {
		if (currentStep < 4) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handlePrevStep = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleSubmitBooking = async () => {
		setIsSubmitting(true);

		// Simulate API call
		setTimeout(() => {
			const newBookingId = 'BK' + Date.now().toString().slice(-6);
			setBookingId(newBookingId);
			setBookingConfirmed(true);
			setIsSubmitting(false);

			// Store booking data in localStorage
			localStorage.setItem('lastBooking', JSON.stringify({
				bookingId: newBookingId,
				...bookingData
			}));
		}, 2000);
	};

	const isStepValid = () => {
		switch (currentStep) {
			case 1:
				return bookingData.service && bookingData.device && bookingData.issue;
			case 2:
				return bookingData.selectedDate && bookingData.selectedTime;
			case 3:
				return bookingData.customerInfo.name && bookingData.customerInfo.phone;
			default:
				return true;
		}
	};

	if (bookingConfirmed) {
		return (
			<div className="min-h-screen bg-green-50 dark:bg-gray-900 pt-20">
				<div className="container mx-auto px-4 py-8">
					<div className="max-w-2xl mx-auto">
						<div className="card bg-base-100 shadow-xl">
							<div className="card-body text-center">
								<div className="text-6xl mb-4">✅</div>
								<h2 className="card-title text-3xl justify-center text-green-600 mb-4">
									Booking Confirmed!
								</h2>
								<div className="space-y-4">
									<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
										<p className="text-lg font-semibold text-green-700 dark:text-green-700">
											Booking ID: {bookingId}
										</p>
										<p className="text-sm text-green-600 dark:text-green-600 mt-1">
											Please save this ID for tracking
										</p>
									</div>

									<div className="text-left bg-base-200 p-4 rounded-lg">
										<h3 className="font-semibold mb-2">Booking Details:</h3>
										<p><strong>Service:</strong> {services.find(s => s.id === bookingData.service)?.name}</p>
										<p><strong>Device:</strong> {bookingData.device}</p>
										<p><strong>Issue:</strong> {bookingData.issue}</p>
										<p><strong>Date & Time:</strong> {bookingData.selectedDate} at {bookingData.selectedTime}</p>
										<p><strong>Pickup:</strong> {bookingData.pickupOption === 'pickup' ? 'Home Pickup' : 'Drop-off at Center'}</p>
									</div>

									<div className="alert alert-info">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
										<span>We'll call you 30 minutes before the scheduled time to confirm.</span>
									</div>
								</div>

								<div className="card-actions justify-center mt-6 space-x-4">
									<button
										className="btn btn-primary"
										onClick={() => navigate('/track')}
									>
										Track Order
									</button>
									<button
										className="btn btn-outline"
										onClick={() => window.location.reload()}
									>
										Book Another
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-blue-50 dark:bg-gray-900 pt-20">
			<div className="container mx-auto px-4 py-8">
				{/* Show last booking details if available */}
				{lastBooking && (
					<div className="max-w-2xl mx-auto mb-8">
						<div className="card bg-base-100 shadow-lg border border-primary">
							<div className="card-body">
								<h2 className="card-title text-xl text-primary mb-2">Last Booking Details</h2>
								<p><strong>Booking ID:</strong> {lastBooking.bookingId}</p>
								<p><strong>Service:</strong> {services.find(s => s.id === lastBooking.service)?.name}</p>
								<p><strong>Device:</strong> {lastBooking.device}</p>
								<p><strong>Issue:</strong> {lastBooking.issue}</p>
								<p><strong>Date & Time:</strong> {lastBooking.selectedDate} at {lastBooking.selectedTime}</p>
								<p><strong>Pickup:</strong> {lastBooking.pickupOption === 'pickup' ? 'Home Pickup' : 'Drop-off at Center'}</p>
								<p><strong>Name:</strong> {lastBooking.customerInfo?.name}</p>
								<p><strong>Phone:</strong> {lastBooking.customerInfo?.phone}</p>
								{lastBooking.customerInfo?.email && <p><strong>Email:</strong> {lastBooking.customerInfo.email}</p>}
								{lastBooking.customerInfo?.address && <p><strong>Address:</strong> {lastBooking.customerInfo.address}</p>}
								{lastBooking.notes && <p><strong>Notes:</strong> {lastBooking.notes}</p>}
							</div>
						</div>
					</div>
				)}

				{/* Header */}
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Book Your Repair Service
					</h1>
					<p className="text-lg text-gray-700 dark:text-gray-300">
						Quick and easy booking in 4 simple steps
					</p>
				</div>

				{/* Progress Steps */}
				<div className="max-w-4xl mx-auto mb-8">
					<div className="steps steps-horizontal w-full">
						<div className={`step text-gray-900 dark:text-white ${currentStep >= 1 ? 'step-primary' : ''}`}>Service Details</div>
						<div className={`step text-gray-900 dark:text-white ${currentStep >= 2 ? 'step-primary' : ''}`}>Date & Time</div>
						<div className={`step text-gray-900 dark:text-white ${currentStep >= 3 ? 'step-primary' : ''}`}>Customer Info</div>
						<div className={`step text-gray-900 dark:text-white ${currentStep >= 4 ? 'step-primary' : ''}`}>Confirmation</div>
					</div>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="card bg-base-100 shadow-xl">
						<div className="card-body">
							{/* Step 1: Service Selection */}
							{currentStep === 1 && (
								<div className="space-y-6">
									<h2 className="text-2xl font-bold text-center">Select Your Service</h2>

									{/* Service Categories */}
									<div>
										<label className="label">
											<span className="label-text font-semibold">Choose Service Category:</span>
										</label>
										<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
											{services.map((service) => (
												<div
													key={service.id}
													className={`card cursor-pointer transition-all hover:scale-105 ${bookingData.service === service.id
															? 'bg-primary text-primary-content'
															: 'bg-base-200 hover:bg-base-300'
														}`}
													onClick={() => handleServiceSelect(service.id)}
												>
													<div className="card-body items-center text-center p-4">
														<div className="text-3xl mb-2">{service.icon}</div>
														<h3 className="font-semibold text-sm">{service.name}</h3>
													</div>
												</div>
											))}
										</div>
									</div>

									{/* Device Model */}
									{bookingData.service && (
										<div>
											<label className="label">
												<span className="label-text font-semibold">Device Model:</span>
											</label>
											<input
												type="text"
												placeholder="e.g., iPhone 12 Pro, HP Pavilion 15, Logitech G502"
												className="input input-bordered w-full"
												value={bookingData.device}
												onChange={(e) => handleInputChange('device', e.target.value)}
											/>
										</div>
									)}

									{/* Issue Selection */}
									{bookingData.service && (
										<div>
											<label className="label">
												<span className="label-text font-semibold">What's the issue?</span>
											</label>
											<div className="grid grid-cols-2 md:grid-cols-3 gap-2">
												{commonIssues[bookingData.service]?.map((issue) => (
													<button
														key={issue}
														className={`btn btn-sm ${bookingData.issue === issue
																? 'btn-primary'
																: 'btn-outline'
															}`}
														onClick={() => handleInputChange('issue', issue)}
													>
														{issue}
													</button>
												))}
											</div>
											<input
												type="text"
												placeholder="Or describe your issue..."
												className="input input-bordered w-full mt-2"
												value={bookingData.issue}
												onChange={(e) => handleInputChange('issue', e.target.value)}
											/>
										</div>
									)}
								</div>
							)}

							{/* Step 2: Date & Time Selection */}
							{currentStep === 2 && (
								<div className="space-y-6">
									<h2 className="text-2xl font-bold text-center">Select Date & Time</h2>

									{/* Date Selection */}
									<div>
										<label className="label">
											<span className="label-text font-semibold">Choose Date:</span>
										</label>
										<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
											{availableDates.map((dateObj) => (
												<button
													key={dateObj.date}
													className={`btn btn-sm ${bookingData.selectedDate === dateObj.date
															? 'btn-primary'
															: 'btn-outline'
														}`}
													onClick={() => handleInputChange('selectedDate', dateObj.date)}
												>
													{dateObj.display}
												</button>
											))}
										</div>
									</div>

									{/* Time Selection */}
									{bookingData.selectedDate && (
										<div>
											<label className="label">
												<span className="label-text font-semibold">Choose Time:</span>
											</label>
											<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
												{timeSlots.map((time) => (
													<button
														key={time}
														className={`btn btn-sm ${bookingData.selectedTime === time
																? 'btn-primary'
																: 'btn-outline'
															}`}
														onClick={() => handleInputChange('selectedTime', time)}
													>
														{time}
													</button>
												))}
											</div>
										</div>
									)}

									{/* Pickup Option */}
									{bookingData.selectedTime && (
										<div>
											<label className="label">
												<span className="label-text font-semibold">Service Option:</span>
											</label>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<div
													className={`card cursor-pointer transition-all ${bookingData.pickupOption === 'drop-off'
															? 'bg-primary text-primary-content'
															: 'bg-base-200 hover:bg-base-300'
														}`}
													onClick={() => handleInputChange('pickupOption', 'drop-off')}
												>
													<div className="card-body p-4">
														<h3 className="font-semibold">🏪 Drop-off at Center</h3>
														<p className="text-sm opacity-70">Bring your device to our service center</p>
														<p className="text-sm font-semibold">FREE</p>
													</div>
												</div>
												<div
													className={`card cursor-pointer transition-all ${bookingData.pickupOption === 'pickup'
															? 'bg-primary text-primary-content'
															: 'bg-base-200 hover:bg-base-300'
														}`}
													onClick={() => handleInputChange('pickupOption', 'pickup')}
												>
													<div className="card-body p-4">
														<h3 className="font-semibold">🚚 Home Pickup</h3>
														<p className="text-sm opacity-70">We'll collect from your location</p>
														<p className="text-sm font-semibold">+৳100</p>
													</div>
												</div>
											</div>
										</div>
									)}
								</div>
							)}

							{/* Step 3: Customer Information */}
							{currentStep === 3 && (
								<div className="space-y-6">
									<h2 className="text-2xl font-bold text-center">Customer Information</h2>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<label className="label">
												<span className="label-text font-semibold">Full Name *</span>
											</label>
											<input
												type="text"
												placeholder="Enter your full name"
												className="input input-bordered w-full"
												value={bookingData.customerInfo.name}
												onChange={(e) => handleInputChange('customerInfo.name', e.target.value)}
											/>
										</div>

										<div>
											<label className="label">
												<span className="label-text font-semibold">Phone Number *</span>
											</label>
											<input
												type="tel"
												placeholder="01XXXXXXXXX"
												className="input input-bordered w-full"
												value={bookingData.customerInfo.phone}
												onChange={(e) => handleInputChange('customerInfo.phone', e.target.value)}
											/>
										</div>

										<div>
											<label className="label">
												<span className="label-text font-semibold">Email</span>
											</label>
											<input
												type="email"
												placeholder="your.email@example.com"
												className="input input-bordered w-full"
												value={bookingData.customerInfo.email}
												onChange={(e) => handleInputChange('customerInfo.email', e.target.value)}
											/>
										</div>

										<div>
											<label className="label">
												<span className="label-text font-semibold">
													Address {bookingData.pickupOption === 'pickup' ? '*' : ''}
												</span>
											</label>
											<input
												type="text"
												placeholder="Your address"
												className="input input-bordered w-full"
												value={bookingData.customerInfo.address}
												onChange={(e) => handleInputChange('customerInfo.address', e.target.value)}
											/>
										</div>
									</div>

									<div className="md:col-span-2">
										<label className="label">
											<span className="label-text font-semibold">Additional Notes</span>
										</label>
										<textarea
											placeholder="Any additional information about the issue or special instructions..."
											className="textarea textarea-bordered w-full h-24"
											value={bookingData.notes || ''}
											onChange={(e) => handleInputChange('notes', e.target.value)}
										></textarea>
									</div>
								</div>
							)}

							{/* Step 4: Confirmation */}
							{currentStep === 4 && (
								<div className="space-y-6">
									<h2 className="text-2xl font-bold text-center">Confirm Your Booking</h2>

									<div className="bg-base-200 p-6 rounded-lg space-y-4">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div>
												<h3 className="font-semibold text-lg mb-2">Service Details</h3>
												<p><strong>Service:</strong> {services.find(s => s.id === bookingData.service)?.name}</p>
												<p><strong>Device:</strong> {bookingData.device}</p>
												<p><strong>Issue:</strong> {bookingData.issue}</p>
											</div>

											<div>
												<h3 className="font-semibold text-lg mb-2">Schedule</h3>
												<p><strong>Date:</strong> {bookingData.selectedDate}</p>
												<p><strong>Time:</strong> {bookingData.selectedTime}</p>
												<p><strong>Service:</strong> {bookingData.pickupOption === 'pickup' ? 'Home Pickup (+৳100)' : 'Drop-off at Center'}</p>
											</div>

											<div>
												<h3 className="font-semibold text-lg mb-2">Customer Info</h3>
												<p><strong>Name:</strong> {bookingData.customerInfo.name}</p>
												<p><strong>Phone:</strong> {bookingData.customerInfo.phone}</p>
												{bookingData.customerInfo.email && <p><strong>Email:</strong> {bookingData.customerInfo.email}</p>}
											</div>

											<div>
												<h3 className="font-semibold text-lg mb-2">Estimated Cost</h3>
												<p className="text-sm text-base-content/70">Diagnosis Fee: ৳200</p>
												{bookingData.pickupOption === 'pickup' && <p className="text-sm text-base-content/70">Pickup Charge: ৳100</p>}
												<p className="text-lg font-bold text-primary">
													Total: ৳{bookingData.pickupOption === 'pickup' ? '300' : '200'}
												</p>
												<p className="text-xs text-base-content/60 mt-1">
													*Final repair cost will be quoted after diagnosis
												</p>
											</div>
										</div>
									</div>

									<div className="alert alert-info">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
										<div>
											<h3 className="font-bold">Important Notes:</h3>
											<ul className="text-sm list-disc list-inside mt-1">
												<li>We'll call you 30 minutes before the scheduled time</li>
												<li>Diagnosis fee is non-refundable but adjustable with repair cost</li>
												<li>Repair quote will be provided after diagnosis</li>
												<li>You can cancel up to 2 hours before the appointment</li>
											</ul>
										</div>
									</div>
								</div>
							)}

							{/* Navigation Buttons */}
							<div className="card-actions justify-between mt-8">
								<button
									className={`btn btn-outline ${currentStep === 1 ? 'btn-disabled' : ''}`}
									onClick={handlePrevStep}
									disabled={currentStep === 1}
								>
									Previous
								</button>

								{currentStep < 4 ? (
									<button
										className={`btn btn-primary ${!isStepValid() ? 'btn-disabled' : ''}`}
										onClick={handleNextStep}
										disabled={!isStepValid()}
									>
										Next Step
									</button>
								) : (
									<button
										className={`btn btn-success ${isSubmitting ? 'loading' : ''}`}
										onClick={handleSubmitBooking}
										disabled={isSubmitting}
									>
										{isSubmitting ? 'Confirming...' : 'Confirm Booking'}
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;