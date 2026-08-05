/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Share2, Copy, Check, ExternalLink, Send, CheckCircle2, 
  Download, Image as ImageIcon, Sparkles, Smartphone, Layers, AlertCircle, RefreshCw
} from 'lucide-react';
import { generateStoryCard, urlToImageFile } from '../utils/storyCardGenerator';

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
  const [copiedImage, setCopiedImage] = useState(false);
  
  // Story Image & Canvas State
  const [isGenerating, setIsGenerating] = useState(false);
  const [storyDataUrl, setStoryDataUrl] = useState<string | null>(null);
  const [storyFile, setStoryFile] = useState<File | null>(null);
  const [rawImageFile, setRawImageFile] = useState<File | null>(null);
  const [shareMode, setShareMode] = useState<'poster' | 'original'>('poster');
  
  // Notification Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showIgGuide, setShowIgGuide] = useState(false);
  const [showWaGuide, setShowWaGuide] = useState(false);

  // Generate Story Poster Card on Modal Open
  useEffect(() => {
    if (!isOpen) {
      setStoryDataUrl(null);
      setStoryFile(null);
      setRawImageFile(null);
      setToastMessage(null);
      return;
    }

    let isMounted = true;
    setIsGenerating(true);

    async function prepareShareAssets() {
      try {
        // 1. Convert raw image URL to file if present
        if (shareData.imageUrl) {
          const rawFile = await urlToImageFile(shareData.imageUrl, `Foto_MDT_${Date.now()}.jpg`);
          if (isMounted && rawFile) {
            setRawImageFile(rawFile);
          }
        }

        // 2. Generate HD 1080x1920 Story Canvas Poster
        const res = await generateStoryCard({
          title: shareData.title,
          text: shareData.text,
          imageUrl: shareData.imageUrl,
          category: shareData.category,
        });

        if (isMounted) {
          setStoryDataUrl(res.dataUrl);
          setStoryFile(res.file);
        }
      } catch (err) {
        console.error('Failed to generate story poster', err);
      } finally {
        if (isMounted) setIsGenerating(false);
      }
    }

    prepareShareAssets();

    return () => {
      isMounted = false;
    };
  }, [isOpen, shareData]);

  if (!isOpen) return null;

  const currentUrl = shareData.url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle = shareData.title;
  const shareText = shareData.text ? shareData.text.slice(0, 250) + (shareData.text.length > 250 ? '...' : '') : '';
  
  // Formatted caption text
  const fullMessage = `*${shareTitle}*\n\n${shareText}\n\n📍 *MDT Riyadlul Jannah Pasir Gombong*\nSelengkapnya: ${currentUrl}`;
  const encodedMessage = encodeURIComponent(fullMessage);
  const encodedUrl = encodeURIComponent(currentUrl);

  const activeFile = shareMode === 'poster' ? storyFile : (rawImageFile || storyFile);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  // Helper to trigger direct file download
  const triggerDownload = (file: File | null, dataUrl: string | null) => {
    if (dataUrl) {
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = file ? file.name : `MDT_Story_Poster_${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      return true;
    }
    return false;
  };

  // Smart Native Share (Passes REAL Image File to OS Share Sheet!)
  const handleNativeImageShare = async () => {
    if (!activeFile) {
      showToast('Sedang menyiapkan gambar story, mohon tunggu sebentar...');
      return;
    }

    // Check if Web Share API supports file sharing
    if (navigator.canShare && navigator.canShare({ files: [activeFile] })) {
      try {
        await navigator.share({
          files: [activeFile],
          title: shareTitle,
          text: fullMessage,
        });
        showToast('Berhasil membagikan foto ke aplikasi Story!');
        return;
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          console.warn('Native file share error:', err);
        }
      }
    }

    // Fallback if file share not supported by device/browser: Download image + prompt
    triggerDownload(activeFile, storyDataUrl);
    showToast('Foto Poster Story HD telah diunduh ke Galeri HP Anda! Silakan buka WhatsApp / Instagram Story.');
  };

  // 1-Click WhatsApp Share (Triggers Native Image Share if supported, or Auto-Download + Open WA)
  const handleWhatsAppShare = async () => {
    // Copy caption text automatically
    navigator.clipboard.writeText(fullMessage);

    if (activeFile && navigator.canShare && navigator.canShare({ files: [activeFile] })) {
      try {
        await navigator.share({
          files: [activeFile],
          title: shareTitle,
          text: fullMessage,
        });
        return;
      } catch (err: any) {
        if (err.name === 'AbortError') return;
      }
    }

    // Fallback flow
    triggerDownload(activeFile, storyDataUrl);
    setShowWaGuide(true);
    showToast('Foto Poster Story HD otomatis diunduh & Teks disalin! Buka WhatsApp Status dan pilih foto terbaru.');
    
    // Open WA App after short delay
    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?text=${encodedMessage}`, '_blank');
    }, 1200);
  };

  // 1-Click Instagram Story Share
  const handleInstagramShare = async () => {
    // Copy caption text automatically
    navigator.clipboard.writeText(`${shareTitle}\n\n${shareText}\n\n${currentUrl}`);

    if (activeFile && navigator.canShare && navigator.canShare({ files: [activeFile] })) {
      try {
        await navigator.share({
          files: [activeFile],
          title: shareTitle,
          text: fullMessage,
        });
        return;
      } catch (err: any) {
        if (err.name === 'AbortError') return;
      }
    }

    // Fallback flow
    triggerDownload(activeFile, storyDataUrl);
    setShowIgGuide(true);
    showToast('Foto Poster Story HD otomatis diunduh! Buka Instagram Story dan pilih gambar dari Galeri HP.');

    setTimeout(() => {
      window.open('instagram://story-camera', '_blank');
    }, 1200);
  };

  // Copy Image to Clipboard (For Desktop / WA Web)
  const handleCopyImageToClipboard = async () => {
    if (!storyDataUrl) return;
    try {
      const res = await fetch(storyDataUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      setCopiedImage(true);
      showToast('Gambar Poster HD berhasil disalin ke Clipboard! Bisa langsung Ctrl+V / Paste ke WA Web / Chat.');
      setTimeout(() => setCopiedImage(false), 3000);
    } catch (err) {
      console.warn('Failed copy image to clipboard', err);
      triggerDownload(activeFile, storyDataUrl);
      showToast('Gambar Poster diunduh ke perangkat Anda.');
    }
  };

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

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-200 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs">
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
          initial={{ scale: 0.94, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-100 font-sans flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0F2F23] via-[#164332] to-[#1B4332] px-6 py-4 text-white flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-300 border border-white/10">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-extrabold text-base sm:text-lg leading-tight text-white">
                  Bagikan Foto &amp; Poster Story
                </h3>
                <p className="text-amber-200/80 text-[11px] font-medium">
                  WhatsApp Status &amp; Instagram Story (Gambar High Definition)
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>

          <div className="p-5 sm:p-6 space-y-5 overflow-y-auto flex-1">
            
            {/* Notification Toast Banner */}
            <AnimatePresence>
              {toastMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-emerald-900 text-emerald-50 border border-emerald-700 p-3.5 rounded-2xl text-xs flex items-start space-x-2.5 shadow-md"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <p className="leading-relaxed font-medium">{toastMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Interactive Story Poster Card Preview */}
            <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 text-white relative overflow-hidden">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                <div className="flex items-center space-x-2 text-xs font-bold text-amber-300">
                  <Smartphone className="w-4 h-4" />
                  <span>Preview Poster Story (1080x1920 HD)</span>
                </div>

                {/* Mode Selector (If original image exists) */}
                {shareData.imageUrl && rawImageFile && (
                  <div className="flex bg-slate-800 p-0.5 rounded-lg text-[10px] font-semibold">
                    <button
                      onClick={() => setShareMode('poster')}
                      className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                        shareMode === 'poster' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Poster Story HD
                    </button>
                    <button
                      onClick={() => setShareMode('original')}
                      className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                        shareMode === 'original' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Foto Asli
                    </button>
                  </div>
                )}
              </div>

              {/* Live Canvas Preview Image */}
              <div className="relative flex justify-center items-center py-2 bg-slate-950/80 rounded-xl border border-slate-800 min-h-[220px]">
                {isGenerating ? (
                  <div className="flex flex-col items-center justify-center py-8 space-y-2 text-slate-400">
                    <RefreshCw className="w-6 h-6 animate-spin text-amber-400" />
                    <span className="text-xs font-medium">Membuat Gambar Poster HD...</span>
                  </div>
                ) : shareMode === 'poster' && storyDataUrl ? (
                  <div className="relative group max-w-[200px] shadow-2xl rounded-lg overflow-hidden border border-slate-700">
                    <img
                      src={storyDataUrl}
                      alt="Story Poster Preview"
                      className="w-full h-auto max-h-[260px] object-contain rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        onClick={() => triggerDownload(activeFile, storyDataUrl)}
                        className="px-3 py-1.5 bg-amber-400 text-slate-950 font-bold text-xs rounded-full shadow-lg flex items-center space-x-1 cursor-pointer hover:scale-105 transition-transform"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Unduh HD</span>
                      </button>
                    </div>
                  </div>
                ) : shareData.imageUrl ? (
                  <img
                    src={shareData.imageUrl}
                    alt={shareTitle}
                    className="max-h-[240px] max-w-full object-contain rounded-lg border border-slate-700 shadow-md"
                  />
                ) : (
                  <div className="p-6 text-center text-xs text-slate-400">
                    Poster Siap Dibagikan
                  </div>
                )}
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                <span>Rasio 9:16 Pas Untuk WA Status &amp; IG Story</span>
                <span className="text-emerald-400 font-bold">Siap Dibagikan</span>
              </div>
            </div>

            {/* PRIMARY HERO SHARE BUTTON (Native File Share) */}
            <button
              onClick={handleNativeImageShare}
              disabled={isGenerating}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2.5 cursor-pointer disabled:opacity-50"
            >
              <Share2 className="w-4.5 h-4.5 text-amber-300" />
              <span>Bagikan Foto Gambar ke Status / Story (Satu Klik)</span>
            </button>

            {/* Quick 1-Click Platform Buttons */}
            <div className="space-y-2.5">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pilih Aplikasi Story</p>

              <div className="grid grid-cols-2 gap-3">
                {/* WhatsApp Status Direct Button */}
                <button
                  onClick={handleWhatsAppShare}
                  disabled={isGenerating}
                  className="flex items-center space-x-3 p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200/80 text-emerald-950 transition-all cursor-pointer group shadow-2xs text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-xs font-extrabold text-emerald-900">WhatsApp Status</h5>
                    <p className="text-[10px] text-emerald-700 font-medium">Buka WA dengan Gambar</p>
                  </div>
                </button>

                {/* Instagram Story Direct Button */}
                <button
                  onClick={handleInstagramShare}
                  disabled={isGenerating}
                  className="flex items-center space-x-3 p-3.5 rounded-2xl bg-pink-50 hover:bg-pink-100/90 border border-pink-200/80 text-pink-950 transition-all cursor-pointer group shadow-2xs text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0">
                    <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-xs font-extrabold text-pink-900">Instagram Story</h5>
                    <p className="text-[10px] text-pink-700 font-medium">Buka IG dengan Gambar</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Step-by-Step Helper Card */}
            <AnimatePresence>
              {(showWaGuide || showIgGuide) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs space-y-2 text-amber-950"
                >
                  <div className="flex items-center space-x-1.5 font-bold text-amber-900">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span>Panduan Gambar Story Muncul di HP:</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-1 text-slate-700 leading-relaxed font-light">
                    <li>Gambar Poster HD otomatis telah <strong>diunduh ke Galeri Foto HP</strong> Anda.</li>
                    <li>Teks keterangan/caption telah otomatis <strong>disalin ke Clipboard</strong>.</li>
                    <li>Buka aplikasi WhatsApp Status / Instagram Story, lalu <strong>pilih gambar terbaru dari Galeri</strong>.</li>
                  </ol>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Image Download & Copy Buttons Grid */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Unduh / Salin Gambar &amp; Link</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* 1. Download Image HD */}
                <button
                  onClick={() => {
                    triggerDownload(activeFile, storyDataUrl);
                    showToast('Poster Story HD berhasil diunduh!');
                  }}
                  disabled={isGenerating}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-2xs"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Unduh Gambar HD</span>
                </button>

                {/* 2. Copy Image (Clipboard) */}
                <button
                  onClick={handleCopyImageToClipboard}
                  disabled={isGenerating}
                  className={`w-full py-2.5 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                    copiedImage
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {copiedImage ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Gambar Disalin!</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon className="w-4 h-4 text-slate-500" />
                      <span>Salin Gambar</span>
                    </>
                  )}
                </button>

                {/* 3. Copy Link */}
                <button
                  onClick={handleCopyLink}
                  className={`w-full py-2.5 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                    copiedLink
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Link Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>Salin Link Web</span>
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
