import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// ==========Mobile Picture===========
import screen from '../../assets/mobile/screen.jpg'
import battery from '../../assets/mobile/battery.jpg'
import mport from '../../assets/mobile/mport.jpg'
import speaker from '../../assets/mobile/speaker.jpg'
import motherb from '../../assets/mobile/motherb.jpg'
import camera from '../../assets/mobile/camera.jpg'
import repair from '../../assets/mobile/repair.jpg'

// ============Laptop Picture==========
import Lscreen from '../../assets/laptop/Lscreen.jpg'
import Lkeyboard from '../../assets/laptop/Lkeybord.jpg'
import Lbattery from '../../assets/laptop/Lbattery.jpg'
import mBoard from '../../assets/laptop/mBoard.jpg'
import ram from '../../assets/laptop/ram.jpg'
import ssd from '../../assets/laptop/ssd.jpg'
import fan from '../../assets/laptop/fan.jpg'
import os from '../../assets/laptop/os.jpeg'

// ===========Mouse & Keyboard Service============
import sensor from '../../assets/k_mouse/sensor.jpg'
import button from '../../assets/k_mouse/button.jpg'
import wireless from '../../assets/k_mouse/wireless.jpg'
import clean from '../../assets/k_mouse/clean.jpg'
import usb from '../../assets/k_mouse/usb.jpg'
import wheel from '../../assets/k_mouse/wheel.jpeg'
import rgb from '../../assets/k_mouse/rgb.jpg'

const Diagnosis = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [activeTab, setActiveTab] = useState('Mobile Service');
    const [selectedService, setSelectedService] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        deviceType: '',
        deviceModel: '',
        issue: '',
        images: [],
        contactInfo: {
            name: '',
            phone: ''
        }
    });
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [diagnosisId, setDiagnosisId] = useState('');
    const [currentStep, setCurrentStep] = useState(1);

    // Service Categories Data
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
                { name: "Laptop Screen Replacement", image: `${Lscreen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="5" width="20" height="14" rx="2" /></svg>, desc: "Replace broken or damaged laptop screens." },
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
                { name: "Printer Repair", image: `${screen}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /></svg>, desc: "Fix printer hardware and software issues." },
                { name: "Projector Service", image: `${battery}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /></svg>, desc: "Repair and maintain projectors." },
                { name: "CCTV Installation", image: `${camera}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="3" /></svg>, desc: "Install and configure CCTV systems." },
                { name: "Data Recovery", image: `${ssd}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /></svg>, desc: "Recover lost data from storage devices." },
                { name: "Router Setup", image: `${wireless}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M2 12a10 10 0 0120 0" /></svg>, desc: "Configure and optimize network routers." },
                { name: "Speaker Repair", image: `${speaker}`, icon: <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="2" width="16" height="20" rx="2" /></svg>, desc: "Fix audio and speaker systems." },
            ]
        }
    ];

    // Device types for selection
    const deviceTypes = [
        { id: 'mobile', name: 'Mobile Phone', icon: '📱' },
        { id: 'laptop', name: 'Laptop', icon: '💻' },
        { id: 'tablet', name: 'Tablet', icon: '📟' },
        { id: 'mouse', name: 'Mouse', icon: '🖱️' },
        { id: 'keyboard', name: 'Keyboard', icon: '⌨️' },
        { id: 'other', name: 'Other Device', icon: '🔧' }
    ];

    // Common issues by device type
    const commonIssues = {
        mobile: ['Screen Cracked', 'Battery Draining Fast', 'Camera Not Working', 'Speaker Issues', 'Charging Problems', 'Water Damage'],
        laptop: ['Screen Flickering', 'Keyboard Not Working', 'Overheating', 'Battery Issues', 'Slow Performance', 'Blue Screen'],
        tablet: ['Touch Not Responsive', 'Screen Cracked', 'Battery Issues', 'Charging Problems', 'App Crashes', 'Wifi Problems'],
        mouse: ['Click Not Working', 'Cursor Jumping', 'Scroll Wheel Issues', 'Connection Problems', 'LED Not Working', 'Double Clicking'],
        keyboard: ['Keys Not Working', 'Sticky Keys', 'Backlight Issues', 'Connection Problems', 'Typing Wrong Characters', 'Keys Falling Off'],
        other: ['Not Turning On', 'Strange Noises', 'Overheating', 'Connection Issues', 'Performance Problems', 'Physical Damage']
    };

    const handleInputChange = (field, value) => {
        if (field.includes('.')) {
            const [parent, child] = field.split('.');
            setFormData({
                ...formData,
                [parent]: {
                    ...formData[parent],
                    [child]: value
                }
            });
        } else {
            setFormData({ ...formData, [field]: value });
        }
    };

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const imagePromises = files.map(file => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    resolve({
                        file: file,
                        preview: e.target.result,
                        name: file.name
                    });
                };
                reader.readAsDataURL(file);
            });
        });

        Promise.all(imagePromises).then(images => {
            setFormData({
                ...formData,
                images: [...formData.images, ...images].slice(0, 5) // Max 5 images
            });
        });
    };

    const removeImage = (index) => {
        const newImages = formData.images.filter((_, i) => i !== index);
        setFormData({ ...formData, images: newImages });
    };

    const handleNextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const isStepValid = () => {
        switch (currentStep) {
            case 1:
                return formData.deviceType && formData.deviceModel && formData.issue;
            case 2:
                return formData.images.length > 0;
            case 3:
                return formData.contactInfo.name && formData.contactInfo.phone;
            default:
                return true;
        }
    };

    const handleStartDiagnosis = () => {
        setIsAnalyzing(true);

        // Simulate AI analysis
        // Loading/ Processing effect for 3 seconds
        // Uniqe diagnosis id generation
        setTimeout(() => {
            const newDiagnosisId = 'DG' + Date.now().toString().slice(-6);
            setDiagnosisId(newDiagnosisId);

            // Mock analysis result based on device type and issue
            const mockResult = generateMockAnalysis();
            setAnalysisResult(mockResult);
            setIsAnalyzing(false);
        }, 3000);
    };

    const generateMockAnalysis = () => {
        const { deviceType, issue } = formData;

        // Mock analysis based on device and issue
        const analysisTemplates = {
            mobile: {
                'Screen Cracked': {
                    severity: 'High',
                    diagnosis: 'Screen replacement required',
                    estimatedCost: '৳3,500 - ৳5,000',
                    repairTime: '2-3 hours',
                    confidence: 95
                },
                'Battery Draining Fast': {
                    severity: 'Medium',
                    diagnosis: 'Battery replacement needed',
                    estimatedCost: '৳2,500 - ৳3,500',
                    repairTime: '1-2 hours',
                    confidence: 88
                }
            },
            laptop: {
                'Screen Flickering': {
                    severity: 'Medium',
                    diagnosis: 'Display cable or screen issue',
                    estimatedCost: '৳4,000 - ৳8,000',
                    repairTime: '3-4 hours',
                    confidence: 82
                },
                'Overheating': {
                    severity: 'High',
                    diagnosis: 'Thermal paste replacement needed',
                    estimatedCost: '৳1,500 - ৳2,500',
                    repairTime: '2-3 hours',
                    confidence: 90
                }
            }
        };

        const template = analysisTemplates[deviceType]?.[issue] || {
            severity: 'Medium',
            diagnosis: 'Detailed inspection required',
            estimatedCost: '৳1,000 - ৳3,000',
            repairTime: '2-4 hours',
            confidence: 75
        };

        return {
            ...template,
            recommendations: [
                'Bring device to service center for detailed inspection',
                'Backup important data before repair',
                'Avoid using device until repair to prevent further damage'
            ],
            nextSteps: [
                'Book repair appointment',
                'Get detailed quote',
                'Proceed with repair'
            ]
        };
    };

    if (analysisResult) {
        return (
            <div className="min-h-screen bg-green-50 dark:bg-gray-900 pt-20">
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="text-6xl mb-4">🔍</div>
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Diagnosis Complete!
                            </h1>
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                AI analysis completed for your {formData.deviceType}
                            </p>
                        </div>

                        {/* Diagnosis ID */}
                        <div className="card bg-base-100 shadow-xl mb-8">
                            <div className="card-body text-center">
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                    <p className="text-lg font-semibold text-green-700 dark:text-green-300">
                                        Diagnosis ID: {diagnosisId}
                                    </p>
                                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                                        Save this ID for future reference
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Analysis Results */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Main Analysis */}
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl mb-4">Analysis Results</h2>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold">Confidence Level:</span>
                                            <div className="flex items-center">
                                                <progress className="progress progress-success w-20 mr-2" value={analysisResult.confidence} max="100"></progress>
                                                <span className="text-success font-bold">{analysisResult.confidence}%</span>
                                            </div>
                                        </div>

                                        <div className="divider"></div>

                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">Diagnosis:</h3>
                                            <p className="text-base-content/80">{analysisResult.diagnosis}</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="stat">
                                                <div className="stat-title">Severity</div>
                                                <div className={`stat-value text-lg ${analysisResult.severity === 'High' ? 'text-error' :
                                                        analysisResult.severity === 'Medium' ? 'text-warning' : 'text-success'
                                                    }`}>
                                                    {analysisResult.severity}
                                                </div>
                                            </div>
                                            <div className="stat">
                                                <div className="stat-title">Repair Time</div>
                                                <div className="stat-value text-lg text-primary">{analysisResult.repairTime}</div>
                                            </div>
                                        </div>

                                        <div className="bg-primary/10 p-4 rounded-lg">
                                            <h4 className="font-semibold text-primary mb-2">Estimated Cost:</h4>
                                            <p className="text-2xl font-bold text-primary">{analysisResult.estimatedCost}</p>
                                            <p className="text-sm text-base-content/60 mt-1">*Final cost may vary after physical inspection</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recommendations */}
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl mb-4">Recommendations</h2>

                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="font-semibold text-lg mb-3">What to do next:</h3>
                                            <ul className="space-y-2">
                                                {analysisResult.recommendations.map((rec, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-success mr-2">✓</span>
                                                        <span className="text-base-content/80">{rec}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-lg mb-3">Next Steps:</h3>
                                            <div className="space-y-2">
                                                {analysisResult.nextSteps.map((step, index) => (
                                                    <div key={index} className="flex items-center">
                                                        <div className="w-6 h-6 rounded-full bg-primary text-primary-content flex items-center justify-center text-sm font-bold mr-3">
                                                            {index + 1}
                                                        </div>
                                                        <span className="text-base-content/80">{step}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="alert alert-info">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>This is an AI-powered preliminary diagnosis. Physical inspection may reveal additional issues.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="text-center mt-8 space-x-4">
                            <button
                                className="btn btn-primary btn-lg"
                                onClick={() => navigate('/booking')}
                            >
                                📅 Book Repair Now
                            </button>
                            <button
                                className="btn btn-outline btn-lg"
                                onClick={() => window.location.reload()}
                            >
                                🔍 New Diagnosis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (isAnalyzing) {
        return (
            <div className="min-h-screen bg-blue-50 dark:bg-gray-900 pt-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Analyzing Your Device...</h2>
                    <p className="text-gray-700 dark:text-gray-300">AI is processing your images and information</p>
                    <div className="mt-4">
                        <progress className="progress progress-primary w-56"></progress>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-blue-50 dark:bg-gray-900 pt-20">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        AI Device Diagnosis
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        Get instant AI-powered diagnosis for your device issues
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="max-w-4xl mx-auto mb-8">
                    <div className="steps steps-horizontal w-full">
                        <div className={`step text-gray-900 dark:text-white ${currentStep >= 1 ? 'step-primary' : ''}`}>Device Info</div>
                        <div className={`step text-gray-900 dark:text-white ${currentStep >= 2 ? 'step-primary' : ''}`}>Upload Images</div>
                        <div className={`step text-gray-900 dark:text-white ${currentStep >= 3 ? 'step-primary' : ''}`}>Contact Info</div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            {/* Step 1: Device Information */}
                            {currentStep === 1 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-center">Device Information</h2>

                                    {/* Device Type Selection */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">What type of device do you have?</span>
                                        </label>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {deviceTypes.map((device) => (
                                                <div
                                                    key={device.id}
                                                    className={`card cursor-pointer transition-all hover:scale-105 ${formData.deviceType === device.id
                                                            ? 'bg-primary text-primary-content'
                                                            : 'bg-base-200 hover:bg-base-300'
                                                        }`}
                                                    onClick={() => handleInputChange('deviceType', device.id)}
                                                >
                                                    <div className="card-body items-center text-center p-4">
                                                        <div className="text-3xl mb-2">{device.icon}</div>
                                                        <h3 className="font-semibold text-sm">{device.name}</h3>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Device Model */}
                                    {formData.deviceType && (
                                        <div>
                                            <label className="label">
                                                <span className="label-text font-semibold">Device Model/Brand:</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g., iPhone 12 Pro, HP Pavilion 15, Logitech G502"
                                                className="input input-bordered w-full"
                                                value={formData.deviceModel}
                                                onChange={(e) => handleInputChange('deviceModel', e.target.value)}
                                            />
                                        </div>
                                    )}

                                    {/* Issue Selection */}
                                    {formData.deviceType && (
                                        <div>
                                            <label className="label">
                                                <span className="label-text font-semibold">What's the problem?</span>
                                            </label>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                                                {commonIssues[formData.deviceType]?.map((issue) => (
                                                    <button
                                                        key={issue}
                                                        className={`btn btn-sm ${formData.issue === issue
                                                                ? 'btn-primary'
                                                                : 'btn-outline'
                                                            }`}
                                                        onClick={() => handleInputChange('issue', issue)}
                                                    >
                                                        {issue}
                                                    </button>
                                                ))}
                                            </div>
                                            <textarea
                                                placeholder="Or describe the problem in detail..."
                                                className="textarea textarea-bordered w-full h-24"
                                                value={formData.issue}
                                                onChange={(e) => handleInputChange('issue', e.target.value)}
                                            ></textarea>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Step 2: Image Upload */}
                            {currentStep === 2 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-center">Upload Device Images</h2>
                                    <p className="text-center text-base-content/70">Upload clear photos of your device and the problem area (Max 5 images)</p>

                                    {/* Upload Area */}
                                    <div
                                        className="border-2 border-dashed border-base-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        <div className="text-6xl mb-4">📸</div>
                                        <h3 className="text-xl font-semibold mb-2">Click to Upload Images</h3>
                                        <p className="text-base-content/70">or drag and drop images here</p>
                                        <p className="text-sm text-base-content/50 mt-2">Supports: JPG, PNG, WEBP (Max 10MB each)</p>
                                    </div>

                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                    />

                                    {/* Image Preview */}
                                    {formData.images.length > 0 && (
                                        <div>
                                            <h3 className="font-semibold mb-4">Uploaded Images ({formData.images.length}/5):</h3>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {formData.images.map((image, index) => (
                                                    <div key={index} className="relative">
                                                        <img
                                                            src={image.preview}
                                                            alt={`Upload ${index + 1}`}
                                                            className="w-full h-32 object-cover rounded-lg"
                                                        />
                                                        <button
                                                            className="absolute top-2 right-2 btn btn-circle btn-sm btn-error"
                                                            onClick={() => removeImage(index)}
                                                        >
                                                            ✕
                                                        </button>
                                                        <p className="text-xs text-center mt-1 truncate">{image.name}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Step 3: Contact Information */}
                            {currentStep === 3 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-center">Contact Information</h2>
                                    <p className="text-center text-base-content/70">We'll send the diagnosis results to you</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="label">
                                                <span className="label-text font-semibold">Full Name *</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your full name"
                                                className="input input-bordered w-full"
                                                value={formData.contactInfo.name}
                                                onChange={(e) => handleInputChange('contactInfo.name', e.target.value)}
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
                                                value={formData.contactInfo.phone}
                                                onChange={(e) => handleInputChange('contactInfo.phone', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="alert alert-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <div>
                                            <h3 className="font-bold">Ready for AI Analysis!</h3>
                                            <p className="text-sm">Our AI will analyze your device images and provide detailed diagnosis with repair recommendations.</p>
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

                                {currentStep < 3 ? (
                                    <button
                                        className={`btn btn-primary ${!isStepValid() ? 'btn-disabled' : ''}`}
                                        onClick={handleNextStep}
                                        disabled={!isStepValid()}
                                    >
                                        Next Step
                                    </button>
                                ) : (
                                    <button
                                        className={`btn btn-success btn-lg ${!isStepValid() ? 'btn-disabled' : ''}`}
                                        onClick={handleStartDiagnosis}
                                        disabled={!isStepValid()}
                                    >
                                        🤖 Start AI Diagnosis
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

export default Diagnosis;