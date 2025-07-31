import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content pt-10 pb-4 mt-10 border-t border-primary">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-primary">
                    {/* About */}
                    <div>
                        <h2 className="text-xl font-bold mb-3 text-primary">eSoLuTiOn</h2>
                        <p className="mb-2">Your trusted repair service for mobile, laptop, mouse & keyboard, and more.</p>
                        <div className="flex space-x-3 mt-4">
                            <a href="#" className="text-primary hover:text-blue-600" aria-label="Facebook"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z"/></svg></a>
                            <a href="#" className="text-primary hover:text-blue-400" aria-label="Twitter"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0024 4.557z"/></svg></a>
                            <a href="#" className="text-primary hover:text-pink-600" aria-label="Instagram"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191 0-5.502-.013-5.911-.072-7.191-.059-1.277-.353-2.45-1.32-3.417C19.398.425 18.225.131 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg></a>
                            <a href="#" className="text-primary hover:text-blue-700" aria-label="LinkedIn"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg></a>
                        </div>
                    </div>
                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-3">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary">Mobile Service</a></li>
                            <li><a href="#" className="hover:text-primary">Laptop Service</a></li>
                            <li><a href="#" className="hover:text-primary">Mouse & Keyboard</a></li>
                            <li><a href="#" className="hover:text-primary">Others</a></li>
                        </ul>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary">Home</a></li>
                            <li><a href="#" className="hover:text-primary">About</a></li>
                            <li><a href="#" className="hover:text-primary">Contact</a></li>
                            <li><a href="#" className="hover:text-primary">Location</a></li>
                        </ul>
                    </div>
                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-3">Contact</h3>
                        <ul className="space-y-2">
                            <li>Email: <a href="mailto:info@esolution.com" className="hover:text-primary">info@esolution.com</a></li>
                            <li>Phone: <a href="tel:+1234567890" className="hover:text-primary">+1 234 567 890</a></li>
                            <li>Address: 123 Repair St, City, Country</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center pt-6 text-sm text-neutral-content/70">
                    &copy; {new Date().getFullYear()} eSoLuTiOn. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;