"use client";

import About from "~/components/about";
import AccordianList from "~/components/accordian";
import Content from "~/components/content";
import Experience from "~/components/experience";
import Hero from "~/components/hero";
import Link from "next/link";
import MainLayout from "~/components/layouts/main";
import Navbar from "~/components/navbar";
import ScreenshotPromotingQueens from "~/assets/PQportfolio.png";
import ScreenshotOats from "~/assets/oatsporfolio.png";
import ScreenshotDarlington from "~/assets/dsporfolio.png";
import ScrollingBanner from "~/components/scrollingBanner";
import Selfy from "~/assets/me.png";
import { Services } from "~/config/services";
import Stats from "~/components/stats";

export default function Home() {
  return (
    <MainLayout>
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <Stats />
      <Content cta ctaText="Learn More" ctaLink="/about">
        <p>
          I&apos;m Destiny Erheriene, a passionate web designer and developer
          based in Nigeria. I specialize in crafting responsive, accessible, and
          interactive web applications, delivering seamless user experiences.
          Always eager to learn and innovate.
        </p>
      </Content>
      <ScrollingBanner baseVelocity={-200}>Experience</ScrollingBanner>
      <Experience
        imageDirection="right"
        imageSrc={ScreenshotPromotingQueens}
        title="Promoting Queens Foundation"
        role=" Design & Development "
        stack={[
          {
            name: "TypeScript",
            link: "https://www.TypeScriptlang.org/",
          },
          {
            name: "NextJS",
            link: "https://nextjs.org/",
          },
          {
            name: "React",
            link: "https://react.dev/",
          },
          {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/",
          },
          {
            name: "Sanity CMS",
            link: "https://planetscale.com/",
          },

          {
            name: "Figma",
            link: "https://www.figma.com/",
          },
          {
            name: "Google Analytics",
            link: "https://analytics.google.com/",
          },
        ]}
      >
        Promoting Queens Chess Foundation is an NGO that empowers women using
        chess as a tool. My main task included{" "}
        <span className="font-semibold underline">Designing</span>,{" "}
        <span className="font-semibold underline">Developing</span> and{" "}
        <span className="font-semibold underline">Deploying</span>, the entire
        organization&apos;s website. I also integrated a Sanity-powered blog,
        enabling easy content management and dynamic updates.
        <div className="mt-4">
          <Link
            className="group flex items-center gap-2 underline"
            href="https://www.promotingqueens.org"
            target="_blank"
          >
            View Live Site
            <svg
              className="h-4 w-4 rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              x
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </Experience>
      <Experience
        imageDirection="left"
        imageSrc={ScreenshotDarlington}
        title="Darlinton Sheriff website"
        role=" Design and Developement"
        stack={[
          {
            name: "TypeScript",
            link: "https://www.TypeScriptlang.org/",
          },
          {
            name: "NextJS",
            link: "https://nextjs.org/",
          },
          {
            name: "React",
            link: "https://react.dev/",
          },
          {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/",
          },
          {
            name: "Sanity CMS",
            link: "https://supabase.com/",
          },

          {
            name: "Figma",
            link: "https://www.figma.com/",
          },
          {
            name: "Google Analytics",
            link: "https://analytics.google.com/",
          },
        ]}
      >
        I designed and developed a sample website for Darlington Sheriff, a
        Nigerian content creator, to showcase his work and personal brand. The
        site features a clean, modern layout with an emphasis on usability and
        engagement. Built with a focus on{" "}
        <strong className="font-semibold underline">performance</strong> and{" "}
        <strong className="font-semibold underline">Responsiveness</strong> in
        mind
        <div className="mt-4">
          <Link
            className="group flex items-center gap-2 underline"
            href="http://ds-website-nine.vercel.app/"
            target="_blank"
          >
            View Live Site
            <svg
              className="h-4 w-4 rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              x
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </Experience>
      <Experience
        imageDirection="right"
        imageSrc={ScreenshotOats}
        title="Oats"
        role=" Design and Development"
        stack={[
          {
            name: "TypeScript",
            link: "https://www.TypeScriptlang.org/",
          },
          {
            name: "NextJS",
            link: "https://nextjs.org/",
          },
          {
            name: "React",
            link: "https://react.dev/",
          },
          {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/",
          },
          {
            name: "Sanity CMS",
            link: "https://planetscale.com/",
          },

          {
            name: "Figma",
            link: "https://www.figma.com/",
          },
          {
            name: "Google Analytics",
            link: "https://analytics.google.com/",
          },
        ]}
      >
        I designed and developed a portfolio blog website for a FIDE chess
        master, creating a dynamic digital space to showcase professional
        achievements, tournament results, and in-depth chess analyses. Built
        with modern web technologies, the website offers a{" "}
        <span className="font-semibold underline">responsive</span>,{" "}
        <span className="font-semibold underline">accessible</span>, and{" "}
        <span className="font-semibold underline">
          SEO-optimized experience
        </span>{" "}
        that highlights the chess master&apos;s journey and expertise.
        <div className="mt-4">
          <Link
            className="group flex items-center gap-2 underline"
            href="https://www.abimbolaosunfuyi.com/"
            target="_blank"
          >
            View Live Site
            <svg
              className="h-4 w-4 rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              x
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </Experience>
      <ScrollingBanner baseVelocity={-200}>Skills</ScrollingBanner>

      <Content className="my-0 lg:my-0">
        <p>
          I&apos;m naturally a <span className="underline">curious person</span>{" "}
          and love learning new technologies and skills. I&apos;ve listed all of
          the frameworks and skills I&apos;m proficient in below. Feel free to{" "}
          <span className="underline">ask</span> me about any of them :).
        </p>
      </Content>
      <AccordianList items={Services} />

      <Content cta ctaText="Let's Chat" ctaLink="/contact">
        I&apos;m a passionate self-taught frontend web developer and designer
        based in Nigeria. With three years of experience, I&apos;ve built and
        optimized websites for various clients, focusing on performance,
        accessibility, and user experience. I&apos;m always eager to learn.
        Outside of coding, I enjoy chess, entrepreneurship, and exploring
        creative design.
      </Content>
    </MainLayout>
  );
}
