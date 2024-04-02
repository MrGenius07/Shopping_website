import React from "react";

function Contacts() {
    return (
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 dark:bg-gray-800 py-8 mt-0">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl sm:text-5xl text-white mb-4 font-bold">Contact Us</h2>
                    <p className="text-lg text-gray-300">We'd love to hear from you!</p>
                </div>
                <div className="flex items-center justify-center sm:justify-end space-x-4">
                    {/* Rating stars */}
                    <div className="flex items-center space-x-1">
                        <span className="text-lg text-white">Rate us:</span>
                        <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    {/* Contact options */}
                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-lg text-white hover:text-gray-100 transition duration-300">Email</a>
                        <a href="#" className="text-lg text-white hover:text-gray-100 transition duration-300">Phone</a>
                        {/* Add more contact options */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Contacts;
