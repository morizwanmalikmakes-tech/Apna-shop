export function ClayParticles() {
  const particles = Array.from({ length: 14 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const size = 6 + ((i * 7) % 14);
        const left = (i * 83) % 100;
        const delay = (i * 1.7) % 12;
        const duration = 14 + ((i * 3) % 10);
        return (
          <span
            key={i}
            style={{
              left: `${left}%`,
              bottom: `-${size}px`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
            className="absolute rounded-full bg-primary/25 [animation-name:particle-float] [animation-iteration-count:infinite] [animation-timing-function:linear]"
          />
        );
      })}
    </div>
  );
}
