import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <>
            <Head>
                <title>Aaron Chen</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
        </>
    );
}
