import React from "react";

export const Spotted: React.FC = () => {
    return (
        <div className="pl-5 py-1">
            <p className="font-extralight text-base text-lightGrey font-semibold">
            July 2021 – September 2022 | SPOTTED Staffing | Full Stack Developer
            </p>
            <div className="pl-4 pt-1 font-extralight text-base text-softGrey">
                <ul className="list-disc ml-4">
                    <li>
                        Fixed bugs and implemented new features for a construction management web application using
                        React and Node.js, including a layout locking feature and an image editor with cropping and
                        text/shape functionalities.
                    </li>
                    <li>
                        Built a back-office web app to manage organization details, services, and client orders efficiently.
                    </li>
                </ul>
            </div>
        </div>
    )
}