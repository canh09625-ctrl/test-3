
import React from 'react';
import Header from './components/Header';
import QuickActions from './components/QuickActions';
import ServicesGrid from './components/ServicesGrid';
import BottomNav from './components/BottomNav';
import Balance from './components/Balance';

const App: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto h-screen bg-gray-100 font-sans flex flex-col overflow-hidden shadow-2xl">
      {/* Phone Notch Simulation */}
      <div className="bg-white dark:bg-black p-2 rounded-b-2xl mx-auto w-40 h-8 absolute top-0 left-1/2 -translate-x-1/2 z-20"></div>
      
      <div className="relative flex-grow overflow-y-auto pb-24">
        <div className="bg-blue-600 pb-20 rounded-b-3xl">
          <Header />
          <Balance />
        </div>
        
        <div className="-mt-16 px-4">
           <QuickActions />
        </div>
        
        <div className="px-4 mt-6">
          <ServicesGrid />
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default App;
