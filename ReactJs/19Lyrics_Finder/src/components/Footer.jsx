import React from 'react';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                {/* Contact Section */}
                <div className="flex flex-col md:flex-row gap-6 mb-6 md:mb-0">
                    <a
                        href="mailto:vermadheeraj945@gmail.com"
                        className="flex items-center gap-2 text-yellow-300 hover:text-yellow-200 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="text-2xl">📧</span>
                        <span className="text-lg font-semibold">Email Me</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vermadheeraj945"
                        className="flex items-center gap-2 text-yellow-300 hover:text-yellow-200 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="text-2xl">🔗</span>
                        <span className="text-lg font-semibold">LinkedIn</span>
                    </a>
                </div>
                {/* Copyright Section */}
                <div className="text-center">
                    <p className="text-md font-light">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
