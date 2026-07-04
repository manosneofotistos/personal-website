type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 sm:px-7 md:grid-cols-[220px_1fr] md:py-24">
        <div>
          {subtitle ? (
            <p className="text-sm font-medium uppercase text-moss">{subtitle}</p>
          ) : null}
          <h2 className={subtitle ? "mt-3 text-3xl font-semibold text-ink sm:text-4xl" : "text-3xl font-semibold text-ink sm:text-4xl"}>
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
