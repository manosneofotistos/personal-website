export const site = {
  name: "Manos Neofotistos",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    headline:
      "I turn curiosity into AI products, data systems, and learning experiences people can use.",
    intro:
      "Business Intelligence Engineer at Amazon and co-founder of Kriton AI. I move between large-scale data systems, AI education, and research with a people-first approach.",
    location: "Luxembourg / Athens",
    primaryCta: { label: "View work", href: "#work" },
    secondaryCta: { label: "Get in touch", href: "mailto:neofotistosmanos@gmail.com" },
    image: {
      src: "/crete.jpg",
      alt: "A bright desk with a laptop, notebook, coffee, and engineering notes.",
      caption: "Somewhere between systems, data, and Cretan fields..."
    }
  },
  experience: [
    {
      period: "2026 to now",
      role: "Business Intelligence Engineer",
      organization: "Amazon - Luxembourg City",
      description:
        "Building decision systems that help identify high-value cross-border seller expansion opportunities across Europe, quantify untapped revenue potential, and surface expansion blockers for executive decision-making."
    },
    {
      period: "2025 to now",
      role: "Co-founder",
      organization: "Kriton AI - Athens",
      organizationHref: "https://kritonai.com",
      description:
        "Co-founded Greece's first AI academy for future builders, mentoring ambitious high school students through machine learning, Python, and portfolio building. Currently scaling the organization, partnerships, and community."
    },
    {
      period: "2026 to now",
      role: "AI Research",
      organization: "Synkrasis Labs - Remote",
      organizationHref: "https://synkrasis-labs.com/",
      description:
        "Contributing to early-stage AI research projects at an independent research lab whose work spans LLM agent evaluation, real-world agricultural agents, and efficient edge inference, with publications and workshop papers connected to NeurIPS LAW, ICML AIWILD, and MLSys YPS."
    }
  ],
  projects: [
     {
      category: "Data product / 2026",
      title: "Amazon Seller Expansion Intelligence Platform",
      description:
        "A large-scale data engineering and decision intelligence platform for European marketplace expansion, processing roughly 1.5B rows on a monthly cadence to estimate revenue potential, attribute economic impact to expansion blockers, and surface business opportunities for marketplace expansion strategy.",
      tags: ["Data Engineering", "Business Intelligence", "Spark"]
    },
    {
      category: "AI education / 2025-2026",
      title: "Kriton AI",
      description:
        "Designed two 48-hour programs, Introduction to Computer Science & Machine Learning and Advanced ML & AI, guiding students through portfolio-building projects across medical classification, financial analysis, time series forecasting, image classification, and applied AI.",
      tags: ["AI Education", "Curriculum", "Mentorship"],
    },
    {
      category: "Research / 2025",
      title: "LLMs & Game-Theoretic Bluffing",
      description:
        "Research on strategic reasoning and deception in large language models using the Bluffing Game, a dynamic incomplete-information setting that tests how artificial agents bluff, detect deception, adapt under uncertainty, and make sequential decisions.",
      tags: ["LLMs", "Game Theory", "Research"]
    }
  ],
  about: {
    paragraphs: [
      "I grew up in Crete, Greece, in a family that gave me a lot of freedom early on. That freedom did something useful to me. It made me curious. A lot of my childhood happened between the sea, swimming, and the mountains, with time spent outside with my brother and helping my grandfather in the fields.",
      "For a while, that made me confused in a funny way. I tried different things, followed different interests, and slowly realized that engineering was the closest thing I had found to a language for curiosity. Why, how, build, repeat: ask what is really going on, understand the why behind it, make something concrete, and learn from the failures along the way.",
      "That is still how I work. I like machines, models, systems, data, and business, but I put people first, always: how we connect, understand each other, decide, learn, and make new things possible together, asking along the way the whys, the hows, and then acting. I try to apply this principle everywhere. In industry, in personal projects and ambitions, and in the relationships I care about with friends and family."
    ]
  },
  contact: {
    lines: [
      "Keep asking the whys.",
      "If there is a signal worth chasing in the noise, send it my way."
    ],
    links: [
      { label: "Email me", href: "mailto:neofotistosmanos@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/manos-neofotistos/" },
      { label: "GitHub", href: "https://github.com/manosneofotistos" }
    ]
  }
} as const;
