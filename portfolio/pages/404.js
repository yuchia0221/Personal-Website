import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";

const Custom404 = () => {
    return (
        <>
            <Header title="Aaron Chen | Page not Found" />
            <div className="mt-16 flex h-full w-full flex-col items-center space-y-4 lg:mt-32 xl:mt-8">
                <div className="relative h-48 w-48 md:h-64 md:w-64 lg:h-72 lg:w-72">
                    <Image src="/images/404-light.png" alt="404 Image" layout="fill"></Image>
                </div>
                <div className="text-2xl font-bold">This Page is Lost in Space</div>
                <Link href="/" passHref>
                    <a className="shadow-black-40 rounded-md bg-black py-2 px-4 font-bold text-white shadow-lg hover:bg-white hover:text-black">
                        Home Page
                    </a>
                </Link>
            </div>
            <div className="my-12 flex h-full w-full flex-col items-center space-y-4">
                <div className="flex w-2/3 justify-center text-justify text-xs font-light text-gray-400 lg:text-base">
                    You thought this mission to the moon would be a quick six month thing. Your neighbor offered to look
                    after your dog. Your high school math teacher was impressed. He once said you wouldn&lsquo;t amount
                    to anything. You sure showed him. But now here you are, fifty feet from your spaceship with no way
                    to get back. Your dog will be so sad. Your math teacher will be so smug. Pretty devastating.
                </div>
                <div className="text-xs font-light text-gray-400 lg:text-base">
                    Special Thanks to{" "}
                    <Link href="https://www.kapwing.com">
                        <a className="text-lightBlue hover:text-cyan-500" target="_blank">
                            Kapwing
                        </a>
                    </Link>{" "}
                    for 404 images.
                </div>
            </div>
        </>
    );
};

export default Custom404;
