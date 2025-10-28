
import React from 'react';
import { NAV_ITEMS } from '../constants';

const BottomNav: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 max-w-sm mx-auto bg-white border-t border-gray-200 shadow-t-md">
      <div className="flex justify-around items-center h-16">
        {NAV_ITEMS.map((item) => {
          const textColor = item.active ? 'text-blue-600' : 'text-gray-500';
          return (
            <button key={item.label} className={`flex flex-col items-center justify-center flex-1 text-center group transition-colors duration-200 ${textColor} hover:text-blue-500`}>
              {item.icon}
              <span className={`text-xs font-semibold mt-1`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
