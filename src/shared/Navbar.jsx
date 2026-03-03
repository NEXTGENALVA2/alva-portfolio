import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleLinkClick = () => setMenuOpen(false);

    // close the mobile menu if a click happens outside of the navbar
    const navRef = React.useRef(null);
    React.useEffect(() => {
        const handleOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('click', handleOutside);
        return () => document.removeEventListener('click', handleOutside);
    }, []);

    const links = <>
        <li><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></li>
        <li><NavLink to="/projects" prefetch="intent" onClick={handleLinkClick}>Projects</NavLink></li>
        <li><NavLink to="/admin" onClick={handleLinkClick}>Admin</NavLink></li>
    </>;

    return (
        <div>
            <div ref={navRef} className="px-2 sm:px-6 md:px-20 lg:px-52 navbar text-neutral-content shadow-sm inter-tight">
                <div className="navbar-start relative">
                    {/* mobile hamburger */}
                    <div className="lg:hidden">
                        <button
                            className="btn btn-ghost"
                            onClick={() => setMenuOpen(open => !open)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </button>
                        {menuOpen && (
                            <ul className="menu menu-sm bg-[#0f172a] text-white border border-gray-700 rounded-box z-50 mt-3 w-52 p-2 shadow-lg absolute">
                                {links}
                            </ul>
                        )}
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">
                        <img className="w-6" src="/Alva logo.png" alt="" />LVA</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3 sm:gap-5 text-base">
                        {links}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn btn-accent">Get Started</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;