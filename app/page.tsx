import { ExperienceItem } from "@/components/ExperienceItem";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { site } from "@/data/site";

function renderAboutParagraph(paragraph: string) {
  const highlights = ["curious", "people first"];
  const parts = paragraph.split(new RegExp(`(${highlights.join("|")})`, "g"));

  if (parts.length === 1) {
    return paragraph;
  }

  return (
    <>
      {parts.map((part, index) =>
        highlights.includes(part) ? (
          <strong key={`${part}-${index}`} className="font-semibold text-moss">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function Home() {
  const [emailLink, ...socialLinks] = site.contact.links;

  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section id="work" title="Work" subtitle="Experience">
          <div className="grid gap-8">
            {site.experience.map((item) => (
              <ExperienceItem key={`${item.period}-${item.role}`} {...item} />
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" subtitle="Selected work">
          <div className="grid gap-5">
            {site.projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Section>

        <Section id="about" title="About" subtitle="How I got here">
          <div className="space-y-6 text-lg leading-8 text-muted">
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{renderAboutParagraph(paragraph)}</p>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="max-w-2xl">
            <div>
              <p className="text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                {site.contact.lines[0]}
              </p>
              <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
                {site.contact.lines[1]}
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={emailLink.href}
                aria-label="Email Manos"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-ink px-5 text-sm font-medium text-white transition-colors hover:bg-moss focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss sm:w-auto"
              >
                {emailLink.label}
              </a>

              <ul className="grid gap-3 sm:flex sm:flex-wrap">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      aria-label={`Contact Manos via ${link.label}`}
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-line bg-white/55 px-5 text-sm font-medium text-ink transition-colors hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss sm:w-auto"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
