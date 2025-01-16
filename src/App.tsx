import React, { useState, useEffect } from 'react';
import { Flame, Skull, Bomb, Zap, Timer, Sword } from 'lucide-react';

function App() {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date('2016-03-01T00:00:00');

    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      
      let monthsTotal = (now.getFullYear() - startDate.getFullYear()) * 12;
      monthsTotal += now.getMonth() - startDate.getMonth();
      
      const years = Math.floor(monthsTotal / 12);
      const months = monthsTotal % 12;

      setTimeElapsed({
        years,
        months,
        days: days % 30,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="min-h-screen bg-black flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="text-center relative z-10">
        <div className="flex items-center justify-center mb-8 animate-pulse">
          <Skull className="w-16 h-16 text-red-500 mr-3" strokeWidth={2.5} />
          <h1 className="text-5xl md:text-6xl font-bold text-red-500" style={{ textShadow: '0 0 10px rgba(255,0,0,0.5)' }}>
            MEHMET ALI'S EXPERIENCE COUNTER
          </h1>
          <Skull className="w-16 h-16 text-red-500 ml-3" strokeWidth={2.5} />
        </div>
        
        <div className="bg-black/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(255,0,0,0.3)] border-2 border-red-900">
          <div className="flex items-center justify-center mb-8">
            <Flame className="w-10 h-10 text-orange-500 mr-2 animate-pulse" />
            <h2 className="text-3xl text-orange-500 font-bold uppercase tracking-wider">
              Years of Destruction
            </h2>
            <Flame className="w-10 h-10 text-orange-500 ml-2 animate-pulse" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {[
              { label: 'Years', value: timeElapsed.years, icon: Sword },
              { label: 'Months', value: timeElapsed.months, icon: Bomb },
              { label: 'Days', value: timeElapsed.days, icon: Zap },
              { label: 'Hours', value: timeElapsed.hours, icon: Timer },
              { label: 'Minutes', value: timeElapsed.minutes, icon: Flame },
              { label: 'Seconds', value: timeElapsed.seconds, icon: Skull }
            ].map((item) => (
              <div key={item.label} 
                className="bg-gradient-to-br from-red-900/40 to-black rounded-lg p-6 transform hover:scale-105 transition-transform duration-200 border border-red-900/50 hover:border-red-500"
              >
                <item.icon className="w-8 h-8 mx-auto mb-2 text-red-500" />
                <div className="text-4xl md:text-5xl font-bold text-white mb-1" style={{ textShadow: '0 0 10px rgba(255,0,0,0.5)' }}>
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-red-500 text-sm font-bold uppercase tracking-widest">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-4">
          <Zap className="w-8 h-8 text-yellow-500 animate-pulse" />
          <p className="text-red-500 text-xl font-bold uppercase tracking-widest">
            Crushing it since March 1, 2016
          </p>
          <Zap className="w-8 h-8 text-yellow-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default App;