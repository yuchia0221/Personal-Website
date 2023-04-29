import Head from "next/head";
import Navbar from "./Navbar";

const Header = ({ title, currentPage }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar currentPage={currentPage} />
        </>
    );
};

export default Header;
