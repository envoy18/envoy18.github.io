import React from "react";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";

import { WorkExperienceContent } from "./sub-components/work-exp-content";
import { ElementId, workExperience } from "../../constants";

export const WorkExperience: React.FC = () => {

    return (
        <div id={ElementId.workExperience} className="px-32 pt-12">
            <div className="place-self-left text-[#1F2937] text-wrap m-3">
                <p className="font-bold text-4xl place-self-center">
                    Work Experience
                </p>
                <div className="grid gap-3 p-4">
                    <VerticalTimeline
                        lineColor='#1E293B'
                    >
                        {workExperience.map((exp, index) => {
                            return (
                                <VerticalTimelineElement
                                    key={index}
                                    date={exp.year}
                                    iconClassName={exp.recent ? "bg-[#0EA5E9]" : "bg-white"} 
                                    icon={<MdWork className={exp.recent ? "text-white" : ""} />}
                                >
                                    <WorkExperienceContent
                                        key={index}
                                        company={exp.company} 
                                        role={exp.role} 
                                        content={exp.content} 
                                        techStack={exp.techStack}                                        
                                    />
                                </VerticalTimelineElement>
                            )
                        })}
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}