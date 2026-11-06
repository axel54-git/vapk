import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  onLanguageClick: () => void;
  onMenuClick: () => void;
  currentLanguageLabel: string;
}

export const Header: React.FC<HeaderProps> = ({
  onLanguageClick,
  onMenuClick,
  currentLanguageLabel,
}) => {
  return (
    <header className="w-full flex items-center justify-between py-2.5 sm:py-3.5 px-3 sm:px-5 relative z-20">
      {/* Left side: Frosted menu button + VidMax Logo positioned on the left */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="App Menu"
          className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md border border-white/90 shadow-xs flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-white transition-all cursor-pointer group shrink-0"
        >
          <div className="grid grid-cols-2 gap-1 w-4 h-4 opacity-75 group-hover:opacity-100 transition-opacity">
            <div className="bg-gray-700 rounded-[2px]"></div>
            <div className="bg-gray-700 rounded-[2px]"></div>
            <div className="bg-gray-700 rounded-[2px]"></div>
            <div className="bg-gray-700 rounded-[2px]"></div>
          </div>
        </button>

        {/* VidMax Brand Logo & Wordmark */}
        <div className="flex items-center space-x-2 select-none">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#e60023] via-[#ff2b2b] to-[#ff6b6b] flex items-center justify-center shadow-[0_4px_12px_rgba(255,43,43,0.35)] shrink-0">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white text-white ml-0.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4.5V19.5L19 12L6 4.5Z" />
            </svg>
          </div>
          <div className="flex items-center tracking-tight font-black text-xl sm:text-2xl text-gray-900 leading-none">
            <span>Vid</span>
            <span className="text-[#ff2b2b]">Max</span>
          </div>
        </div>
      </div>

      {/* Right side: Language selector pill */}
      <button
        type="button"
        onClick={onLanguageClick}
        className="h-10 px-3 sm:px-4 rounded-xl bg-white/80 backdrop-blur-md border border-white/90 shadow-xs flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-white transition-all cursor-pointer shrink-0"
      >
        <span>{currentLanguageLabel}</span>
        <ChevronDown className="w-3.5 h-3.5 text-gray-400 stroke-[2.5]" />
      </button>
    </header>
  );
};
