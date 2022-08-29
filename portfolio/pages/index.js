import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="h-screen">
            <Head>
                <title>Aaron Chen</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Hero />
        </div>
    );
}
