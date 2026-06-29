'use client';

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a 
        href="https://wa.me/916355997080?text=Hi%20Microtechnique%20IT%2C%20I%27m%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-pulse-glow" style={{ animation: 'pulse-glow 2s infinite' }} />
        
        {/* WhatsApp Icon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
          <path d="M12.01 2.01001C6.49002 2.01001 2.01001 6.49001 2.01001 12.01C2.01001 13.91 2.54002 15.68 3.47002 17.21L2.01001 22.01L6.96001 20.66C8.47001 21.53 10.18 22.01 12.01 22.01C17.53 22.01 22.01 17.53 22.01 12.01C22.01 6.49001 17.53 2.01001 12.01 2.01001Z" fill="white"/>
          <path d="M16.92 14.54C16.67 14.41 15.46 13.82 15.23 13.73C15.01 13.65 14.84 13.6 14.68 13.85C14.51 14.09 14.05 14.64 13.91 14.81C13.77 14.97 13.62 14.99 13.38 14.87C13.13 14.75 12.34 14.49 11.4 13.66C10.66 13.01 10.15 12.21 10 11.96C9.85 11.71 9.98 11.58 10.1 11.45C10.21 11.33 10.35 11.16 10.47 11.02C10.59 10.87 10.64 10.77 10.72 10.61C10.8 10.45 10.76 10.3 10.7 10.18C10.64 10.05 10.15 8.85 9.94 8.35C9.74 7.87 9.54 7.94 9.39 7.94C9.25 7.94 9.09 7.94 8.92 7.94C8.76 7.94 8.49 8 8.27 8.25C8.04 8.5 7.42 9.07 7.42 10.24C7.42 11.4 8.29 12.53 8.41 12.69C8.53 12.85 10.09 15.26 12.45 16.27C13.01 16.51 13.45 16.66 13.79 16.76C14.35 16.94 14.86 16.91 15.26 16.85C15.71 16.78 16.67 16.26 16.88 15.68C17.08 15.1 17.08 14.6 17.01 14.49C16.95 14.4 16.79 14.34 16.54 14.21H16.92V14.54Z" fill="#25D366"/>
        </svg>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-card text-foreground text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-border shadow-lg">
          Chat with us
          {/* Arrow */}
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-card border-t border-r border-border rotate-45" />
        </div>
      </a>
      
      <style>{`
        @keyframes pulse-glow {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
