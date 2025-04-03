
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              zensy<span className="text-zen-purple">labs</span>
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              A premier IT consulting firm that specializes in providing innovative
              solutions to businesses and startups. We offer expert guidance and
              services in AI, Blockchain, and Machine Learning.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-zen-purple transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="text-gray-300 hover:text-zen-purple transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-gray-300 hover:text-zen-purple transition-colors"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-zen-purple transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Email: zensyslabs@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Zensyslabs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-zen-purple transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-zen-purple transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
