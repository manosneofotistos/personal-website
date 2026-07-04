import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  const { hero } = site;

  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:px-7 sm:pb-24 sm:pt-24">
      <div className="max-w-4xl">
        <p className="mb-6 text-sm font-medium uppercase text-moss">
          {hero.location}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-ink sm:text-6xl">
          {hero.headline}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
          {hero.intro}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={hero.primaryCta.href}
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-5 text-sm font-medium text-white transition-colors hover:bg-moss focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-line px-5 text-sm font-medium text-ink transition-colors hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      <figure className="mt-16">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-line shadow-soft">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 960px, calc(100vw - 40px)"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-4 text-sm text-muted">{hero.image.caption}</figcaption>
      </figure>
    </section>
  );
}
