import Head from "next/head";
import Navbar from "./Navbar";

function Header({ title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
        </>
    );
}

export default Header;
