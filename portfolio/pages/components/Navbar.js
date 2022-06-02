import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center pt-2">
                    <Image src="/logo.svg" alt="Logo" height="64" width="64" />
                    <Link href="#">
                        <a className="max-w-md text-3xl font-bold text-center hover:text-lightYellow md:text-4xl md:text-left">
                            Aaron Chen
                        </a>
                    </Link>
                </div>

                <div class="hidden space-x-6 md:flex">
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
