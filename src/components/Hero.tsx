import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the hero section and scale the text
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
        },
      });

      tl.to(textRef.current, {
        scale: 50,
        opacity: 0,
        ease: 'power2.inOut',
      }).to(bgRef.current, {
        opacity: 0,
        ease: 'power2.inOut',
      }, '<');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-asphalt">
      {/* Background Image/Video Placeholder */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-asphalt/80 z-10 mix-blend-multiply"></div>
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2544&auto=format&fit=crop" 
          alt="Dark city fiber optics" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-7xl mx-auto">
        <h1 
          ref={textRef}
          className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-none tracking-tighter text-chrome"
          style={{ transformOrigin: '35% 25%' }}
        >
          WE M<span className="text-cyan">O</span>VE HUMAN<br/>CONNECTION.
        </h1>
        
        <p className="mt-6 md:mt-8 font-mono text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl uppercase tracking-widest leading-relaxed px-2 md:px-0">
          The digital realm is isolated. We are the heavy infrastructure built to fix it. The multi-billion dollar engine of proximity.
        </p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 font-mono text-xs text-cyan tracking-[0.3em] animate-pulse">
        SCROLL TO INITIATE
      </div>
    </section>
  );
}
