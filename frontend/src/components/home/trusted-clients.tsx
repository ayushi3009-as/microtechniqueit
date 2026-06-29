'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Star } from 'lucide-react';

/* ── Client names ── */
const clients = [
  'TechCorp India',
  'MedCare Group',
  'DiamondStar',
  'StyleVerse',
  'FinEdge',
  'BuildRight',
  'EduSmart Academy',
  'LogiFlow',
  'RetailMax',
  'FoodChain',
  'TradeHub',
  'Singh Logistics',
];

/* Triple the list for a seamless infinite loop */
const marqueeItems = [...clients, ...clients, ...clients];

/* ── Stats data ── */
const stats: {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  isRating?: boolean;
}[] = [
  { label: 'Google Rating', value: 4.9, suffix: '/5', decimals: 1, isRating: true },
  { label: 'Happy Clients', value: 5000, suffix: '+' },
  { label: 'Years Experience', value: 15, suffix: '+' },
  { label: 'Countries Served', value: 20, suffix: '+' },
];

/* ── Animated counter hook ── */
function useAnimatedCounter(
  target: number,
  duration: number,
  inView: boolean,
  decimals = 0,
) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      /* ease-out cubic */
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, target, duration, decimals]);

  return count;
}

/* ── Logo pill ── */
function LogoPill({ name }: { name: string }) {
  return (
    <span
      className="glass whitespace-nowrap select-none shrink-0"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1.25rem',
        borderRadius: '9999px',
        fontSize: '0.9375rem',
        fontWeight: 600,
        letterSpacing: '0.01em',
        color: 'var(--color-muted-foreground)',
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* Decorative dot */}
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
          flexShrink: 0,
        }}
      />
      {name}
    </span>
  );
}

/* ── Stat card ── */
function StatCard({
  stat,
  inView,
}: {
  stat: (typeof stats)[number];
  inView: boolean;
}) {
  const count = useAnimatedCounter(stat.value, 2000, inView, stat.decimals ?? 0);

  return (
    <div
      className="card card-lift"
      style={{
        padding: '2rem 1.5rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      {/* Star icons for Google Rating */}
      {stat.isRating && (
        <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.25rem' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              fill="#facc15"
              color="#facc15"
              strokeWidth={1.5}
            />
          ))}
        </div>
      )}

      <span
        className="font-heading"
        style={{
          fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {stat.prefix ?? ''}
        {stat.decimals ? count.toFixed(stat.decimals) : Math.round(count)}
        {stat.suffix}
      </span>

      <span
        style={{
          fontSize: '0.875rem',
          fontWeight: 500,
          color: 'var(--color-muted-foreground)',
        }}
      >
        {stat.label}
      </span>
    </div>
  );
}

/* ─────────────────────── MAIN COMPONENT ─────────────────────── */
export function TrustedClients() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  /* Intersection Observer for animated counters */
  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setInView(true);
    });
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.2,
    });
    observer.observe(node);

    return () => observer.disconnect();
  }, [observerCallback]);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="container-custom">
        {/* ── Heading ── */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
            ✦ Our Partners
          </span>
          <h2 style={{ marginTop: '0.75rem' }}>
            Trusted By{' '}
            <span className="text-accent-gradient">Industry Leaders</span>
          </h2>
          <p
            style={{
              color: 'var(--color-muted-foreground)',
              maxWidth: '520px',
              margin: '1rem auto 0',
              fontSize: '1.0625rem',
              lineHeight: 1.7,
            }}
          >
            Businesses across the globe rely on Microtechnique IT for innovative,
            reliable technology solutions.
          </p>
        </div>

        {/* ── Marquee ── */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '3.5rem',
          }}
        >
          {/* Left fade */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '6rem',
              background:
                'linear-gradient(to right, var(--color-background), transparent)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
          {/* Right fade */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '6rem',
              background:
                'linear-gradient(to left, var(--color-background), transparent)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          {/* Scrolling track */}
          <div
            className="animate-marquee"
            style={
              {
                display: 'flex',
                gap: '1.25rem',
                width: 'max-content',
                '--marquee-duration': '40s',
              } as React.CSSProperties
            }
          >
            {marqueeItems.map((name, i) => (
              <LogoPill key={`${name}-${i}`} name={name} />
            ))}
          </div>
        </div>

        {/* ── Stats row ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
          }}
          className="stats-grid"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </div>

      {/* Responsive grid override for mobile/tablet */}
      <style>{`
        .stats-grid {
          grid-template-columns: repeat(4, 1fr) !important;
        }
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
