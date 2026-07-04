import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p>&copy; 2026 {site.name}</p>
        <a
          href="#top"
          className="w-fit transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
