import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import DarkModeBtn from "./DarkModeBtn";

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
            <nav className="relative z-10 w-full">
                <div className="flex h-20 w-full items-center">
                    <div className="flex w-full items-center justify-between">
                        {/* Left Navbar: Icon & Name */}
                        <div className="mx-20 flex flex-shrink-0 items-center justify-center space-x-1">
                            <Link href="/">
                                <a>
                                    <Image src="/images/logo.svg" alt="Logo" height="38vh" width="38vw" />
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <h1 className="cursor-pointer text-2xl font-bold dark:text-lightYellow">
                                        Aaron
                                        <span className="text-lightBlue dark:text-white">Chen</span>
                                    </h1>
                                </a>
                            </Link>
                            <div className="inline-flex md:hidden">
                                <DarkModeBtn />
                            </div>
                        </div>

                        {/* Right Navbar: Links */}
                        <div className="hidden md:block">
                            <div className="mx-20 flex items-baseline space-x-4">
                                <Link href="/">
                                    <a className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium hover:text-lightBlue dark:hover:text-lightYellow">
                                        Home
                                    </a>
                                </Link>
                                <Link href="/about">
                                    <a className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium hover:text-lightBlue dark:hover:text-lightYellow">
                                        About
                                    </a>
                                </Link>
                                <Link href="/projects">
                                    <a className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium hover:text-lightBlue dark:hover:text-lightYellow">
                                        Projects
                                    </a>
                                </Link>
                                <Link href="/contact">
                                    <a className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium hover:text-lightBlue dark:hover:text-lightYellow">
                                        Contact
                                    </a>
                                </Link>
                                <Link href="/Yu-Chia Chen Resume.pdf">
                                    <a
                                        className="shadow-lightBlue-500/50 cursor-pointer rounded-md border-2 border-lightBlue px-3 py-2 text-sm font-medium text-lightBlue shadow-md hover:bg-lightBlue hover:text-white dark:border-lightYellow dark:text-lightYellow dark:hover:bg-lightYellow dark:hover:bg-lightYellow dark:hover:text-black dark:hover:text-black"
                                        target="_blank">
                                        Resumé
                                    </a>
                                </Link>
                                <DarkModeBtn />
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
                            className={`hamburger block ${open} focus:outline-none md:hidden`}
                            onClick={handleIsClick}>
                            <span className="hamburger-top dark:bg-white"></span>
                            <span className="hamburger-middle dark:bg-white"></span>
                            <span className="hamburger-bottom dark:bg-white"></span>
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
                        <div className="space-y-1 px-2 pt-2 pb-3 text-center sm:px-3">
                            <Link href="/">
                                <a className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium hover:bg-lightBlue hover:text-white dark:hover:bg-lightYellow dark:hover:text-black">
                                    Home
                                </a>
                            </Link>
                            <Link href="/about">
                                <a className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium hover:bg-lightBlue hover:text-white dark:hover:bg-lightYellow dark:hover:text-black">
                                    About
                                </a>
                            </Link>
                            <Link href="/projects">
                                <a className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium hover:bg-lightBlue hover:text-white dark:hover:bg-lightYellow dark:hover:text-black">
                                    Projects
                                </a>
                            </Link>
                            <Link href="/contact">
                                <a className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium hover:bg-lightBlue hover:text-white dark:hover:bg-lightYellow dark:hover:text-black">
                                    Contact
                                </a>
                            </Link>
                            <Link href="/Yu-Chia Chen Resume.pdf">
                                <a
                                    className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium hover:bg-lightBlue hover:text-white dark:hover:bg-lightYellow dark:hover:text-black"
                                    target="_blank">
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
