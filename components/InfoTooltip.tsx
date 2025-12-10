import React from 'react';
import { HelpCircle } from 'lucide-react';
import { TOOLTIP_DEFINITIONS } from '../constants';

interface Props {
  tooltipKey: string;
  className?: string;
}

const InfoTooltip: React.FC<Props> = ({ tooltipKey, className = "" }) => {
  const text = TOOLTIP_DEFINITIONS[tooltipKey];
  
  if (!text) return null;

  return (
    <div className={`relative inline-flex items-center group ml-1 ${className}`}>
      <HelpCircle className="w-4 h-4 text-gray-400 cursor-help hover:text-blue-500 transition-colors" />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none text-center leading-relaxed">
        {text}
        {/* Triangle pointer */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};

export default InfoTooltip;