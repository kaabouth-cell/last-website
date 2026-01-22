
import React, { useState } from 'react';

const VideoDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl font-bold mb-4">شوفو كيفاش كتتلعب</h2>
        <p className="text-gray-500 mb-12 text-lg">تجربة حقيقية لزوجين وهم كيلعبو عشق</p>
        
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-brand-dark group cursor-pointer" onClick={() => setIsPlaying(true)}>
          {!isPlaying ? (
            <>
              <img src="https://picsum.photos/1200/675?romantic=3" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Video Thumbnail" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-brand-red/90 text-white flex items-center justify-center text-3xl shadow-2xl group-hover:scale-110 transition-transform">
                  <i className="fas fa-play ml-2"></i>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-white bg-brand-darkred">
               <i className="fas fa-video-slash text-6xl mb-4"></i>
               <p className="text-xl px-8">هنا كيكون الفيديو التوضيحي ديال اللعبة، كيشرح القواعد وكيبين التفاعل بين الزوجين.</p>
               <button onClick={(e) => {e.stopPropagation(); setIsPlaying(false)}} className="mt-8 text-white/70 hover:text-white underline">إغلاق</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
