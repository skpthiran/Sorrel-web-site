import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Fleet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.fleet-card');
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => '+=' + wrapperRef.current?.offsetWidth,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full overflow-hidden bg-asphalt relative">
      {/* Section Header */}
      <div className="absolute top-10 left-10 z-30 mix-blend-difference">
        <h2 className="font-display text-4xl md:text-6xl text-chrome opacity-20">THE FLEET</h2>
      </div>

      <div ref={wrapperRef} className="flex h-full w-[300vw]">
        {/* Bay 1: AURA */}
        <div className="fleet-card w-screen h-full flex items-center justify-center p-4 sm:p-8 md:p-24 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="w-full max-w-5xl h-[75vh] sm:h-auto sm:aspect-video bg-asphalt border border-cyan/30 shadow-[0_0_50px_rgba(0,229,255,0.1)] relative overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-16 group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-50"></div>
            
            <div className="flex justify-between items-start">
              <h3 className="font-display text-4xl sm:text-6xl md:text-8xl text-cyan">AURA</h3>
              <span className="font-mono text-cyan/70 text-xs sm:text-sm md:text-xl border border-cyan/30 px-3 py-1 sm:px-4 sm:py-2 rounded-full">BAY 01</span>
            </div>
            
            <div className="space-y-3 sm:space-y-6 max-w-2xl">
              <p className="font-mono text-base sm:text-xl md:text-2xl text-chrome font-bold">THE SPEARHEAD. $12B Market.</p>
              <p className="font-sans text-sm sm:text-lg md:text-xl text-gray-400">"Spontaneous proximity. We don't just connect you; we get you there."</p>
            </div>
          </div>
        </div>

        {/* Bay 2: ECHO */}
        <div className="fleet-card w-screen h-full flex items-center justify-center p-4 sm:p-8 md:p-24 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="w-full max-w-5xl h-[75vh] sm:h-auto sm:aspect-video bg-black border-2 border-gray-600 relative overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-16">
            <div className="flex justify-between items-start">
              <h3 className="font-display text-4xl sm:text-6xl md:text-8xl text-gray-200">ECHO</h3>
              <span className="font-mono text-gray-500 text-xs sm:text-sm md:text-xl border border-gray-600 px-3 py-1 sm:px-4 sm:py-2">BAY 02</span>
            </div>
            
            <div className="space-y-3 sm:space-y-6 max-w-2xl">
              <p className="font-mono text-base sm:text-xl md:text-2xl text-chrome font-bold">THE ANCHOR.</p>
              <p className="font-sans text-sm sm:text-lg md:text-xl text-gray-400">"Absolute privacy. Deep emotional mirroring. 60+ Day retention."</p>
            </div>
          </div>
        </div>

        {/* Bay 3: PACK */}
        <div className="fleet-card w-screen h-full flex items-center justify-center p-4 sm:p-8 md:p-24 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
          <div className="w-full max-w-5xl h-[75vh] sm:h-auto sm:aspect-video bg-[#1a1a1a] border-l-8 border-gray-400 relative overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-16" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/concrete-wall.png")' }}>
            <div className="flex justify-between items-start">
              <h3 className="font-display text-4xl sm:text-6xl md:text-8xl text-gray-300">PACK</h3>
              <span className="font-mono text-gray-400 text-xs sm:text-sm md:text-xl bg-gray-800 px-3 py-1 sm:px-4 sm:py-2">BAY 03</span>
            </div>
            
            <div className="space-y-3 sm:space-y-6 max-w-2xl">
              <p className="font-mono text-base sm:text-xl md:text-2xl text-chrome font-bold">THE CATALYST.</p>
              <p className="font-sans text-sm sm:text-lg md:text-xl text-gray-400">"Collaborative survival. The social engine for digitally native youth."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
