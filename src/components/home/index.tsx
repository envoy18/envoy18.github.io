import React from "react";
import { FaArrowDown, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import profileImage from "../../assets/profile-image.png";
import { ElementId, profile, toolkit } from "../../constants";

export const Home: React.FC = () => {
    const scrollToWork = () => {
        document
            .getElementById(ElementId.workExperience)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section id={ElementId.home} className="relative isolate min-h-screen scroll-mt-24 overflow-hidden px-5 pt-28 md:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(124,199,255,0.35),transparent_28%),linear-gradient(135deg,#eef4fb_0%,#ffffff_48%,#d8e9f8_100%)]" />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[#eef4fb] to-transparent" />

            <div className="mx-auto grid max-w-7xl items-center gap-12 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-24">
                <div>
                    <div data-reveal className="reveal mb-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-[#53657a]">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#0b1f3a]/10 bg-white/70 px-4 py-2">
                            <FaMapMarkerAlt className="text-[#1f7fd1]" />
                            {profile.location}
                        </span>
                        <span className="rounded-full border border-[#0b1f3a]/10 bg-white/70 px-4 py-2">
                            11 years building software
                        </span>
                    </div>

                    <p data-reveal className="reveal mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#1f7fd1]" style={{ transitionDelay: "100ms" }}>
                        {profile.role}
                    </p>
                    <h1 data-reveal className="reveal max-w-4xl text-5xl font-black leading-[0.98] text-[#06142a] md:text-7xl lg:text-8xl" style={{ transitionDelay: "200ms" }}>
                        {profile.name}
                    </h1>
                    <p data-reveal className="reveal mt-7 max-w-2xl text-lg leading-8 text-[#53657a] md:text-xl" style={{ transitionDelay: "300ms" }}>
                        {profile.summary}
                    </p>

                    <div data-reveal className="reveal mt-9 flex flex-col gap-3 sm:flex-row" style={{ transitionDelay: "400ms" }}>
                        <button
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#06142a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-xl shadow-[#06142a]/20 transition hover:-translate-y-0.5 hover:bg-[#0b1f3a]"
                            onClick={scrollToWork}
                        >
                            View Work
                            <FaArrowDown />
                        </button>
                        <a
                            className="inline-flex items-center justify-center gap-3 rounded-full border border-[#0b1f3a]/15 bg-white/75 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#0b1f3a] transition hover:-translate-y-0.5 hover:bg-white"
                            href={`mailto:${profile.email}`}
                        >
                            <FaEnvelope />
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-10 flex max-w-3xl flex-wrap gap-2">
                        {toolkit.slice(0, 7).map((item, index) => (
                            <span
                                key={item}
                                data-reveal
                                className="reveal rounded-full border border-[#0b1f3a]/10 bg-white/65 px-4 py-2 text-sm font-semibold text-[#253b5b]"
                                style={{ transitionDelay: `${520 + index * 70}ms` }}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <div data-reveal className="reveal reveal-left relative mx-auto w-full max-w-lg lg:ml-auto" style={{ transitionDelay: "300ms" }}>
                    <div className="animate-float aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#0b1f3a]/10 bg-[#06142a] shadow-2xl shadow-[#06142a]/20">
                        <img
                            src={profileImage}
                            alt={profile.name}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 left-5 right-5 rounded-2xl border border-[#0b1f3a]/10 bg-white/90 p-5 shadow-2xl shadow-[#06142a]/10 backdrop-blur">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1f7fd1]">Current focus</p>
                        <p className="mt-2 text-lg font-black text-[#06142a]">
                            Frontend systems that are fast, accessible, and pleasant to maintain.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
