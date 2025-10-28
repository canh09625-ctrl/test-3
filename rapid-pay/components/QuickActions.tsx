
import React from 'react';
import { QUICK_ACTIONS } from '../constants';

const QuickActions: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <div className="grid grid-cols-4 gap-2 text-center">
        {QUICK_ACTIONS.map((action) => (
          <button key={action.label} className="flex flex-col items-center justify-start text-gray-700 hover:text-blue-600 transition-colors duration-200 group">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${action.color} group-hover:opacity-90 transition-opacity`}>
              {action.icon}
            </div>
            <span className="text-xs font-semibold mt-2">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
