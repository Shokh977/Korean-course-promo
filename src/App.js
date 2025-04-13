import React from "react";

function App() {
  // Function to handle Telegram link click
  const handleTelegramClick = () => {
    // Check if fbq is available
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Telegram Channel Click',
        content_category: 'Korean Course',
      });
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#032414] to-[#0d2f2f] text-white flex items-center justify-center p-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          🇰🇷 Telegramda Bepul Koreys Tili Kursi
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Telegram kanalimizga qo‘shiling va <strong className="text-white">mutlaqo bepul koreys tili kursida</strong> ishtirok eting!
          Darslar har <span className="text-teal-400 font-semibold">Dushanba va Payshanba</span> kunlari bo‘lib o‘tadi.
        </p>
        <p className="text-gray-400">
          Kurs davomiyligi: <strong className="text-white">2 oy 2 hafta</strong> <br />
          Haftasiga 2 marta interaktiv va boshlang‘ichlar uchun qulay darslar.
        </p>
        <a
          href="https://t.me/shokhtv_me"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleTelegramClick}
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300"
        >
          👉 Telegram Kanalga Qo‘shilish
        </a>
        <p className="text-sm text-gray-500 mt-4">
          Ro‘yxatdan o‘tish shart emas. Faqat bosib qo‘shiling. Bugunoq koreys tilini o‘rganishni boshlang!
        </p>
      </div>
    </div>
  );
}

export default App;
