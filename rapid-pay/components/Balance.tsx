
import React from 'react';

const Balance: React.FC = () => {
  return (
    <div className="px-4 mt-4">
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 5a1 1 0 112 0v2.252a1 1 0 01-.383.784l-1.31 1.049a1 1 0 01-1.414-1.414L9 6.793V5z" clipRule="evenodd" />
          </svg>
          <span className="text-3xl font-bold tracking-wider">10.000đ</span>
        </div>
        <button className="bg-orange-500 text-white text-xs font-semibold py-2 px-3 rounded-full flex items-center gap-1">
          <span>Quản lý tài khoản</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Balance;
