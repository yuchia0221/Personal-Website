import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
    const [open, setOpen] = useState("");
    const [visibility, setVisibility] = useState("hidden");
    const [isClick, setIsClick] = useState(false);
    const handleIsClick = () => {
        setIsClick((isClick) => !isClick);
    };

    useEffect(() => {
        if (isClick) {
            setVisibility("flex");
            setOpen("open");
        } else {
            setVisibility("hidden");
            setOpen("");
        }
    }, [isClick]);

    return (
        // Navigation Bar
        <nav className="relative w-screen p-6">
            {/* Desktop Menu */}
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/">
                        <a>
                            <Image src="/logo.svg" alt="Logo" height="60vh" width="60vw" />
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="m-4 text-2xl text-bold font-bold lg:text-4xl">Aaron Chen</a>
                    </Link>
                </div>

                {/* Menu Items */}
                <div className="hidden items-center md:flex">
                    <Link href="#">
                        <a className="hidden desk-nav px-6 hover:text-lightYellow md:flex">Home</a>
                    </Link>
                    <Link href="#">
                        <a className="hidden desk-nav px-6 hover:text-lightYellow md:flex">About</a>
                    </Link>
                    <Link href="#">
                        <a className="hidden desk-nav px-6 hover:text-lightYellow md:flex">Projects</a>
                    </Link>
                    <Link href="#">
                        <a className="hidden desk-nav px-6 hover:text-lightYellow md:flex">Contact</a>
                    </Link>
                    <Link href="#">
                        <a className="hidden desk-nav px-6 hover:text-lightYellow md:flex">Resumé</a>
                    </Link>
                </div>

                {/* Hamburger Menu */}
                <button
                    id="menu-btn"
                    type="button"
                    className={`block hamburger ${open} md:hidden focus:outline-none`}
                    onClick={handleIsClick}>
                    <span class="hamburger-top"></span>
                    <span class="hamburger-middle"></span>
                    <span class="hamburger-bottom"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div class="md:hidden">
                <div
                    id="menu"
                    class={`absolute ${visibility} flex-col items-center self-end py-8 mt-5 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
                    <Link href="#">
                        <a className="hover:text-lightYellow" onClick={handleIsClick}>
                            Home
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="hover:text-lightYellow" onClick={handleIsClick}>
                            About
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="hover:text-lightYellow" onClick={handleIsClick}>
                            Projects
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="hover:text-lightYellow" onClick={handleIsClick}>
                            Contact
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="hover:text-lightYellow" onClick={handleIsClick}>
                            Resumé
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
