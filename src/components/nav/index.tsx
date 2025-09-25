import React from "react";
import { ElementId } from "../../constants";

export const Nav: React.FC = () => { 

    const scrollIntoDiv = (elementId: string) => {
        document
            .getElementById(elementId)
            ?.scrollIntoView({ behavior: "smooth", block: "start"})
    }

    return (
        <div className="w-screen min-h-16 fixed top-0 bg-[#1E1E1E] z-10">
            <div className="px-6 py-5 text-white justify-between text-center">
                <ul className="flex gap-6 md:gap-16 place-self-center">
                    <li className="hover:text-cyan-400 cursor-pointer"
                        onClick={() => scrollIntoDiv(ElementId.home)}
                    >
                        Home
                    </li>
                    <li className="hover:text-cyan-400 cursor-pointer"
                        onClick={() => scrollIntoDiv(ElementId.aboutMe)}
                    >
                        About
                    </li>
                    <li className="hover:text-cyan-400 cursor-pointer"
                        onClick={() => scrollIntoDiv(ElementId.workExperience)}
                    >
                        Work
                    </li>
                    <li className="hover:text-cyan-400 cursor-pointer"
                        onClick={() => scrollIntoDiv(ElementId.contact)}
                    >
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    );
}