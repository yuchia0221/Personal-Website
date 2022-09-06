import React from "react";
import TypeWriter from "./TypeWriter";
import Link from "next/link";

function Introduction() {
    const typingWords = ["CS student @ Rice", "software engineer", "baseball lover"];
    return (
        <div className="mt-48 flex flex-col items-center space-y-3 md:space-y-6 lg:mt-36 xl:mt-32">
            <h1 className="font-semibold md:text-2xl">Hello! This is Aaron Chen</h1>
            <TypeWriter typingWords={typingWords} textColor="text-sky-700" />
            <h1 className="font-bold md:text-2xl">I love coding.</h1>
            <Link href="/about" passHref>
                <a className="rounded-md bg-sky-700 py-2 px-4 font-bold text-white shadow-md md:shadow-lg shadow-sky-700/40 hover:bg-sky-800">
                    Show me more
                </a>
            </Link>
        </div>
    );
}

export default Introduction;
