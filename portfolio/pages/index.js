import Head from "next/head";
import Navbar from "../components/Navbar";
import Canvas from "../components/Canvas";

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
