import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Founders() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.founder-card', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-32 bg-asphalt relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-5xl md:text-7xl text-chrome mb-10 md:mb-20 text-center">THE LEAD DRIVERS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          
          {/* Founder 1 */}
          <div className="founder-card group cursor-pointer">
            <a href="https://skpthiran.github.io/Thiran-Wijesingha-portfolio/" target="_blank" rel="noopener noreferrer">
            <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-concrete glitch-hover border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Thiran Wijesingha" 
                className="w-full h-full object-cover grayscale contrast-150 brightness-75 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-transparent to-transparent opacity-80"></div>
            </div>
            </a>
            <h3 className="font-display text-3xl md:text-4xl text-chrome mb-2 group-hover:text-cyan transition-colors">THIRAN WIJESINGHA</h3>
            <p className="font-mono text-cyan text-sm mb-4 tracking-widest">CEO / ARCHITECTURAL DIRECTOR</p>
            <p className="font-sans text-gray-400 text-lg">"Building the unified stack. Defining the algorithm."</p>
          </div>

          {/* Founder 2 */}
          <div className="founder-card group cursor-pointer md:mt-24">
            <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-concrete glitch-hover border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop" 
                alt="Kaveen" 
                className="w-full h-full object-cover grayscale contrast-150 brightness-75 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-transparent to-transparent opacity-80"></div>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-chrome mb-2 group-hover:text-cyan transition-colors">KAVEEN</h3>
            <p className="font-mono text-cyan text-sm mb-4 tracking-widest">CFO / EUROPEAN OPERATIONS</p>
            <p className="font-sans text-gray-400 text-lg">"Capturing capital. Executing the Delaware Flip."</p>
          </div>

        </div>
      </div>
    </section>
  );
}
