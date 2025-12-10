import React from 'react';
import { Calendar, RefreshCcw, TrendingUp, Package, Filter } from 'lucide-react';
import { MONTHLY_SALES_DATA, REALTIME_SALES_DATA, PRODUCT_METRICS } from '../constants';
import InfoTooltip from './InfoTooltip';

const StoreOverview: React.FC = () => {
  return (
    <div className="space-y-5">
      {/* Header with Title and Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 gap-4">
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-3">1. 店铺概况</h2>
        
        <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded shadow-sm border border-gray-200">
           <Filter className="w-5 h-5 text-gray-500" />
           <span className="text-base font-medium text-gray-700">月份:</span>
           <input 
              type="month" 
              defaultValue="2025-11"
              className="text-base border-none focus:ring-0 text-gray-800 font-medium p-0"
            />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Left Column: Sales Data */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* Monthly Sales Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2 text-gray-800 font-bold text-xl">
                <Calendar className="w-6 h-6 text-blue-600" />
                <span>本月销售</span>
              </div>
              <div className="text-base text-gray-700 bg-gray-100 px-3 py-1 rounded font-medium">
                2025-11
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8">
              {MONTHLY_SALES_DATA.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center text-base text-gray-500 mb-2 font-medium">
                    {item.label}
                    {item.tooltipKey && <InfoTooltip tooltipKey={item.tooltipKey} />}
                  </div>
                  {/* Color removed, just text-gray-900 */}
                  <div className={`font-bold text-3xl text-gray-900`}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Sales Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2 text-gray-800 font-bold text-xl">
                <TrendingUp className="w-6 h-6 text-green-600" />
                <span>实时数据</span>
              </div>
              <div className="text-sm text-gray-400 flex items-center">
                <RefreshCcw className="w-4 h-4 mr-1" />
                更新时间: 2025-12-10
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8">
              {REALTIME_SALES_DATA.map((item, index) => (
                <div key={index} className={`${index < 2 ? 'col-span-2 md:col-span-1' : ''}`}>
                  <div className="flex items-center text-base text-gray-500 mb-2 font-medium">
                    {item.label}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Product Overview */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6 border-b pb-4">
             <div className="flex items-center space-x-2 text-gray-800 font-bold text-xl">
                <Package className="w-6 h-6 text-purple-600" />
                <span>商品</span>
              </div>
              <button className="text-sm font-bold bg-blue-50 text-blue-700 px-4 py-2 rounded hover:bg-blue-100 transition border border-blue-100">
                利润分析
              </button>
          </div>

          <div className="grid grid-cols-2 gap-y-8 gap-x-6 flex-grow content-start">
            {PRODUCT_METRICS.map((metric, index) => (
              <div key={index} className="flex flex-col p-2 rounded hover:bg-gray-50 transition -mx-2">
                <span className="text-base text-gray-500 mb-1 font-medium">{metric.label}</span>
                {/* Colors removed, just text-gray-900 */}
                <span className="text-2xl font-bold text-gray-900">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StoreOverview;