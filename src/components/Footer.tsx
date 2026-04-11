export default function Footer() {
  return (
    <footer className="bg-black border-t-4 border-cyan relative overflow-hidden">
      
      {/* Marquee */}
      <div className="marquee-container py-6 border-b border-gray-800 bg-cyan/5">
        <div className="marquee-content font-display text-2xl sm:text-4xl md:text-6xl text-cyan/50 tracking-widest">
          <span className="mx-8">/// SORREL ENTERPRISE</span>
          <span className="mx-8">/// DELAWARE C-CORP</span>
          <span className="mx-8">/// SERIES A READY</span>
          <span className="mx-8">/// SORREL ENTERPRISE</span>
          <span className="mx-8">/// DELAWARE C-CORP</span>
          <span className="mx-8">/// SERIES A READY</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          <div className="space-y-4">
            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl text-chrome">TERMINAL</h2>
            <p className="font-mono text-gray-500 text-sm tracking-widest">SYSTEM ONLINE. AWAITING INPUT.</p>
          </div>

          <div className="flex flex-col space-y-6 text-left md:text-right">
            <a href="#" className="font-display text-xl sm:text-3xl md:text-5xl text-gray-400 hover:text-cyan transition-colors relative group w-fit md:ml-auto">
              [ INSTITUTIONAL DECK ]
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="font-display text-xl sm:text-3xl md:text-5xl text-gray-400 hover:text-cyan transition-colors relative group w-fit md:ml-auto">
              [ INVESTOR PORTAL ]
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="font-display text-xl sm:text-3xl md:text-5xl text-gray-400 hover:text-cyan transition-colors relative group w-fit md:ml-auto">
              [ LEGAL ]
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

        </div>

        <div className="mt-16 md:mt-32 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} SORREL ENTERPRISE. ALL RIGHTS RESERVED.</p>
          <p>BUILT FOR THE NIGHT SHIFT.</p>
        </div>
      </div>
    </footer>
  );
}
