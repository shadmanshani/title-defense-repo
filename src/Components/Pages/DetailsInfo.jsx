import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DetailsInfo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [service, setService] = useState(null);
    
    // Log the received service data for debugging
    useEffect(() => {
        console.log('Location state:', location.state);
        
        // Try to get service data from location state
        const serviceData = location.state?.service;
        
        if (serviceData) {
            console.log('Service data received:', serviceData);
            setService(serviceData);
        } else {
            console.log('No service data found in location state');
            // Try to get from session storage as fallback
            const storedService = sessionStorage.getItem('selectedService');
            if (storedService) {
                console.log('Found service in session storage:', storedService);
                setService(JSON.parse(storedService));
            }
        }
    }, [location]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-base-100">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-error mb-4">No Service Selected</h2>
                    <p className="mb-4">Please select a service to view its details.</p>
                    <button 
                        onClick={() => navigate('/services')}
                        className="btn btn-primary"
                    >
                        Back to Services
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-base-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <button 
                    onClick={() => navigate(-1)}
                    className="btn btn-ghost mb-6"
                >
                    ← Back to Services
                </button>
                
                <div className="card lg:card-side bg-base-200 shadow-xl">
                    <figure className="lg:w-1/2">
                        <img 
                            src={service.image} 
                            alt={service.name} 
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <div className="card-body lg:w-1/2">
                        <h2 className="card-title text-3xl font-bold text-primary">
                            {service.name}
                        </h2>
                        
                        <div className="divider"></div>
                        
                        <p className="text-lg">{service.desc}</p>
                        
                        {service.price && (
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold">Price Range:</h3>
                                <p className="text-2xl font-bold text-primary">{service.price}</p>
                            </div>
                        )}
                        
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-2">Service Includes:</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Professional diagnosis</li>
                                <li>High-quality replacement parts</li>
                                <li>Expert repair service</li>
                                <li>Warranty on parts and labor</li>
                            </ul>
                        </div>
                        
                        <div className="card-actions justify-end mt-8">
                            <button 
                                onClick={() => navigate('/booking', { state: { service } })}
                                className="btn btn-primary w-full"
                            >
                                Book This Service
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsInfo;