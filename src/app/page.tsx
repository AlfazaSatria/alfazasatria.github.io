import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { IconLink } from "@/components/IconLink";

export default function Home() {
  return (
    <main className="grid min-h-[100dvh] grid-rows-[1fr_auto] md:grid-cols-2 md:grid-rows-1">
      <section className="flex items-end px-7 pb-10 pt-14 md:items-center md:justify-center md:px-12 md:py-16">
        <h1 className="text-[clamp(3.5rem,16vw,7rem)] font-semibold leading-[0.92] tracking-[-0.04em]">
          Alfaza
        </h1>
      </section>

      <section className="flex flex-col justify-center border-t border-line px-7 py-12 md:border-t-0 md:border-l md:px-12 md:py-16">
        <p className="max-w-[26ch] text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
        A collection of tabs
        that never got closed.
        </p>

        <nav
          aria-label="External profiles"
          className="mt-10 flex items-center gap-4"
        >
          <IconLink
            href="https://github.com/alfazasatria"
            label="GitHub"
            icon={GithubLogo}
          />
          <IconLink
            href="https://linkedin.com/in/alfazasatria"
            label="LinkedIn"
            icon={LinkedinLogo}
          />
        </nav>
      </section>
    </main>
  );
}
