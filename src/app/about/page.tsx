import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About Fatima Tufail",
  description:
    "Learn about Fatima Tufail, a Full Stack Developer from Pakistan building responsive websites and web applications with React and Next.js, available for remote freelance projects.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Hello! I&rsquo;m <span className="border-b border-foreground/30 pb-0.5">Fatima Tufail</span>.
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                A <strong className="font-semibold text-foreground">Full Stack Developer</strong> who builds modern, responsive websites and web applications with <strong className="font-semibold text-foreground">React</strong> and <strong className="font-semibold text-foreground">Next.js</strong>. My work includes frontend development, turning Figma designs into working interfaces, integrating databases, implementing authentication, and building application functionality.
              </p>
              <p>
                I currently work full-time as a Web Developer at <strong className="font-semibold text-foreground">Taiba Creations</strong>, where I have around six months of professional experience and have worked on client projects.
              </p>
              <p>
                I hold a BSc in Electrical Engineering from the Pakistan Institute of Engineering and Technology in Multan, and my focus today is web development. Based in Pakistan, I am available for <strong className="font-semibold text-foreground">remote freelance projects</strong>, so if you have a website idea or a design that needs to become a working interface, let&rsquo;s talk.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}