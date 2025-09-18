import React from "react";
import { ElementId } from "../../constants";
//import { useInView } from 'react-intersection-observer';

export const Home: React.FC = () => {
    // const { ref, inView } = useInView({
    //     threshold: 0,
    // });

    return (
        <div id={ElementId.home} className="min-h-full px-48 pt-80">
            <div className="place-self-center text-[#1E293B] text-wrap">
                <p className="text-5xl font-black"> 
                    Jason Amasola Ampalayohan
                </p>
                <p className="pt-1 font-extralight text-[#1E293B] font-semibold">
                    Front-end Engineer | Full-stack Developer
                </p>
                <p className="font-extralight text-base text-softGrey italic">
                    Experienced in delivering high-performance, user-friendly web solutions.
                </p>
            </div>
        </div>
    )
}