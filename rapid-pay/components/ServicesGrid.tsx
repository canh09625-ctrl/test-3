
import React from 'react';
import { SERVICES } from '../constants';

const ServicesGrid: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg text-gray-800">Danh sách thường dùng</h2>
        <button className="flex items-center gap-1 text-sm text-gray-500 font-semibold bg-gray-200 px-3 py-1 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m0-12a2 2 0 012 2v2a2 2 0 01-2 2V6zM6 18v-2m0-12V4m0 12a2 2 0 01-2-2v-2a2 2 0 012-2V6zM18 6v2m0 12v-2m0-12a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2z" /></svg>
          <span>Tùy chỉnh</span>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-y-6 gap-x-2 text-center">
        {SERVICES.map((service) => (
          <button key={service.label} className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 group">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.color} group-hover:opacity-90 transition-opacity`}>
              <div className={`transform scale-90 ${service.iconColor}`}>
                {service.icon}
              </div>
            </div>
            <span className="text-xs font-medium mt-2 leading-tight">{service.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
