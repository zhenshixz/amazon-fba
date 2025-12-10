import React, { useState } from 'react';
import { Store, Search } from 'lucide-react';
import StoreOverview from './components/StoreOverview';
import InventoryOverview from './components/InventoryOverview';

const App: React.FC = () => {
  const [activeStore, setActiveStore] = useState('Uni Clau');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-20">
      
      {/* Main Content - Full Width Layout */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Header Section: Title + Store Selector */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
          <div className="flex flex-col">
            <h1 className="text-3xl font-extrabold text-gray-900">亚马逊FBA数据统计看板</h1>
            <p className="mt-1 text-base text-gray-500">
               全面掌握店铺运营与库存健康状况
            </p>
          </div>

          <div className="flex items-center space-x-3">
             <div className="flex items-center bg-white rounded-lg px-4 py-2 border border-gray-300 shadow-sm">
                <Store className="w-5 h-5 text-gray-600 mr-2" />
                <span className="text-base font-medium text-gray-700 mr-2">店铺:</span>
                <select 
                  className="bg-transparent text-base font-bold focus:outline-none text-gray-900 cursor-pointer"
                  value={activeStore}
                  onChange={(e) => setActiveStore(e.target.value)}
                >
                  <option>Uni Clau</option>
                  <option>Mycherish</option>
                  <option>Other Store</option>
                </select>
             </div>
          </div>
        </div>

        {/* Dashboard Sections */}
        <div className="space-y-12">
          
          {/* Section 1: Store Overview */}
          <section>
            <StoreOverview />
          </section>

          {/* Section 2: FBA Inventory Overview */}
          <section>
            <InventoryOverview />
          </section>

        </div>
      </main>
    </div>
  );
};

export default App;