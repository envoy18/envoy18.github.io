import React from "react";
import profileImage from '../../assets/profile-image.png';
import { ElementId } from "../../constants";
export const AboutMe: React.FC = () => {

    return (
        <div id={ElementId.aboutMe} className="relative md:min-h-screen pb-48 md:pb-0 bg-white pt-24 lg:pt-32 px-16 md:px-64 lg:px-72 xl:px-100 text-[#1E293B]">
            {/* <div className="absolute inset-0 bg-[url(../../../src/assets/floating-cogs.svg)] opacity-10 z-index-0 pointer-events-none" /> */}
            <div className="w-full text-center">
                <p className="font-bold text-4xl">
                    About Me 
                </p>
            </div>
            <div className="flex flex-col lg:flex-row pt-20">
                <div className="order-2 lg:order-1  text-wrap">
                    <p className="text-2xl font-black"> 
                        Jason Amasola Ampalayohan
                    </p>
                    <p className="pt-1 font-extralight font-semibold">
                        Front-end Engineer | Full-stack Developer
                    </p>
                    <p className="pt-2 font-extralight text-base text-softGrey">
                        I have 11 years of experience, specializing in front-end development with React and TypeScript. 
                        I’ve worked across web, mobile, and desktop applications, 
                        but my main focus has always been building high-performance, user-friendly web solutions.
                        <br/><br/>
                        Based in Tokyo, Japan, I’m currently seeking new opportunities to contribute to innovative web projects as a front-end/full-stack developer.
                    </p>
                </div>
                <div className="order-1 lg:order-2 w-auto lg:w-180 place-self-center mb-4">
                    <img src={profileImage} className="size-56 object-cover rounded-full border-2"/>
                </div>
            </div>
        </div>
    )
}