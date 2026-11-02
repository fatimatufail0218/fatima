import {
  ArrowRight,
  Compass,
  Flower2,
  LineChart,
  Server,
  Sparkles,
  Wand2,
  Watch,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

/**
 * Project screenshots live in /public/projects. Replace each file with a
 * real screenshot of the project (keep the same file name, 4:3 ratio,
 * for example 1024 x 768). Card height varies naturally with the length
 * of each title and description.
 *
 * Vermont E-commerce is removed for now because its deployment is no
 * longer available. Add it back once a working live link exists.
 */

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  technologies?: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  href?: string;
};

const PROJECTS: Project[] = [
  {
    id: "mirada-agency",
    icon: Sparkles,
    iconLabel: "Mirada Agency",
    title:
      "A modern agency website implemented from design requirements, focusing on responsive layouts and a polished user interface.",
    description:
      "A client project focused on website development and UI implementation.",
    meta: "Client project",
    technologies: "Next.js, React, TypeScript, Tailwind CSS",
    imageRatio: 1024 / 768,
    image: "/projects/mirada-agency.webp",
    imageAlt: "Mirada Agency website screenshot",
    href: "https://3616-miradaagency.vercel.app/",
  },
  {
    id: "nexforce-it",
    icon: Server,
    iconLabel: "NexForce IT",
    title: "A modern website for an IT services business.",
    description:
      "Built with Next.js and Tailwind CSS. I implemented the website's pages and responsive layouts based on the design requirements.",
    meta: "Client project · Web development and UI implementation",
    technologies: "Next.js, TypeScript, Tailwind CSS",
    imageRatio: 1024 / 768,
    image: "/projects/nexforce-it.webp",
    imageAlt: "NexForce IT website screenshot",
    href: "https://3629-nexforceit.vercel.app/",
  },
  {
    id: "digital-bouquet",
    icon: Flower2,
    iconLabel: "Digital Bouquet",
    title: "A web app for creating and sharing digital bouquets.",
    description:
      "Users can select flowers, build a personalized bouquet, and send it to loved ones with a personal note.",
    meta: "Personal project · Design and development",
    technologies: "Next.js, React, TypeScript, Tailwind CSS",
    imageRatio: 1024 / 768,
    image: "/projects/digital-bouquet.webp",
    imageAlt: "Digital Bouquet web app screenshot",
    href: "https://bloomlet-nine.vercel.app/",
  },
  {
    id: "azimute",
    icon: Compass,
    iconLabel: "Azimute",
    title: "An experimental 3D web experience.",
    description:
      "A learning project exploring scroll-based animation, interactive visuals, and modern frontend techniques.",
    meta: "Personal learning project",
    technologies:
      "Next.js, React, TypeScript, Three.js, GSAP, ScrollTrigger, Lenis, Tailwind CSS",
    imageRatio: 1024 / 768,
    image: "/projects/azimute.webp",
    imageAlt: "Azimute 3D web experience screenshot",
    href: "https://azimute-murex.vercel.app/",
  },
  {
    id: "tempus-watch-store",
    icon: Watch,
    iconLabel: "Tempus Watch Store",
    title:
      "A full e-commerce website for a luxury watch brand, built as a hands-on way to learn Sanity CMS and MongoDB.",
    description:
      "Includes product pages, a cart, and sign-in pages. I first built it with Sanity CMS, then converted it to MongoDB.",
    meta: "Personal practice project",
    technologies: "Sanity CMS, MongoDB",
    imageRatio: 1024 / 768,
    image: "/projects/tempus-watch-store.webp",
    imageAlt: "Tempus Watch Store website screenshot",
    href: "https://tempus-watch-store.vercel.app/",
  },
  {
    id: "lemvest",
    icon: LineChart,
    iconLabel: "Lemvest",
    title: "A trading-focused website with a clean blue and white interface.",
    description: "Responsive layouts and multiple content sections.",
    meta: "Professional project · Frontend development and UI implementation",
    technologies: "Next.js, React, TypeScript, Tailwind CSS",
    imageRatio: 1024 / 768,
    image: "/projects/lemvest.webp",
    imageAlt: "Lemvest trading website screenshot",
    href: "https://lemvest.vercel.app/",
  },
  {
    id: "rezenate",
    icon: Wand2,
    iconLabel: "Rezenate",
    title: "A modern website brought to life from a Figma design.",
    description:
      "I translated the design into a responsive interface using Next.js and Tailwind CSS.",
    meta: "Professional project · Figma to code implementation",
    technologies: "Next.js, React, TypeScript, Tailwind CSS",
    imageRatio: 1024 / 768,
    image: "/projects/rezenate.webp",
    imageAlt: "Rezenate website screenshot",
    href: "https://rezenate-new.vercel.app/",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              A selection of client work and personal projects.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article
        className={`project-card relative flex flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5${
          project.href ? " cursor-pointer" : ""
        }`}
      >
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-md after:absolute after:inset-0 after:rounded-3xl"
              >
                {project.title}
                <span className="sr-only">
                  {" "}
                  (visit {project.iconLabel}, opens in a new tab)
                </span>
              </a>
            ) : (
              project.title
            )}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col gap-1 px-1 pb-2">
          <p className="text-[12px] tracking-tight text-foreground/50">
            {project.meta}
          </p>
          {project.technologies ? (
            <p className="text-[12px] tracking-tight text-foreground/50">
              {project.technologies}
            </p>
          ) : null}
        </div>
      </article>
    </FadeIn>
  );
}