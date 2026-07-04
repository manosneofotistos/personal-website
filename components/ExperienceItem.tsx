type ExperienceItemProps = {
  period: string;
  role: string;
  organization: string;
  organizationHref?: string;
  description: string;
};

export function ExperienceItem({
  period,
  role,
  organization,
  organizationHref,
  description
}: ExperienceItemProps) {
  return (
    <article className="grid gap-3 border-b border-line pb-8 last:border-b-0 last:pb-0 sm:grid-cols-[140px_1fr]">
      <p className="text-sm font-medium text-clay">{period}</p>
      <div>
        <h3 className="text-xl font-semibold text-ink">{role}</h3>
        <p className="mt-1 text-sm text-muted">
          {organizationHref ? (
            <a
              href={organizationHref}
              aria-label={`Visit ${organization}`}
              className="font-medium text-moss underline decoration-moss/35 transition-colors hover:text-ink hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss"
            >
              {organization}
            </a>
          ) : (
            organization
          )}
        </p>
        <p className="mt-4 leading-7 text-muted">{description}</p>
      </div>
    </article>
  );
}
