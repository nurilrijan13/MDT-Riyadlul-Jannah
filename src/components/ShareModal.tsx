/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Share2, Copy, Check, ExternalLink, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export interface ShareData {
  title: string;
  text?: string;
  url?: string;
  imageUrl?: string;
  category?: string;
}

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareData: ShareData;
}

export default function ShareModal({ isOpen, onClose, shareData }: ShareModalProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [showIgGuide, setShowIgGuide] = useState(false);

  if (!isOpen) return null;

  const currentUrl = shareData.url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle = shareData.title;
  const shareText = shareData.text ? shareData.text.slice(0, 250) + (shareData.text.length > 250 ? '...' : '') : '';
  
  // Format formatted text for messaging apps
  const fullMessage = `*${shareTitle}*\n\n${shareText}\n\n📍 *MDT Riyadlul Jannah Pasir Gombong*\nSelengkapnya: ${currentUrl}`;

  const encodedMessage = encodeURIComponent(fullMessage);
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(shareTitle);

  // Social URLs
  const waUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;
  const telegramUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent(shareTitle + '\n' + shareText)}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodedUrl}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(`${shareTitle}\n\n${shareData.text || ''}\n\nSumber: ${currentUrl}`);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl,
        });
      } catch (err) {
        console.log('Native share canceled or failed', err);
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-100 font-sans"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] px-6 py-5 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-extrabold text-lg leading-tight">Bagikan Informasi</h3>
                <p className="text-emerald-100/80 text-xs">MDT Riyadlul Jannah Pasir Gombong</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Share Preview Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex gap-4 items-start">
              {shareData.imageUrl && (
                <img
                  src={shareData.imageUrl}
                  alt={shareTitle}
                  className="w-20 h-20 object-cover rounded-xl shrink-0 border border-slate-200 shadow-2xs"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="space-y-1 min-w-0 flex-1">
                {shareData.category && (
                  <span className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[9px] font-bold uppercase tracking-wider rounded-md">
                    {shareData.category}
                  </span>
                )}
                <h4 className="font-bold text-slate-800 text-sm line-clamp-2 leading-snug">
                  {shareTitle}
                </h4>
                {shareData.text && (
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {shareData.text}
                  </p>
                )}
              </div>
            </div>

            {/* Mobile Native Share Button if supported */}
            {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
              <button
                onClick={handleNativeShare}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Bagikan Langsung via Aplikasi Hp</span>
              </button>
            )}

            {/* Social Media Buttons Grid */}
            <div className="space-y-2.5">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pilih Media Sosial</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* WhatsApp */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/60 text-emerald-900 transition-all cursor-pointer group shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-1.5">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold">WhatsApp</span>
                </a>

                {/* Facebook */}
                <a
                  href={fbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-blue-50 hover:bg-blue-100/80 border border-blue-200/60 text-blue-900 transition-all cursor-pointer group shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-1.5">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold">Facebook</span>
                </a>

                {/* Telegram */}
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-sky-50 hover:bg-sky-100/80 border border-sky-200/60 text-sky-900 transition-all cursor-pointer group shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#229ED9] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-1.5">
                    <Send className="w-5 h-5 ml-0.5" />
                  </div>
                  <span className="text-[11px] font-bold">Telegram</span>
                </a>

                {/* Instagram Guide Trigger */}
                <button
                  onClick={() => setShowIgGuide(!showIgGuide)}
                  className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-pink-50 hover:bg-pink-100/80 border border-pink-200/60 text-pink-900 transition-all cursor-pointer group shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-1.5">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold">Instagram</span>
                </button>
              </div>
            </div>

            {/* Instagram Instructions Box (If clicked) */}
            <AnimatePresence>
              {showIgGuide && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-pink-50/80 border border-pink-200 rounded-2xl p-4 text-xs space-y-2 text-pink-950"
                >
                  <div className="flex items-center space-x-1.5 font-bold text-pink-900">
                    <CheckCircle2 className="w-4 h-4 text-pink-600" />
                    <span>Cara Share ke Instagram (Story / Feed):</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-1 text-slate-700 leading-relaxed font-light">
                    <li>Klik <strong>"Salin Teks Berita"</strong> di bawah ini untuk menyalin caption.</li>
                    <li>Buka aplikasi <strong>Instagram</strong> di HP Anda.</li>
                    <li>Buat Story atau Postingan baru, tempel (paste) teks caption dan tambahkan link website MDT.</li>
                  </ol>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Copy Links & Text Options */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Salin Tautan / Teks</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Copy Link Button */}
                <button
                  onClick={handleCopyLink}
                  className={`w-full py-2.5 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                    copiedLink
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Link Berhasil Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>Salin Link Website</span>
                    </>
                  )}
                </button>

                {/* Copy Text Button */}
                <button
                  onClick={handleCopyText}
                  className={`w-full py-2.5 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                    copiedText
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {copiedText ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Teks Berhasil Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>Salin Teks Berita</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Footer note */}
            <div className="text-center pt-2">
              <p className="text-[10px] text-slate-400">
                MDT Riyadlul Jannah Pasir Gombong • Syiar Islam &amp; Keberkahan Bersama
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
