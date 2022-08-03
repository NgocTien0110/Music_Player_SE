import React from 'react';
const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-[color:var(--color-navbar-bg)] h-16 px-[10vw] inset-0 fixed z-50 backdrop-blur-[20px] backdrop-saturate-[180%]">
            {/* Navigation Links */}
            <div className="flex">
                <p>NAVBAR</p>
                {/* <NavLinks toLink="/mv" titleLink="MV" /> */}
            </div>
        </div>
    );
};

export default Navbar;
