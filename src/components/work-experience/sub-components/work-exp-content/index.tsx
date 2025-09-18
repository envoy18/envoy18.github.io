import React from "react";

export const WorkExperienceContent: React.FC<WorkExperienceContentProps> = ({
    role,
    company,
    content,
    techStack
}) => {
    return (
        <div>
            <p className="font-extralight text-base text-lightGrey font-semibold leading-2">
                {role}<br/>{company}
            </p>
            <div className="pl-4 pt-1 font-extralight text-base text-softGrey">
                <ul className="list-disc ml-4">
                    {
                        content.map((value, index) => {
                            return (
                                <li key={index}>{value}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <p>
                Tech Stack: {techStack}
            </p>
        </div>
    )
}

export type WorkExperienceContentProps = {
    company: string;
    role: string;
    content: string[];
    techStack: string;
}