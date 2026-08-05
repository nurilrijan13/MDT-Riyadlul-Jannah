/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import schoolLogoUrl from '../assets/images/lambang_mdt_rj_logo.png';

export interface StoryCardOptions {
  title: string;
  text?: string;
  imageUrl?: string;
  category?: string;
  date?: string;
}

/**
 * Loads an image safely into HTMLImageElement
 */
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = src;
  });
}

/**
 * Helper to wrap text cleanly on Canvas
 */
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines: number = 4
): number {
  const words = text.split(' ');
  let line = '';
  let currentY = y;
  let linesCount = 0;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      linesCount++;
      if (linesCount >= maxLines) {
        ctx.fillText(line.trim() + '...', x, currentY);
        return currentY + lineHeight;
      }
      ctx.fillText(line, x, currentY);
      line = words[n] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, currentY);
  return currentY + lineHeight;
}

/**
 * Generates a vertical 9:16 (1080x1920) HD Story Card Poster image for WhatsApp Status & Instagram Story
 */
export async function generateStoryCard(options: StoryCardOptions): Promise<{
  blob: Blob;
  file: File;
  dataUrl: string;
}> {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas context not available');
  }

  // 1. Background Gradient (Luxury Emerald & Dark Green)
  const bgGrad = ctx.createLinearGradient(0, 0, 0, 1920);
  bgGrad.addColorStop(0, '#0F2F23'); // Deep Emerald
  bgGrad.addColorStop(0.35, '#164332');
  bgGrad.addColorStop(0.7, '#1B4332');
  bgGrad.addColorStop(1, '#0B2319');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1080, 1920);

  // Decorative Top Gold Accent Curve
  ctx.fillStyle = '#D4AF37';
  ctx.globalAlpha = 0.15;
  ctx.beginPath();
  ctx.arc(540, -300, 800, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1.0;

  // Decorative Border Frame
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)'; // Gold border
  ctx.lineWidth = 6;
  ctx.strokeRect(36, 36, 1080 - 72, 1920 - 72);

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 2;
  ctx.strokeRect(48, 48, 1080 - 96, 1920 - 96);

  // 2. Load School Logo
  let logoImg: HTMLImageElement | null = null;
  try {
    logoImg = await loadImage(schoolLogoUrl);
  } catch (e) {
    console.warn('Could not load logo for canvas story card', e);
  }

  // Draw Header
  const startY = 100;
  if (logoImg) {
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.4)';
    ctx.shadowBlur = 15;
    ctx.drawImage(logoImg, 540 - 65, startY, 130, 130);
    ctx.restore();
  }

  // Header Typography
  ctx.textAlign = 'center';
  ctx.fillStyle = '#E5C158'; // Gold
  ctx.font = 'bold 22px sans-serif';
  ctx.fillText('MADRASAH DINIYAH TAKLIMIYAH', 540, startY + 160);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 48px serif';
  ctx.fillText('RIYADLUL JANNAH', 540, startY + 220);

  // Arabic Title Subtitle
  ctx.fillStyle = '#E5C158';
  ctx.font = 'bold 30px serif';
  ctx.fillText('المدرسة الدّينيّة التعليميّة رياض الجنّة', 540, startY + 270);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
  ctx.font = '18px sans-serif';
  ctx.fillText('Pasir Gombong, Cikarang Utara, Kab. Bekasi', 540, startY + 305);

  // Gold Divider Line
  ctx.strokeStyle = '#D4AF37';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(340, startY + 330);
  ctx.lineTo(740, startY + 330);
  ctx.stroke();

  // 3. Draw Main Image (if available)
  let mainImg: HTMLImageElement | null = null;
  if (options.imageUrl) {
    try {
      mainImg = await loadImage(options.imageUrl);
    } catch (err) {
      console.warn('Could not load main image for story card', err);
    }
  }

  let cardTop = startY + 360;

  if (mainImg) {
    const imgBoxWidth = 920;
    const imgBoxHeight = 820;
    const imgX = (1080 - imgBoxWidth) / 2;
    const imgY = cardTop;

    // Draw Image Card Background Drop Shadow
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
    ctx.shadowBlur = 30;
    ctx.shadowOffsetY = 15;

    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.roundRect(imgX, imgY, imgBoxWidth, imgBoxHeight, 32);
    ctx.fill();
    ctx.restore();

    // Draw Main Image cropped nicely inside rounded rect
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(imgX + 8, imgY + 8, imgBoxWidth - 16, imgBoxHeight - 16, 26);
    ctx.clip();

    // Scale aspect cover
    const imgRatio = mainImg.width / mainImg.height;
    const boxRatio = (imgBoxWidth - 16) / (imgBoxHeight - 16);
    let drawW, drawH, drawX, drawY;

    if (imgRatio > boxRatio) {
      drawH = imgBoxHeight - 16;
      drawW = drawH * imgRatio;
      drawX = imgX + 8 - (drawW - (imgBoxWidth - 16)) / 2;
      drawY = imgY + 8;
    } else {
      drawW = imgBoxWidth - 16;
      drawH = drawW / imgRatio;
      drawX = imgX + 8;
      drawY = imgY + 8 - (drawH - (imgBoxHeight - 16)) / 2;
    }

    ctx.drawImage(mainImg, drawX, drawY, drawW, drawH);
    ctx.restore();

    cardTop = imgY + imgBoxHeight + 45;
  } else {
    // If no main image, add space
    cardTop = startY + 440;
  }

  // 4. Content Area (Category, Title, Text)
  const contentWidth = 900;
  const contentX = 540;

  // Category Badge Pill
  if (options.category) {
    const catText = options.category.toUpperCase();
    ctx.font = 'bold 20px sans-serif';
    const catMetrics = ctx.measureText(catText);
    const pillW = catMetrics.width + 48;
    const pillH = 44;
    const pillX = 540 - pillW / 2;

    ctx.fillStyle = 'rgba(212, 175, 55, 0.25)';
    ctx.beginPath();
    ctx.roundRect(pillX, cardTop, pillW, pillH, 22);
    ctx.fill();

    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#FCE38A';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(catText, 540, cardTop + 29);

    cardTop += pillH + 30;
  }

  // Title Text
  ctx.textAlign = 'center';
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 42px serif';
  cardTop = wrapText(ctx, options.title, contentX, cardTop, contentWidth, 54, 3);

  cardTop += 15;

  // Description / Text Excerpt
  if (options.text) {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.font = '24px sans-serif';
    const cleanText = options.text.replace(/\s+/g, ' ').trim();
    cardTop = wrapText(ctx, cleanText, contentX, cardTop, contentWidth, 36, 4);
  }

  // 5. Footer Badge & Watermark
  const footerY = 1750;

  // Gold Footer Box
  ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
  ctx.beginPath();
  ctx.roundRect(90, footerY - 35, 900, 100, 24);
  ctx.fill();
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.fillStyle = '#E5C158';
  ctx.font = 'bold 22px sans-serif';
  ctx.fillText('🌐 WEEBSITE RESMI: MDTRIYADLULJANNAH.COM', 540, footerY);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = '18px sans-serif';
  ctx.fillText('Mari Berbagi Kebaikan & Informasi Syiar Islam', 540, footerY + 34);

  // Return Blob & File
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Failed to create blob from canvas'));
        return;
      }
      const dataUrl = canvas.toDataURL('image/png');
      const filename = `MDT_Riyadlul_Jannah_Story_${Date.now()}.png`;
      const file = new File([blob], filename, { type: 'image/png' });
      resolve({ blob, file, dataUrl });
    }, 'image/png');
  });
}

/**
 * Fetches an image URL and converts it to an Image File directly (for sharing original photo)
 */
export async function urlToImageFile(url: string, filename: string = 'foto_mdt_story.jpg'): Promise<File | null> {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const mime = blob.type || 'image/jpeg';
    return new File([blob], filename, { type: mime });
  } catch (e) {
    console.warn('Failed to convert URL to file', e);
    return null;
  }
}
