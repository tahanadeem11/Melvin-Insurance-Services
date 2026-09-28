export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
      {children}
    </span>
  );
}

export function PageHero({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-surface-muted">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:py-20">
        <SectionBadge>{badge}</SectionBadge>
        <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}
