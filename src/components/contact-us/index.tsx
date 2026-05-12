import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { ElementId, profile } from "../../constants";

export const ContactUs: React.FC = () => { 
    const phoneHref = profile.contactNo.replace(/\s/g, "");

    return (
        <section id={ElementId.contact} className="scroll-mt-24 bg-[#eef4fb] px-5 py-20 md:px-8 md:py-28">
            <div className="mx-auto grid max-w-7xl gap-10 border-t border-[#0b1f3a]/10 pt-12 lg:grid-cols-[1.1fr_0.9fr]">
                <div data-reveal className="reveal">
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1f7fd1]">Contact</p>
                    <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-[#06142a] md:text-6xl">
                        Let’s build something useful, fast, and carefully made.
                    </h2>
                </div>
                <div data-reveal className="reveal self-end" style={{ transitionDelay: "120ms" }}>
                    <p className="text-lg leading-8 text-[#53657a]">
                        I’m open to frontend and full-stack roles where thoughtful UI, maintainable systems, and steady delivery matter.
                    </p>
                    <div className="mt-8 grid gap-3">
                        <a
                            className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#0b1f3a]/15 bg-white px-6 py-4 text-sm font-black text-[#06142a] shadow-lg shadow-[#06142a]/10 transition hover:-translate-y-0.5 hover:border-[#1f7fd1]/35 hover:bg-[#f7fbff] sm:w-auto"
                            href={`mailto:${profile.email}`}
                        >
                            <FaEnvelope className="shrink-0 text-[#1f7fd1]" />
                            <span className="truncate normal-case tracking-normal">{profile.email}</span>
                        </a>
                        <a
                            className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#0b1f3a]/10 bg-white/70 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#253b5b] transition hover:-translate-y-0.5 hover:border-[#1f7fd1]/35 hover:bg-[#f7fbff]"
                            href={`tel:${phoneHref}`}
                        >
                            <FaPhoneAlt className="shrink-0 text-[#1f7fd1]" />
                            <span>{profile.contactNo}</span>
                        </a>
                        <p className="inline-flex items-center justify-center gap-3 rounded-full border border-[#0b1f3a]/10 bg-white/70 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#253b5b]">
                            <FaMapMarkerAlt className="text-[#1f7fd1]" />
                            {profile.location}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
