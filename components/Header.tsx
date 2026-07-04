import { site } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <a
          href="#top"
          className="w-fit text-sm font-semibold text-ink transition-colors hover:text-moss"
          aria-label="Go to the top of the page"
        >
          {site.name}
        </a>

        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
