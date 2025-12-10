import React from 'react';
import { Calculator, Share2, Gift } from 'lucide-react';
import { INVENTORY_DATA, INVENTORY_AGE_DATA } from '../constants';
import InfoTooltip from './InfoTooltip';

const InventoryOverview: React.FC = () => {
  const allData = INVENTORY_DATA;
  const ageData = INVENTORY_AGE_DATA;

  return (
    <div className="space-y-8">
      {/* Section Header with Shortcut Buttons */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-2 gap-4">
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-3">2. FBA库存概况</h2>
        
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors shadow-sm">
            <Calculator className="w-4 h-4" />
            <span>仓储费测算</span>
          </button>
          <button className="flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors shadow-sm">
            <Share2 className="w-4 h-4" />
            <span>FBA库存共享</span>
          </button>
          <button className="flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors shadow-sm">
            <Gift className="w-4 h-4" />
            <span>FBA商品福袋</span>
          </button>
        </div>
      </div>

      {/* Main Inventory Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-base text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-800 font-bold text-sm uppercase tracking-wider">
              <tr>
                <th className="px-5 py-5 sticky left-0 bg-gray-100 z-10 border-r border-gray-200 whitespace-nowrap">业务员</th>
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">近一月销量</th>
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">FBA库存</th>
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">FBA可售</th>
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">预留</th>
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">正在入仓</th>
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">不可售</th>
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">在库查找</th>
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">SKU数</th>
                
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    在售SKU数
                    <InfoTooltip tooltipKey="active_sku" />
                  </div>
                </th>
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    动销率
                    <InfoTooltip tooltipKey="sell_through" />
                  </div>
                </th>
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    有效动销率
                    <InfoTooltip tooltipKey="effective_sell_through" />
                  </div>
                </th>

                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">库存大于零SKU</th>
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">可售大于零SKU</th>
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">需要补货SKU</th>
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">海运库存量</th>
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">海运占比</th>
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">年库存周转率</th>
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">预计销售时间</th>
                {/* NEW COLUMNS */}
                <th className="px-5 py-5 border-r border-gray-200 whitespace-nowrap">无review商品</th>
                <th className="px-5 py-5 whitespace-nowrap">无a+商品</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {allData.map((row, index) => (
                <tr key={index} className="bg-white hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 sticky left-0 bg-white border-r border-gray-200 font-medium text-gray-900 whitespace-nowrap">
                    {row.salesperson}
                  </td>
                  <td className="px-5 py-4">{row.lastMonthSales}</td>
                  <td className="px-5 py-4 font-medium">{row.fbaStock}</td>
                  <td className="px-5 py-4 font-medium text-gray-900">{row.fbaAvailable}</td>
                  <td className="px-5 py-4">{row.reserved}</td>
                  <td className="px-5 py-4">{row.inbound}</td>
                  <td className="px-5 py-4 text-gray-900">{row.unfulfillable}</td>
                  <td className="px-5 py-4">{row.researching}</td>
                  <td className="px-5 py-4 border-r border-gray-200">{row.skuCount}</td>
                  
                  <td className="px-5 py-4">{row.activeSkuCount}</td>
                  <td className="px-5 py-4">{row.sellThroughRate}</td>
                  <td className="px-5 py-4 border-r border-gray-200 font-medium text-gray-900">{row.effectiveSellThroughRate}</td>
                  
                  <td className="px-5 py-4">{row.largeInventorySku}</td>
                  <td className="px-5 py-4">{row.availableLargeSku}</td>
                  <td className="px-5 py-4 text-gray-900 font-medium">{row.restockSku}</td>
                  <td className="px-5 py-4">{row.oceanStock}</td>
                  <td className="px-5 py-4">{row.oceanRatio}</td>
                  <td className="px-5 py-4">{row.turnover}</td>
                  <td className="px-5 py-4 border-r border-gray-200">{row.estSalesTime}</td>
                  <td className="px-5 py-4 border-r border-gray-200">{row.noReviewSku}</td>
                  <td className="px-5 py-4">{row.noASku}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inventory Age Distribution (Renamed & Redesigned) */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-800 px-1 border-l-4 border-purple-600 pl-3">库龄分布</h3>
        
        {/* Changed from flex/space-y to grid layout for 2 items per row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {ageData.map((row, index) => (
             <div key={index} className="flex flex-col space-y-2">
                {/* Salesperson Name Header */}
                <div className="text-lg font-bold text-gray-800">
                  {row.salesperson}
                </div>
                
                {/* Specific Table per Salesperson */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full">
                   <div className="overflow-x-auto">
                      <table className="w-full text-base text-left text-gray-700">
                        <thead className="bg-gray-50 text-gray-700 font-medium text-sm">
                           <tr>
                              <th className="px-5 py-3 border-b border-gray-200 w-1/5">库龄</th>
                              <th className="px-5 py-3 border-b border-gray-200 w-1/5">有效件数</th>
                              <th className="px-5 py-3 border-b border-gray-200 w-1/5">头程总计</th>
                              <th className="px-5 py-3 border-b border-gray-200 w-1/5">商品成本总计</th>
                              <th className="px-5 py-3 border-b border-gray-200 w-1/5">绩效考核</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                           {row.details.map((detail, dIdx) => (
                              <tr key={dIdx} className="hover:bg-gray-50">
                                 <td className="px-5 py-3 text-gray-700">{detail.range}</td>
                                 <td className="px-5 py-3 text-gray-700">{detail.effectiveQty}</td>
                                 <td className="px-5 py-3 text-gray-700">{detail.firstLegCost > 0 ? detail.firstLegCost.toFixed(2) : '0'}</td>
                                 <td className="px-5 py-3 text-gray-700">{detail.productCost > 0 ? detail.productCost.toFixed(2) : '0'}</td>
                                 <td className="px-5 py-3 text-gray-700">{detail.performance === 0 ? '-0' : detail.performance.toFixed(2)}</td>
                              </tr>
                           ))}
                        </tbody>
                      </table>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryOverview;