import React from "react";
import TypeWriter from "./TypeWriter";
import Link from "next/link";

function Introduction() {
    const typingWords = ["CS student @ Rice", "software engineer", "baseball lover"];
    return (
        <div className="flex flex-col items-center mt-48 lg:mt-72 xl:mt-32 space-y-3 md:space-y-6">
            <h1 className="md:text-2xl font-semibold font-mono">Hello! This is Aaron Chen</h1>
            <TypeWriter typingWords={typingWords} textColor="text-sky-700" />
            <h1 className="md:text-2xl font-semibold font-mono">I love coding.</h1>
            <Link href="/#" passHref>
                <a className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded">Show me more</a>
            </Link>
        </div>
    );
}

export default Introduction;
