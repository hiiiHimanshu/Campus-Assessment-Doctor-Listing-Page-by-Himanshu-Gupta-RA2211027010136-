import React from 'react';
import { Star, Check, Video, MapPin } from 'lucide-react';
import { Doctor } from '../../types';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="md:flex">
        {/* Doctor Image - Hidden on very small screens */}
        <div className="hidden sm:block w-32 md:w-40 flex-shrink-0">
          <img 
            src={doctor.imageUrl} 
            alt={doctor.name} 
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Doctor Information */}
        <div className="p-4 flex-grow">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{(doctor.specialty || []).join(', ')}</p>
              
              <div className="flex items-center mb-2">
                <span className="bg-green-100 text-green-800 font-medium text-xs px-2.5 py-0.5 rounded-full flex items-center">
                  <Star size={12} className="mr-1 fill-current" />
                  {doctor.rating}
                </span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm text-gray-600">{doctor.experience} years exp</span>
              </div>
              
              <div className="flex items-center text-gray-600 mb-3">
                <MapPin size={14} className="mr-1" />
                <span className="text-sm">{doctor.location}</span>
              </div>
            </div>
            
            <div className="mt-2 md:mt-0 md:ml-4 text-right">
              <p className="text-lg font-bold text-gray-900">₹{doctor.fees}</p>
              <p className="text-xs text-gray-500">Consultation Fee</p>
            </div>
          </div>
          
          {/* Consultation Types & Availability */}
          <div className="flex flex-wrap justify-between items-center mt-3 pt-3 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row gap-2">
              {(doctor.consultationType || []).includes('Video Consult') && (
                <span className="inline-flex items-center text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                  <Video size={12} className="mr-1" />
                  Video Consult
                </span>
              )}
              {(doctor.consultationType || []).includes('In Clinic') && (
                <span className="inline-flex items-center text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
                  <MapPin size={12} className="mr-1" />
                  In Clinic
                </span>
              )}
            </div>
            
            <div className="mt-2 sm:mt-0">
              <span className="inline-flex items-center text-xs text-green-600 font-medium">
                <Check size={14} className="mr-1" />
                {doctor.availability}
              </span>
            </div>
          </div>
          
          {/* Book Appointment Button */}
          <div className="mt-4">
            <button className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-md shadow-sm transition-colors duration-200">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;