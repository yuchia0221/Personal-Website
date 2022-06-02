import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center pt-2">
                    <Link href="/">
                        <a>
                            <Image src="/logo.svg" alt="Logo" width="60vh" height="60vw" />
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="max-w-md m-4 text-4xl text-bold font-bold hover:text-lightYellow">Aaron Chen</a>
                    </Link>
                </div>

                <div className="hidden space-x-6 md:flex">
                    <Link href="#">
                        <a className="hover:text-lightYellow">Home</a>
                    </Link>
                    <Link href="#">
                        <a className="hover:text-lightYellow">About</a>
                    </Link>
                    <Link href="#">
                        <a className="hover:text-lightYellow">Projects</a>
                    </Link>
                    <Link href="#">
                        <a className="hover:text-lightYellow">Contact</a>
                    </Link>
                    <Link href="#">
                        <a className="hover:text-lightYellow">Resumé</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
