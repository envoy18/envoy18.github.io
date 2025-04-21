import React from "react";
import { Harbour } from "./sub-components/harbour";
import { Yokogawa } from "./sub-components/yokogawa";
import { Collabera } from "./sub-components/collabera";
import { Emerio } from "./sub-components/emerio";
import { TechnoPro } from "./sub-components/technopro";
import { Spotted } from "./sub-components/spotted";
import { EnWorld } from "./sub-components/en-world";

export const WorkExperience: React.FC = () => {

    return (
        <div className="w-full sm:w-1/2 px-5 sm:px-0 pt-10">
            <div className="pb-6">
                <hr className="text-softGrey border-softGrey roundend-sm"/>
            </div>
            <div className="flex flex-col text-white font-mono text-left">
                <div className="grid gap-3">
                    <div>
                        <p className="font-bold text-2xl">
                            Work Experience
                        </p>
                    </div>
                    <div className="grid gap-3">
                        <EnWorld />
                        <Spotted />
                        <TechnoPro />
                        <Emerio />
                        <Collabera />
                        <Yokogawa />
                        <Harbour />
                    </div>
                </div>
            </div>
        </div>
    )
}