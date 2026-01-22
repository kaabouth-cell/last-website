
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIQuestionGenerator: React.FC = () => {
  const [level, setLevel] = useState('romantic');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const levels = [
    { id: 'light', name: 'نفوجو شوية', icon: 'fa-laugh-beam', color: 'orange' },
    { id: 'romantic', name: 'كايتشاير', icon: 'fa-heart', color: 'pink' },
    { id: 'deep', name: 'حنا مفاهمين', icon: 'fa-brain', color: 'blue' },
    { id: 'bold', name: 'طلق السخون', icon: 'fa-fire', color: 'red' },
  ];

  const generateQuestion = async () => {
    setLoading(true);
    setIsFlipped(false);
    setQuestion('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const levelNames: {[key: string]: string} = {
        light: 'Funny and light interaction',
        romantic: 'Deep romantic connection',
        deep: 'Serious communication and future planning',
        bold: 'Bold and spicy passion'
      };

      const prompt = `You are the creator of "3ichq", a Moroccan card game for couples. 
      Generate ONE unique, creative, and engaging question or activity for a couple.
      Level: ${levelNames[level]}.
      Language: Moroccan Darija (using Arabic script).
      The question should be culturally relevant to Moroccans.
      Format: Return ONLY the text of the question. No quotes, no intro.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setQuestion(response.text || 'خطأ في التحميل، حاول مرة أخرى');
      setIsFlipped(true);
    } catch (error) {
      console.error(error);
      setQuestion('عذراً، وقع مشكل فالاتصال. جرب مرة أخرى.');
      setIsFlipped(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl font-bold mb-4">جرب ورقة من اللعبة دابا!</h2>
        <p className="text-gray-500 mb-12 text-lg">الذكاء الاصطناعي ديال "عشق" غا يعطيك عينة من الأسئلة اللي كاينين</p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {levels.map((l) => (
            <button
              key={l.id}
              onClick={() => setLevel(l.id)}
              className={`px-6 py-3 rounded-2xl font-bold transition-all flex items-center gap-2 border-2 
                ${level === l.id 
                  ? 'bg-brand-red border-brand-red text-white shadow-lg scale-105' 
                  : 'bg-white border-gray-100 text-gray-500 hover:border-brand-red/30'}`}
            >
              <i className={`fas ${l.icon}`}></i>
              {l.name}
            </button>
          ))}
        </div>

        <div className="relative perspective-1000 max-w-sm mx-auto h-80 cursor-pointer group" onClick={generateQuestion}>
          <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
            {/* Front Side */}
            <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-brand-red to-brand-darkred rounded-[2rem] shadow-2xl p-8 flex flex-col items-center justify-center text-white border-4 border-white/20">
              <div className="text-6xl mb-4 animate-heart-beat">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-2xl font-black mb-2">اضغط باش تجبد ورقة</h3>
              <p className="opacity-70">المستوى: {levels.find(l => l.id === level)?.name}</p>
            </div>

            {/* Back Side (Question) */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-[2rem] shadow-2xl p-10 flex flex-col items-center justify-center border-4 border-brand-red/10 text-brand-dark">
              <div className="absolute top-4 right-4 text-brand-red/20 text-4xl">
                <i className="fas fa-quote-right"></i>
              </div>
              <p className="text-2xl font-bold leading-relaxed text-center">
                {loading ? (
                  <span className="flex gap-2">
                    <span className="w-3 h-3 bg-brand-red rounded-full animate-bounce"></span>
                    <span className="w-3 h-3 bg-brand-red rounded-full animate-bounce delay-100"></span>
                    <span className="w-3 h-3 bg-brand-red rounded-full animate-bounce delay-200"></span>
                  </span>
                ) : question}
              </p>
              <div className="absolute bottom-6 font-serif font-bold text-brand-red tracking-widest opacity-30">3ICHQ - عشق</div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <button 
            disabled={loading}
            onClick={generateQuestion}
            className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand-red transition-all shadow-xl disabled:opacity-50"
          >
            {isFlipped ? 'عطيني سؤال آخر' : 'جبد ورقة عشوائية'}
          </button>
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
};

export default AIQuestionGenerator;
