import Head from "next/head";
import Navbar from "./Navbar";

function Header({ title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
        </>
    );
}

export default Header;
