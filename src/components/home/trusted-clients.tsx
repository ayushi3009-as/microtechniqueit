'use client';

const clients = [
  'TechCorp', 'HealthPlus', 'EduSmart', 'RetailMax', 'FinanceGo',
  'LogiFlow', 'DiamondPro', 'FoodChain', 'BuildRight', 'TradeHub',
];

export function TrustedClients() {
  const items = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 border-b border-border" style={{ padding: '60px 0' }}>
      <div className="container-custom">
        <p className="text-center text-sm text-muted-foreground mb-8 font-medium" style={{ textAlign: 'center', marginBottom: '32px' }}>
          Trusted by businesses across India
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-12 animate-marquee w-max" style={{ '--marquee-duration': '40s' } as React.CSSProperties}>
            {items.map((name, i) => (
              <span key={`${name}-${i}`} className="text-lg font-semibold text-muted-foreground/40 whitespace-nowrap select-none">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
