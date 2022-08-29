import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
    const [open, setOpen] = useState("");
    const [visibility, setVisibility] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const handleIsClick = () => {
        setIsClick((isClick) => !isClick);
    };

    useEffect(() => {
        if (isClick) {
            setVisibility(true);
            setOpen("open");
        } else {
            setVisibility(false);
            setOpen("");
        }
    }, [isClick]);

    return (
        <>
            <nav className="relative w-full z-10 bg-white">
                <div className="flex items-center h-20 w-full">
                    <div className="flex w-full mx-20 items-center justify-between">
                        {/* Left Navbar: Icon & Name */}
                        <div className="flex items-center justify-center space-x-3 flex-shrink-0">
                            <Link href="/">
                                <a>
                                    <Image src="/logo.svg" alt="Logo" height="38vh" width="38vw" />
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <h1 className="font-bold text-2xl cursor-pointer">
                                        Aaron<span className="text-lightBlue">Chen</span>
                                    </h1>
                                </a>
                            </Link>
                        </div>

                        {/* Right Navbar: Links */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/#">
                                    <a className="cursor-pointer hover:bg-lightBlue text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        Home
                                    </a>
                                </Link>
                                <Link href="/#">
                                    <a className="cursor-pointer hover:bg-lightBlue text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        About
                                    </a>
                                </Link>
                                <Link href="/#">
                                    <a className="cursor-pointer hover:bg-lightBlue text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        Projects
                                    </a>
                                </Link>
                                <Link href="/#">
                                    <a className="cursor-pointer hover:bg-lightBlue text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        Contact
                                    </a>
                                </Link>
                                <Link href="/#">
                                    <a className="cursor-pointer hover:bg-lightBlue text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        Resumé
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Hamburger Menu */}
                    <div className="mr-10 flex">
                        <button
                            id="menu-btn"
                            type="button"
                            title="hamburger menu button"
                            role="none"
                            className={`block hamburger ${open} md:hidden focus:outline-none`}
                            onClick={handleIsClick}>
                            <span className="hamburger-top"></span>
                            <span className="hamburger-middle"></span>
                            <span className="hamburger-bottom"></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <Transition
                    show={visibility}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95">
                    <div className="md:hidden" id="mobile-menu">
                        <div className="text-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="/#">
                                <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    Home
                                </a>
                            </Link>
                            <Link href="/#">
                                <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    About
                                </a>
                            </Link>
                            <Link href="/#">
                                <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    Projects
                                </a>
                            </Link>
                            <Link href="/#">
                                <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    Contact
                                </a>
                            </Link>
                            <Link href="/#">
                                <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    Resumé
                                </a>
                            </Link>
                        </div>
                    </div>
                </Transition>
            </nav>
        </>
    );
}

export default Navbar;
