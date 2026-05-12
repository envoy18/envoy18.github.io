import React from "react";
import { ElementId } from "../../constants";

export const Nav: React.FC = () => { 
    const navItems = [
        { label: "Home", target: ElementId.home },
        { label: "About", target: ElementId.aboutMe },
        { label: "Work", target: ElementId.workExperience },
        { label: "Contact", target: ElementId.contact },
    ];

    const scrollIntoDiv = (elementId: string) => {
        document
            .getElementById(elementId)
            ?.scrollIntoView({ behavior: "smooth", block: "start"})
    }

    return (
        <header className="fixed inset-x-0 top-0 z-30 border-b border-[#0b1f3a]/10 bg-[#eef4fb]/88 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-4 md:px-8">
                <button
                    className="group flex shrink-0 items-center gap-3 text-left"
                    onClick={() => scrollIntoDiv(ElementId.home)}
                    aria-label="Scroll to home"
                >
                    <span className="grid size-8 place-items-center rounded-full bg-[#06142a] text-xs font-black text-[#7cc7ff] md:size-9 md:text-sm">
                        JA
                    </span>
                </button>
                <ul className="flex min-w-0 items-center gap-0 rounded-full border border-[#0b1f3a]/10 bg-white/65 p-1 shadow-sm md:gap-1">
                    {navItems.map((item) => (
                        <li key={item.target}>
                            <button
                                className="rounded-full px-2 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#253b5b] transition hover:bg-[#0b1f3a] hover:text-white sm:px-3 sm:text-xs md:px-5 md:tracking-[0.12em]"
                                onClick={() => scrollIntoDiv(item.target)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
