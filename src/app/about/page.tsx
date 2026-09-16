import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Sparkles, Flower2, ArrowRight } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import {
  ABOUT_CONTENT,
  ABOUT_PAGE,
  COMPANY,
  SERVICE_OFFERINGS,
  STUDIO_INFO,
  TEAM_MEMBERS,
  WELCOME,
} from '@/lib/data';

export const metadata: Metadata = {
  title: `About | ${COMPANY.name}`,
  description: ABOUT_CONTENT.intro,
};

const valueIcons = [Heart, Sparkles, Flower2];

export default function AboutPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/pink-flowers-cta.jpg"
          alt={COMPANY.name}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#d48a96] uppercase">
            Our Story
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">About</h1>
          <p className="mt-5 max-w-xl text-base text-white/75 sm:text-lg">
            {ABOUT_PAGE.heroSubtitle}
          </p>
        </div>
      </section>

      <section className="bg-background px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.35em] text-[#d48a96] uppercase">
                {COMPANY.shortName}
              </span>
              <div className="h-px w-16 bg-[#d48a96]" />
              <p className="mt-4 text-xs tracking-[0.2em] text-foreground/40 uppercase">
                {COMPANY.city}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
                {ABOUT_PAGE.heading}{' '}
                <em className="text-[#d48a96] italic">{ABOUT_PAGE.emphasis}</em>
              </h2>

              {ABOUT_PAGE.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-foreground/65 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}

              <div className="flex gap-8 border-t border-border pt-4">
                {WELCOME.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-2xl text-[#d48a96]">
                      {stat.number}
                    </p>
                    <p className="mt-0.5 text-xs tracking-wide text-foreground/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <blockquote className="border-l-2 border-[#d48a96]/40 pl-6">
            <p className="font-serif text-xl leading-relaxed text-foreground/80 italic sm:text-2xl">
              &ldquo;{ABOUT_CONTENT.story}&rdquo;
            </p>
            <footer className="mt-6 text-sm tracking-[0.15em] text-[#d48a96] uppercase">
              — {COMPANY.founder}, {COMPANY.founderTitle}
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0e0c08] px-6 py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#d48a96]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#d48a96] uppercase">
              Why JH Bloom Co
            </p>
            <h2 className="font-serif text-4xl text-white sm:text-5xl">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {ABOUT_PAGE.values.map((value, index) => {
              const Icon = valueIcons[index] ?? Heart;
              return (
                <article
                  key={value.title}
                  className="border border-white/5 bg-[#161410] p-8 transition-colors duration-300 hover:border-[#d48a96]/30"
                >
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-[#d48a96]/30">
                    <Icon size={16} className="text-[#d48a96]" />
                  </div>
                  <h3 className="mb-3 font-serif text-2xl text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-4/5 overflow-hidden">
            <Image
              src="/portfolio/bouquets/02.jpg"
              alt="Custom bouquet by JH Bloom Co"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#d48a96] uppercase">
              {ABOUT_PAGE.specialtiesHeading}
            </p>
            <h2 className="mb-6 font-serif text-4xl text-foreground sm:text-5xl">
              Florals for Every{' '}
              <em className="text-[#d48a96] italic">Occasion</em>
            </h2>
            <p className="mb-10 leading-relaxed text-foreground/65">
              {ABOUT_PAGE.specialtiesBody}
            </p>

            <ul className="mb-10 grid gap-3 sm:grid-cols-2">
              {SERVICE_OFFERINGS.map((offering) => (
                <li
                  key={offering}
                  className="flex items-center gap-3 border border-border px-4 py-3 text-sm text-foreground/80"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d48a96]" />
                  {offering}
                </li>
              ))}
            </ul>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#d48a96] uppercase transition-all hover:gap-3"
            >
              View Our Work
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#d48a96] uppercase">
              Simple & Personal
            </p>
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
              {ABOUT_PAGE.processHeading}
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {ABOUT_PAGE.processSteps.map((step) => (
              <article key={step.step} className="text-center md:text-left">
                <p className="mb-4 font-serif text-5xl text-[#d48a96]/30">
                  {step.step}
                </p>
                <h3 className="mb-3 font-serif text-2xl text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/60">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0e0c08] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#d48a96] uppercase">
              The Hands Behind the Stems
            </p>
            <h2 className="font-serif text-4xl text-white sm:text-5xl">
              Meet the Designer
            </h2>
          </div>

          <div
            className={`grid gap-16 ${TEAM_MEMBERS.length > 1 ? 'md:grid-cols-2 md:gap-12' : 'mx-auto max-w-2xl md:grid-cols-1'}`}
          >
            {TEAM_MEMBERS.map((member) => (
              <article
                key={member.name}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-8 aspect-3/4 w-full max-w-sm overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
                <h3 className="font-serif text-3xl text-white italic sm:text-4xl">
                  {member.name}
                </h3>
                <p className="mt-3 text-sm tracking-[0.15em] text-[#d48a96] uppercase">
                  {member.title}
                </p>
                {'bio' in member && member.bio ? (
                  <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/60">
                    {member.bio}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#d48a96] uppercase">
              Studio Location
            </p>
            <p className="font-serif text-2xl text-foreground">
              {STUDIO_INFO.location}
            </p>
            <p className="mt-1 text-foreground/70">{STUDIO_INFO.city}</p>
            <p className="mt-3 text-sm text-foreground/50 italic">
              ({STUDIO_INFO.locationNote})
            </p>
          </div>

          <div>
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#d48a96] uppercase">
              Studio Hours
            </p>
            <div className="space-y-4">
              {STUDIO_INFO.hours.map((slot) => (
                <div key={slot.days}>
                  <p className="font-serif text-xl text-foreground">
                    {slot.days}
                  </p>
                  <p className="mt-1 text-foreground/70">{slot.time}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-foreground/50 italic">
              ({STUDIO_INFO.hoursNote})
            </p>
          </div>

          <div>
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#d48a96] uppercase">
              Contact
            </p>
            <p className="font-serif text-2xl text-foreground">
              {COMPANY.name}
            </p>
            {COMPANY.email ? (
              <a
                href={`mailto:${COMPANY.email}`}
                className="mt-3 inline-block text-foreground/70 transition-colors hover:text-[#d48a96]"
              >
                {COMPANY.email}
              </a>
            ) : (
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-foreground/70 transition-colors hover:text-[#d48a96]"
              >
                {COMPANY.instagramHandle}
              </a>
            )}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex justify-center bg-[#d48a96] px-8 py-3.5 text-xs font-medium tracking-[0.2em] text-black uppercase transition-colors duration-200 hover:bg-[#e5a3ad]"
              >
                Get in Touch
              </Link>
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center border border-border px-8 py-3.5 text-xs tracking-[0.2em] text-foreground uppercase transition-all duration-200 hover:border-[#d48a96] hover:text-[#d48a96]"
              >
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
