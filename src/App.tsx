/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw, Info } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';
import { TarotCard } from './types';
import { TAROT_DECK } from './constants';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Robust Image component with retry logic and creative animation
const TarotImage = ({ src, alt }: { src: string; alt: string }) => {
  const [retryCount, setRetryCount] = useState(0);
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setTimeout(() => {
      setRetryCount(prev => prev + 1);
      setImgSrc(`${src}?retry=${retryCount}`);
    }, 2000);
  };

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <motion.div 
      className="relative w-full h-full bg-neutral-50 flex items-center justify-center overflow-hidden"
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-all duration-500 shadow-sm hover:shadow-xl"
      />
      {retryCount > 0 && (
        <div className="absolute top-1 right-1">
          <RefreshCw className="animate-spin text-neutral-300" size={10} />
        </div>
      )}
      {/* Subtle overlay on hover */}
      <motion.div 
        className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
      />
    </motion.div>
  );
};

export default function App() {
  const [drawnCards, setDrawnCards] = useState<TarotCard[]>([]);
  const [interpretation, setInterpretation] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>('');

  const drawCards = useCallback(async () => {
    setIsLoading(true);
    setInterpretation('');
    
    const shuffled = [...TAROT_DECK].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    setDrawnCards(selected);

    try {
      const cardNames = selected.map((c, i) => `位置 ${i + 1}: ${c.name} (${c.nameEn})`).join('\n');
      const prompt = `你是一位專業的極簡主義塔羅占卜師。
      使用者抽到了五張牌，請按照經典五牌陣順序（1.過去、2.現在、3.未來、4.潛意識/原因、5.最終結果）進行解說。
      
      抽牌結果：
      ${cardNames}
      
      ${question ? `問題：${question}` : '請提供綜合運勢解讀。'}
      
      要求：
      1. 必須逐一針對每張牌的位置與含義進行精煉解說。
      2. 最後給出一個整體的極簡總結。
      3. 保持文字簡潔、有力且富有啟發性，避免冗長。
      4. 使用繁體中文回答。`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      setInterpretation(response.text || '解讀失敗。');
    } catch (error) {
      setInterpretation('發生錯誤，請稍後再試。');
    } finally {
      setIsLoading(false);
    }
  }, [question]);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white p-4 md:p-12">
      <div className="max-w-4xl mx-auto border-l-2 border-black pl-8">
        {/* Minimal Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-black tracking-tighter uppercase mb-2">AI 塔羅</h1>
          <p className="text-[10px] opacity-40 uppercase tracking-[0.3em]">Minimalist Divination Engine</p>
        </header>

        {/* Input Area */}
        <section className="mb-16">
          <div className="flex flex-col gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="請輸入您的問題..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full border-b-2 border-black py-4 focus:outline-none text-lg placeholder:opacity-20"
              />
            </div>
            <button
              onClick={drawCards}
              disabled={isLoading}
              className="self-start bg-black text-white px-10 py-3 hover:bg-neutral-800 disabled:bg-neutral-200 transition-all text-sm font-bold uppercase tracking-widest flex items-center gap-3"
            >
              {isLoading ? <RefreshCw className="animate-spin" size={16} /> : <Sparkles size={16} />}
              <span>{isLoading ? '解析中' : '抽取五張'}</span>
            </button>
          </div>
        </section>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          {drawnCards.length > 0 && (
            <motion.div
              key="cards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-16"
            >
              {drawnCards.map((card, index) => (
                <motion.div 
                  key={card.id + index} 
                  className="flex flex-col border border-black/10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="aspect-[2/3.2]">
                    <TarotImage src={card.image} alt={card.name} />
                  </div>
                  <div className="p-3 bg-neutral-50">
                    <div className="text-[10px] font-black mb-1">#{index + 1}</div>
                    <p className="text-xs font-bold truncate">{card.name}</p>
                    <p className="text-[8px] opacity-40 uppercase truncate">{card.nameEn}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interpretation */}
        <AnimatePresence>
          {(isLoading || interpretation) && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="border-t-2 border-black pt-12 mb-24"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-black rounded-full" />
                <h2 className="text-sm font-black uppercase tracking-widest">占卜解讀 / Interpretation</h2>
              </div>

              {isLoading ? (
                <div className="flex items-center gap-3 text-sm font-medium animate-pulse">
                  <RefreshCw className="animate-spin" size={14} />
                  <span>正在讀取星象頻率...</span>
                </div>
              ) : (
                <div className="markdown-body text-sm leading-relaxed max-w-2xl space-y-4">
                  <Markdown>{interpretation}</Markdown>
                </div>
              )}
            </motion.section>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="py-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-2 text-[10px] opacity-30 uppercase tracking-tighter">
            <Info size={10} />
            <span>數據來源：Wikimedia Commons / AI：Gemini 3.1</span>
          </div>
          <p className="text-[10px] opacity-20 uppercase tracking-tighter">© 2026 極簡塔羅 MINIMALIST TAROT</p>
        </footer>
      </div>
    </div>
  );
}
