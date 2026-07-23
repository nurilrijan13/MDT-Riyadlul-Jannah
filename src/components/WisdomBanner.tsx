/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Quote, Sparkles } from 'lucide-react';
import ShareButton from './ShareButton';

interface WisdomBannerProps {
  className?: string;
  compact?: boolean;
}

export default function WisdomBanner({ className = '', compact = false }: WisdomBannerProps) {
  const arabicText = "الحَقُّ بِلاَ نِظَامٍ يَغْلِبُهُ البَاطِلُ بِنِظَامٍ";
  const translationText = "Kebenaran yang tidak terorganisir (tidak terstruktur) dapat dikalahkan oleh kebatilan yang terorganisir.";
  const attribution = "— Sayyidina 'Ali bin Abi Thalib K.W.";

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white border-y border-emerald-800/40 py-8 px-6 sm:px-10 ${className}`}>
      {/* Background Ornamentation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -left-10 -bottom-10 w-40 h-40 border border-emerald-500/10 rounded-full pointer-events-none" />
      <div className="absolute -right-10 -top-10 w-40 h-40 border border-emerald-500/10 rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center space-y-4">
        {/* Badge Header */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-emerald-800/50 border border-emerald-500/30 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Mutiara Hikmah / Maqolah Masyhur</span>
        </div>

        {/* Arabic Calligraphy Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 my-1"
        >
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-200 tracking-wide font-extrabold leading-relaxed drop-shadow-xs" dir="rtl">
            {arabicText}
          </p>
        </motion.div>

        {/* Translation & Attribution */}
        <div className="max-w-3xl space-y-2">
          <p className="font-serif text-sm sm:text-base md:text-lg text-emerald-100/90 italic font-medium leading-relaxed">
            "{translationText}"
          </p>
          <p className="text-xs text-amber-300/80 font-mono tracking-wider font-semibold">
            {attribution}
          </p>
        </div>

        {/* Share Button */}
        <div className="pt-2">
          <ShareButton
            variant="dark-pill"
            label="Bagikan Maqolah"
            shareData={{
              title: "Mutiara Hikmah MDT Riyadlul Jannah",
              text: `${arabicText}\n\nArtinya:\n"${translationText}"\n\n(${attribution})`,
              category: "Mutiara Hikmah"
            }}
          />
        </div>
      </div>
    </div>
  );
}
