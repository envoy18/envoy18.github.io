import React from "react";

import { WorkExperienceContent } from "./sub-components/work-exp-content";
import { ElementId, workExperience } from "../../constants";

export const WorkExperience: React.FC = () => {
    return (
        <section id={ElementId.workExperience} className="scroll-mt-24 bg-[#06142a] px-5 py-20 text-white md:px-8 md:py-28">
            <div className="mx-auto max-w-7xl">
                <div data-reveal className="reveal mb-12 max-w-5xl">
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[#7cc7ff]">
                        Experience
                    </p>
                    <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                        Built across startups, enterprise teams, and internal platforms.
                    </h2>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-[#c7d7e8]">
                        A career path through frontend, full-stack, .NET, mobile, and legacy modernization work, with the last several years centered on React and TypeScript.
                    </p>
                </div>

                <div className="grid gap-5">
                    {workExperience.map((exp, index) => (
                        <WorkExperienceContent
                            key={`${exp.company}-${exp.year}`}
                            index={index}
                            company={exp.company}
                            year={exp.year}
                            role={exp.role}
                            content={exp.content}
                            techStack={exp.techStack}
                            recent={exp.recent}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
