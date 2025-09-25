import React from "react";
import { ElementId } from "../../constants";

//import { useInView } from 'react-intersection-observer';

export const Home: React.FC = () => {
    // const { ref, inView } = useInView({
    //     threshold: 0,
    // });

    return (
        <div id={ElementId.home} className={`relative min-h-full px-22 md:px-48 pt-56 md:pt-80 text-black isolate`}>
            <div className="absolute inset-0 bg-[url(../../../src/assets/floating-cogs.svg)] opacity-10 z-index-0 pointer-events-none" />
            <div className="place-self-center text-wrap text-black z-1 isolate">
                <p className="text-3xl md:text-5xl font-black"> 
                    Jason Amasola Ampalayohan
                </p>
                <p className="pt-1 font-extralight font-semibold">
                    Front-end Engineer | Full-stack Developer
                </p>
                <p className="font-extralight text-base text-softGrey italic">
                    Experienced in delivering high-performance, user-friendly web solutions.
                </p>
            </div>
        </div>
    )
}