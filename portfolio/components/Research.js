import Image from "next/image";
import Link from "next/link";

function Work() {
    return (
        <div className="pb-12 ">
            <div className="my-5 block text-center text-xl font-semibold lg:my-6 lg:ml-48 lg:text-left lg:text-3xl">
                Research Experience & Publication
            </div>
            <div className="grid grid-flow-row grid-cols-7 gap-8">
                <div className="relative col-span-1 col-start-2 row-span-2 h-12 w-12 justify-self-center lg:h-16 lg:w-16">
                    <Image src="/niu-logo.png" alt="Microsoft Logo" layout="fill" />
                </div>
                <div className="col-span-4 row-span-4 space-y-1 text-sm lg:text-lg">
                    <div>Research Assistant @ Nation Ilan University</div>
                    <div className="text-gray-500">Dec. 2020 - July 2022</div>
                    <div>Supervisor: Prof. Chih-Hsien Hsia (Computer Science and Information Engineering)</div>
                    <div className="space-y-3 pt-2 lg:text-justify">
                        <p>
                            <span className="font-semibold">Yu-Chia Chen</span>, Zih-Ching Chen, and Chih-Hsien Hsia,
                            "Roadside Unit-Based Unknown Object Detection in Adverse Weather Conditions for Smart
                            Internet of Vehicles," ACM Transactions on Management Information Systems (TMIS), 2021. (In
                            Press)
                        </p>
                        <p>
                            <span className="font-semibold">Yu-Chia Chen</span>, Zih-Ching Chen, and Chih-Hsien Hsia, “
                            <Link href="https://doi.org/10.1109/ICCE-TW52618.2021.9603205" passHref>
                                <a
                                    className="text-sky-600 underline hover:rounded-sm hover:bg-lightBlue hover:text-white hover:no-underline"
                                    target="_blank">
                                    Music Mood Classification System for Streaming Platform Analysis via Deep
                                    Learning-Based Feature Extraction
                                </a>
                            </Link>
                            , in Proceedings of the IEEE International Conference on Consumer Electronics - Taiwan
                            (ICCE-TW), 2021.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
