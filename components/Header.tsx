import React from 'react';
import { UserPlus, Bell, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and menu button */}
          <div className="flex items-center">
            <button 
              className="md:hidden mr-4 text-gray-500 hover:text-gray-700"
              onClick={onMenuToggle}
            >
              <Menu size={24} />
            </button>
            
            <div className="flex items-center">
              <span className="text-sky-600 text-xl font-bold">Doctor</span>
              <span className="text-teal-600 text-xl font-bold">Connect</span>
            </div>
          </div>
          
          {/* Navigation - Hidden on small screens */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-sky-600 font-medium hover:text-sky-800 px-3 py-2 rounded-md transition-colors">Find Doctors</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md transition-colors">Video Consult</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md transition-colors">Medicines</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md transition-colors">Lab Tests</a>
          </nav>
          
          {/* User actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Bell size={20} />
            </button>
            <button className="hidden sm:flex items-center text-sky-600 hover:text-sky-800 font-medium">
              <UserPlus size={20} className="mr-1" />
              <span>Login / Register</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;