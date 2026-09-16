import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, MapPin, Camera, Globe, Clock, Mail } from 'lucide-react';
import InquiryForm from '@/components/contact/InquiryForm';
import { COMPANY, MAP_QUERY } from '@/lib/data';

export const metadata: Metadata = {
  title: `Contact | ${COMPANY.name}`,
  description:
    `Get in touch with ${COMPANY.name} to discuss custom bouquets and floral design for your Houston celebration.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/about/hero.jpg"
          alt={`Visit ${COMPANY.name}`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#d48a96] text-[10px] tracking-[0.4em] uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[#d48a96] text-[10px] tracking-[0.35em] uppercase mb-4">
                Visit Our Showroom
              </p>
              <h2 className="font-serif text-foreground text-3xl sm:text-4xl">
                Let&apos;s Create Something Beautiful
              </h2>
              <p className="text-foreground/60 mt-4 leading-relaxed">
                Ready to bring your vision to life? Fill out the form and we
                will reach out to discuss your bouquet, event, or floral design
                needs.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              {COMPANY.phone ? (
                <li>
                  <a
                    href={`tel:${COMPANY.phoneHref}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 border border-[#d48a96]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#d48a96] transition-colors">
                      <Phone size={14} className="text-[#d48a96]" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                        Phone
                      </p>
                      <p className="text-foreground group-hover:text-[#d48a96] transition-colors">
                        {COMPANY.phone}
                      </p>
                    </div>
                  </a>
                </li>
              ) : null}

              {COMPANY.email ? (
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 border border-[#d48a96]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#d48a96] transition-colors">
                      <Mail size={14} className="text-[#d48a96]" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                        Email
                      </p>
                      <p className="text-foreground group-hover:text-[#d48a96] transition-colors">
                        {COMPANY.email}
                      </p>
                    </div>
                  </a>
                </li>
              ) : null}

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#d48a96]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-[#d48a96]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                    Showroom
                  </p>
                  <p className="text-foreground">
                    {COMPANY.address}
                    <br />
                    {COMPANY.city}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#d48a96]/30 flex items-center justify-center flex-shrink-0">
                  <Clock size={14} className="text-[#d48a96]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                    Response Time
                  </p>
                  <p className="text-foreground">Within 24 business hours</p>
                </div>
              </li>
            </ul>

            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-foreground/40 mb-4">
                Follow Along
              </p>
              <div className="flex gap-3">
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-[#d48a96]/50 text-foreground/60 hover:text-[#d48a96] text-xs tracking-wide transition-all"
                >
                  <Camera size={13} />
                  Instagram
                </a>
                {COMPANY.facebook ? (
                  <a
                    href={COMPANY.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-[#d48a96]/50 text-foreground/60 hover:text-[#d48a96] text-xs tracking-wide transition-all"
                  >
                    <Globe size={13} />
                    Facebook
                  </a>
                ) : null}
              </div>
            </div>

            <div className="overflow-hidden border border-border">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&hl=en&z=14&output=embed`}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${COMPANY.name} location`}
              />
            </div>
          </div>

          <div className="bg-card border border-border p-8 md:p-10">
            <h3 className="font-serif text-foreground text-2xl mb-2">
              Send an Inquiry
            </h3>
            <p className="text-foreground/50 text-sm mb-8">
              Tell us about your event and we&apos;ll be in touch to discuss
              your floral design vision.
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
