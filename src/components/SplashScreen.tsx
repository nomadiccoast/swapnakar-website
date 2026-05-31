import { useState, useRef, useCallback, useEffect } from 'react';

function useIsPortrait() {
  const [isPortrait, setIsPortrait] = useState(
    () => window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    const mq = window.matchMedia('(orientation: portrait)');
    const handler = (e: MediaQueryListEvent) => setIsPortrait(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isPortrait;
}

interface SplashScreenProps {
  onFinished: () => void;
}

export function SplashScreen({ onFinished }: SplashScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<'gate' | 'playing' | 'fadeout'>('gate');
  const hasFinished = useRef(false);
  const isPortrait = useIsPortrait();

  const videoSrc = isPortrait ? '/splash-portrait.mp4' : '/splash.mp4';

  const finish = useCallback(() => {
    if (hasFinished.current) return;
    hasFinished.current = true;
    setPhase('fadeout');
    setTimeout(() => onFinished(), 900);
  }, [onFinished]);

  const handleEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    setPhase('playing');
    video.muted = false;
    video.play().catch(() => finish());
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black transition-all duration-[900ms] ease-out ${
        phase === 'fadeout' ? 'opacity-0 scale-[1.03] pointer-events-none' : ''
      }`}
    >
      {/* ---- Gate Screen ---- */}
      {phase === 'gate' && (
        <div className="absolute inset-0 flex items-center justify-center animate-[fadeInUp_1s_ease-out_both]">
          {/* Subtle ambient glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(184,147,90,0.04)_0%,transparent_70%)] animate-[breathe_6s_ease-in-out_infinite_alternate]" />

          <div className="relative flex flex-col items-center gap-7">
            {/* Top line */}
            <div className="w-10 h-px bg-[#B8935A]/20" />

            {/* Welcome text */}
            <p className="font-serif text-xs tracking-[0.35em] uppercase text-white/20">
              Welcome
            </p>

            {/* Enter button */}
            <button
              onClick={handleEnter}
              id="enter-website-btn"
              className="group relative flex items-center gap-3.5 px-12 py-4 border border-[#B8935A]/25 overflow-hidden transition-all duration-500 ease-out hover:border-[#B8935A]/60 active:scale-[0.97]"
            >
              {/* Hover fill */}
              <span className="absolute inset-0 bg-[#B8935A]/[0.06] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />

              <span className="relative text-sm tracking-[0.15em] uppercase text-[#B8935A]/70 transition-colors duration-400 group-hover:text-[#B8935A]" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                Enter Website
              </span>

              <svg
                className="relative w-4 h-4 text-[#B8935A]/30 transition-all duration-400 group-hover:text-[#B8935A]/80 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            {/* Bottom line */}
            <div className="w-10 h-px bg-[#B8935A]/20" />
          </div>
        </div>
      )}

      {/* ---- Video ---- */}
      <div
        className={`absolute inset-0 w-screen h-screen bg-black transition-opacity duration-400 ${
          phase === 'playing' || phase === 'fadeout'
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoSrc}
          playsInline
          preload="auto"
          onEnded={finish}
        />
      </div>

      {/* ---- Skip Button ---- */}
      {phase === 'playing' && (
        <button
          onClick={finish}
          id="skip-splash-btn"
          className="absolute bottom-9 right-9 z-20 px-5 py-2 text-xs tracking-[0.12em] uppercase text-white/30 bg-transparent border border-white/[0.08] transition-all duration-300 hover:text-white/70 hover:border-white/20 animate-[fadeIn_0.4s_1s_both]"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          Skip
        </button>
      )}

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes breathe {
          0% { opacity: 0.6; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
