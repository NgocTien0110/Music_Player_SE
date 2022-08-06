import React from 'react';
import Search from "./SearchBox"
import NavArrows from './NavArrows';
import NavLinks from './NavLinks';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-[color:var(--color-navbar-bg)] h-16 px-[10vw] inset-0 fixed z-50 backdrop-blur-[20px] backdrop-saturate-[180%]">
            {/* Navigation Buttons Arrow */}
            <NavArrows />
            {/* End Navigation Buttons Arrow */}

            {/* Navigation Links */}
            <div className="flex">
                <NavLinks toLink="/" titleLink="Home" />
                <NavLinks toLink="/zingchart" titleLink="ZingChart" />
                <NavLinks toLink="/top100" titleLink="Top 100" />
            </div>
            <Search />
        </div>
    );
};

export default Navbar;
