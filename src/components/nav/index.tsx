import React from "react";

import viteLogo from '/vite.svg';

export const Nav: React.FC = () => {

    return (
        <div className="w-full h-24 bg-secondary">
            <img src={viteLogo} className="logo" alt="Vite logo" />
        </div>
    )
}