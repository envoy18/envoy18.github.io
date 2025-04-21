import React from "react";

export const AboutMe: React.FC = () => {

    return (
        <div className="w-full sm:w-1/2 px-5 sm:px-0 pt-10">
            <div className="pb-6">
                <hr className="text-softGrey border-softGrey roundend-sm"/>
            </div>
            <div className="flex flex-col text-white font-mono text-left">
                <div className="grid gap-3">
                    <div>
                        <p className="font-bold text-2xl">
                            About Me 
                        </p>
                    </div>
                    <div>
                        <p className="font-extralight text-base text-softGrey">
                            I'm a Software Developer/Front End Engineer with over 11 years of experience in software development. 
                            I have worked on web, mobile, and desktop applications, but my primary focus has always been web development, specializing in frontend technologies to create high-performance, user-friendly interfaces.
                        </p>
                    </div>
                    <div>
                        <p className="font-extralight text-base text-softGrey">
                            Currently, I work at one of Japan's largest e-commerce platforms, 
                            where I play a key role in rebuilding the checkout system to enhance its functionality, 
                            implement new features, and resolve existing issues.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}