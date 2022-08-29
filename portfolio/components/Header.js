import Head from "next/head";
import React from "react";

function Header({ title }) {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

export default Header;
