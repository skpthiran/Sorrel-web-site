import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Route() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to('.topo-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Draw line animation
      if (lineRef.current) {
        const length = lineRef.current.getTotalLength();
        gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length });
        
        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'center center',
            scrub: 1,
          },
        });
      }

      // Text reveal
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center bottom',
          toggleActions: 'play none none reverse',
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-asphalt flex items-center justify-center py-32">
      {/* Topographical Map Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="topo-bg absolute -inset-[20%] bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-asphalt via-transparent to-asphalt"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* Map Visualization */}
        <div className="w-full relative h-[400px] md:h-[600px] flex items-center justify-between mb-16">
          
          {/* Colombo Node */}
          <div className="absolute left-[10%] md:left-[20%] top-[60%] flex flex-col items-center">
            <div className="w-4 h-4 bg-cyan rounded-full shadow-[0_0_20px_#00E5FF] animate-pulse"></div>
            <div className="mt-4 text-center">
              <h4 className="font-display text-2xl md:text-4xl text-chrome">COLOMBO</h4>
              <p className="font-mono text-cyan text-sm">UTC+5:30</p>
            </div>
          </div>

          {/* Connection Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              ref={lineRef}
              d="M 20 60 Q 50 20 80 40" 
              fill="none" 
              stroke="#00E5FF" 
              strokeWidth="0.5" 
              className="drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Naples Node */}
          <div className="absolute right-[10%] md:right-[20%] top-[40%] flex flex-col items-center">
            <div className="w-4 h-4 bg-cyan rounded-full shadow-[0_0_20px_#00E5FF] animate-pulse"></div>
            <div className="mt-4 text-center">
              <h4 className="font-display text-2xl md:text-4xl text-chrome">NAPLES</h4>
              <p className="font-mono text-cyan text-sm">UTC+1</p>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div ref={textRef} className="text-center max-w-4xl">
          <h2 className="font-display text-5xl md:text-7xl text-chrome mb-8 leading-tight">
            NO EXCUSES.<br/>
            <span className="text-cyan">AROUND THE CLOCK.</span>
          </h2>
          <p className="font-mono text-lg md:text-xl text-gray-400 leading-relaxed">
            "Our cross-border jurisdiction isn't a challenge; it's our engine. Capturing European non-dilutive capital while architecting unified Monorepo codebases. We run the night shift."
          </p>
        </div>

      </div>
    </section>
  );
}
