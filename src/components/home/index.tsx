import React from "react";

//import { useInView } from 'react-intersection-observer';

export const Home: React.FC = () => {
    // const { ref, inView } = useInView({
    //     threshold: 0,
    // });

    return (
        <div className={`w-full sm:w-1/2 pt-20 px-10 sm:px-0`}>
            <div className="flex flex-col text-white font-mono text-left">
                <div>
                    <p className="text-3xl font-black"> 
                        Jason Ampalayohan
                    </p>
                    <p className="pt-1 font-extralight text-base font-semibold">
                        Software Developer | Front End Engineer
                    </p>
                    <p className="pt-3 font-extralight text-base text-softGrey">
                        Extensive experience in software development, with a focus on web applications.
                    </p>
                </div>
            </div>
        </div>
    )
}