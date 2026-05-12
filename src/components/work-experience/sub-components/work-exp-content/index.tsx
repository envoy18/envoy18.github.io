import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const WorkExperienceContent: React.FC<WorkExperienceContentProps> = ({
    index,
    role,
    company,
    year,
    content,
    techStack,
    recent
}) => {
    return (
        <article
            data-reveal
            className="reveal reveal-lift grid gap-5 rounded-lg border border-white/10 bg-white/[0.055] p-5 transition hover:border-[#7cc7ff]/50 hover:bg-white/[0.085] md:grid-cols-[9rem_1fr] md:p-7"
            style={{ transitionDelay: `${index * 80}ms` }}
        >
            <div>
                <div className="mb-4 flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-[#7cc7ff] text-sm font-black text-[#06142a]">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    {recent && (
                        <span className="rounded-full bg-[#1f7fd1] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white">
                            Current
                        </span>
                    )}
                </div>
                <p className="text-sm font-bold leading-6 text-[#c7d7e8]">{year}</p>
            </div>

            <div>
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                    <div>
                        <h3 className="text-2xl font-black text-white">{role}</h3>
                        <p className="mt-1 text-lg font-semibold text-[#7cc7ff]">{company}</p>
                    </div>
                    <p className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-[#c7d7e8]">
                        {techStack}
                    </p>
                </div>

                <ul className="mt-5 grid gap-3 text-[#e2edf7]">
                    {content.map((value) => (
                        <li key={value} className="flex gap-3 leading-7">
                            <FaArrowRight className="mt-2 shrink-0 text-xs text-[#4fb3ff]" />
                            <span>{value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export type WorkExperienceContentProps = {
    index: number;
    company: string;
    year: string;
    role: string;
    content: string[];
    techStack: string;
    recent?: boolean;
}
