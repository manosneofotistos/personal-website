type ProjectCardProps = {
  category: string;
  title: string;
  description: string;
  tags: readonly string[];
  href?: string;
};

export function ProjectCard({
  category,
  title,
  description,
  tags,
  href
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-line bg-white/55 p-6 transition-colors hover:border-ink/30">
      <p className="text-xs font-medium uppercase text-clay">{category}</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-2xl font-semibold text-ink">{title}</h3>
        {href ? (
          <a
            href={href}
            aria-label={`Open ${title} external link`}
            className="w-fit text-sm font-medium text-moss underline decoration-transparent transition-colors hover:text-ink hover:decoration-current"
          >
            Link
          </a>
        ) : null}
      </div>
      <p className="mt-4 leading-7 text-muted">{description}</p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${title} tags`}>
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
