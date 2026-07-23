/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import ShareModal, { ShareData } from './ShareModal';

interface ShareButtonProps {
  shareData: ShareData;
  variant?: 'icon' | 'button' | 'outline' | 'pill' | 'dark-pill';
  label?: string;
  className?: string;
}

export default function ShareButton({
  shareData,
  variant = 'button',
  label = 'Bagikan',
  className = ''
}: ShareButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getVariantStyle = () => {
    switch (variant) {
      case 'icon':
        return 'p-2 rounded-full hover:bg-slate-100 text-slate-600 hover:text-emerald-700 transition-colors cursor-pointer';
      case 'outline':
        return 'px-3 py-1.5 border border-slate-200 hover:border-emerald-500 rounded-lg text-xs font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/50 transition-all cursor-pointer flex items-center space-x-1.5';
      case 'pill':
        return 'px-3 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/60 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5';
      case 'dark-pill':
        return 'px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 backdrop-blur-xs';
      default:
        return 'px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-2xs hover:shadow-sm transition-all cursor-pointer flex items-center space-x-1.5';
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsModalOpen(true);
        }}
        title="Bagikan postingan ini"
        className={`${getVariantStyle()} ${className}`}
      >
        <Share2 className="w-3.5 h-3.5 shrink-0" />
        {variant !== 'icon' && <span>{label}</span>}
      </button>

      <ShareModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        shareData={shareData}
      />
    </>
  );
}
