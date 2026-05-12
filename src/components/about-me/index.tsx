import React from "react";
import { FaCode, FaLayerGroup, FaRocket, FaTools } from "react-icons/fa";
import { ElementId, profile, strengths, toolkit } from "../../constants";

const stats = [
    { value: "11+", label: "Years experience" },
    { value: "7", label: "Engineering roles" },
    { value: "3", label: "Product surfaces" },
];

const icons = [FaCode, FaLayerGroup, FaRocket, FaTools];

export const AboutMe: React.FC = () => {

    return (
        <section id={ElementId.aboutMe} className="scroll-mt-24 bg-[#eef4fb] px-5 py-20 md:px-8 md:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                    <div data-reveal className="reveal">
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1f7fd1]">
                            About
                        </p>
                        <h2 className="mt-4 text-4xl font-black leading-tight text-[#06142a] md:text-6xl">
                            Product-minded engineering with frontend craft.
                        </h2>
                    </div>

                    <div data-reveal className="reveal grid gap-6" style={{ transitionDelay: "120ms" }}>
                        <p className="text-xl leading-9 text-[#53657a]">
                            {profile.intro}
                        </p>
                        <p className="text-lg leading-8 text-[#53657a]">
                            {profile.availability}
                        </p>

                        <div className="grid gap-4 sm:grid-cols-3">
                            {stats.map((stat) => (
                            <div key={stat.label} data-reveal className="reveal border-l-4 border-[#4fb3ff] bg-white/70 px-5 py-4">
                                    <p className="text-4xl font-black text-[#06142a]">{stat.value}</p>
                                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-[#53657a]">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {strengths.map((strength, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <div
                                key={strength}
                                data-reveal
                                className="reveal reveal-lift rounded-lg border border-[#0b1f3a]/10 bg-white/75 p-6 shadow-sm transition hover:shadow-lg hover:shadow-[#06142a]/10"
                                style={{ transitionDelay: `${index * 90}ms` }}
                            >
                                <Icon className="mb-5 text-2xl text-[#1f7fd1]" />
                                <p className="text-lg font-black leading-snug text-[#06142a]">{strength}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-12 border-y border-[#0b1f3a]/10 py-7">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="mr-2 text-sm font-black uppercase tracking-[0.18em] text-[#53657a]">
                            Toolkit
                        </span>
                        {toolkit.map((item) => (
                            <span key={item} className="rounded-full bg-[#0b1f3a] px-4 py-2 text-sm font-bold text-white">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
