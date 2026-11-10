import { Send, Code2, Monitor, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white font-sans">
      
      {/* Хедер */}
      <header className="py-6 px-6 max-w-6xl mx-auto flex justify-between items-center border-b border-gray-800 relative">
        
        {/* Логотип слева */}
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Solara Logo" 
            className="h-10 w-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" 
          />
        </div>

        {/* Центральная часть: Неоновая надпись */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <div className="text-xs text-blue-400 font-mono tracking-widest mb-1">
            @Solara_dev
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wider uppercase drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
            Solara
          </h1>
        </div>

        {/* Кнопка справа */}
        <a 
          href="https://t.me/Solara_dev" 
          target="_blank" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
        >
          Связаться
        </a>
      </header>

      {/* Главный блок */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <span className="inline-block bg-blue-900/30 text-blue-400 border border-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Web Development Studio
        </span>
        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
          Создаю сайты, <br />
          <span className="text-blue-500">
            которые продают.
          </span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Современный дизайн, адаптив под телефоны и темная тема. Делаю под ключ: от идеи до запуска в интернете.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
          >
            Посмотреть работы
          </a>
          <a 
            href="https://t.me/Solara_dev" 
            target="_blank"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1A1A1A] border border-gray-800 text-white px-8 py-3 rounded-full font-bold hover:bg-[#252525] transition-colors"
          >
            <Send size={18} /> Написать в Telegram
          </a>
        </div>
      </section>

      {/* Что я делаю */}
      <section className="px-6 py-16 max-w-6xl mx-auto border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-[#161616] border border-gray-800">
            <Code2 className="mx-auto text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Чистый код</h3>
            <p className="text-gray-400 text-sm">Сайты на Next.js, которые быстро грузятся и не ломаются.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#161616] border border-gray-800">
            <Monitor className="mx-auto text-purple-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Темная тема</h3>
            <p className="text-gray-400 text-sm">Современный дизайн с поддержкой светлой и темной темы.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#161616] border border-gray-800">
            <Smartphone className="mx-auto text-green-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Адаптив</h3>
            <p className="text-gray-400 text-sm">Идеально выглядит на телефонах, планшетах и компьютерах.</p>
          </div>
        </div>
      </section>

      {/* Портфолио */}
      <section id="portfolio" className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Мои работы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group rounded-2xl overflow-hidden border border-gray-800 bg-[#161616]">
            <div className="aspect-video bg-gray-900 flex items-center justify-center text-gray-600">
              [Скоро здесь будет шаблон]
            </div>
          </div>
          <div className="group rounded-2xl overflow-hidden border border-gray-800 bg-[#161616]">
            <div className="aspect-video bg-gray-900 flex items-center justify-center text-gray-600">
              [Скоро здесь будет шаблон]
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-8 text-center border-t border-gray-800 text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Solara.Dev. Сделано с умом.</p>
      </footer>
    </main>
  );
}