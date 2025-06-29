
import { useState } from 'react';
import imageOne from '../../assets/hotgown.jpg';
import imageTwo from '../../assets/redhotsari.jpg';
import imageThree from '../../assets/panjabi.jpg';
import imageFour from '../../assets/bluesari3.jpg';
import imageFive from '../../assets/pinksari.jpg';
import imageSix from '../../assets/Whitelehenga.jpg';
import imageSeven from '../../assets/Whitelehenga2.jpg';
import { Button } from '@/components/ui/button'; // Reusing your Button component

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      {/* Contact Section */}
      <div className="w-full max-w-6xl px-8 flex-grow">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 tracking-wide">Contact Us</h2>

        {/* Aesthetic Contact Layout */}
        <div className="w-full mb-12 flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Left Side: Scrollable Image Collage */}
          <div className="w-full md:w-2/3 relative h-[500px] overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 py-4">
              <img
                src={imageOne}
                alt="Glamrace Item 1"
                className="w-52 h-72 object-contain rounded-xl shadow-lg transform rotate-[-4deg] hover:scale-105 transition-transform duration-300"
              />
              <img
                src={imageTwo}
                alt="Glamrace Item 2"
                className="w-52 h-72 object-contain rounded-xl shadow-lg transform rotate-[3deg] hover:scale-105 transition-transform duration-300"
              />
              <img
                src={imageThree}
                alt="Glamrace Item 3"
                className="w-52 h-72 object-contain rounded-xl shadow-lg transform rotate-[-2deg] hover:scale-105 transition-transform duration-300"
              />
              <img
                src={imageFour}
                alt="Glamrace Item 4"
                className="w-52 h-72 object-contain rounded-xl shadow-lg transform rotate-[5deg] hover:scale-105 transition-transform duration-300"
              />
              <img
                src={imageFive}
                alt="Glamrace Item 5"
                className="w-52 h-72 object-contain rounded-xl shadow-lg transform rotate-[-3deg] hover:scale-105 transition-transform duration-300"
              />
              <img
                src={imageSix}
                alt="Glamrace Item 6"
                className="w-52 h-72 object-contain rounded-xl shadow-lg transform rotate-[4deg] hover:scale-105 transition-transform duration-300"
              />
              <img
                src={imageSeven}
                alt="Glamrace Item 7"
                className="w-52 h-72 object-contain rounded-xl shadow-lg transform rotate-[-5deg] hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Decorative Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-200 via-lavender-200 to-sky-200 opacity-70 blur-3xl rounded-xl"></div>
          </div>

          {/* Right Side: Large Black Contact Info */}
          <div className="w-full md:w-1/3 flex justify-end">
            <div className="relative max-w-md bg-white rounded-2xl shadow-xl p-8 text-center group">
              <h3 className="text-3xl font-bold text-black mb-6 tracking-wide">Get in Touch</h3>
              <div className="space-y-8 text-black">
                <p className="text-2xl font-semibold">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@glamrace.com" className="text-black hover:text-rose-700 transition-colors duration-200">
                    info@glamrace.com
                  </a>
                </p>
                <p className="text-2xl font-semibold">
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+1234567890" className="text-black hover:text-rose-700 transition-colors duration-200">
                    +1 (234) 567-890
                  </a>
                </p>
                <p className="text-2xl font-semibold">
                  <strong>Address:</strong> 123 Elegance St, Fashion City, FC 45678
                </p>
              </div>
              {/* Decorative Frame */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-rose-100 to-sky-100 opacity-40 blur-md group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (Enhanced Aesthetics) */}
      <footer className="w-full bg-gradient-to-r from-gray-100 via-rose-50 to-sky-50 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Column 1 */}
            <div>
              <h5 className="text-lg font-semibold text-gray-800">GLAM GRACE</h5>
            </div>

            {/* Column 2 */}
            <div>
              <p className="text-gray-600 hover:text-rose-500 transition-colors duration-200">Shop</p>
              <p className="text-gray-600 hover:text-rose-500 transition-colors duration-200">About Us</p>
              <p className="text-gray-600 hover:text-rose-500 transition-colors duration-200">Contact Us</p>
            </div>

            {/* Column 3 */}
            <div>
              <p className="text-gray-600 hover:text-rose-500 transition-colors duration-200">Customer Care</p>
              <p className="text-gray-600 hover:text-rose-500 transition-colors duration-200">Store Policy</p>
              <p className="text-gray-600 hover:text-rose-500 transition-colors duration-200">Payment Methods</p>
              <p className="text-gray-600 hover:text-rose-500 transition-colors duration-200">FAQ</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8 text-center">
            <h5 className="text-lg font-semibold text-gray-800">Follow Us</h5>
            <div className="flex justify-center space-x-6 mt-2">
              <p className="text-gray-600 hover:text-rose-500 transition-colors duration-200">Facebook</p>
              <p className="text-gray-600 hover:text-rose-500 transition-colors duration-200">Instagram</p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-center mt-6">
            © 2025 Glam Grace - All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;