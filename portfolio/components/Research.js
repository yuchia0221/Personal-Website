import Image from "next/image";
import Link from "next/link";

function Work() {
    return (
        <div className="pb-12 ">
            <div className="block font-semibold text-xl my-5 text-center lg:text-3xl lg:my-6 lg:ml-48 lg:text-left">
                Research Experience & Publication
            </div>
            <div className="grid grid-cols-7 grid-flow-row gap-8">
                <div className="relative row-span-2 col-span-1 col-start-2 justify-self-center w-12 h-12 lg:w-16 lg:h-16">
                    <Image src="/niu-logo.png" alt="Microsoft Logo" layout="fill" />
                </div>
                <div className="row-span-4 col-span-4 text-sm lg:text-lg space-y-1">
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
                                    className="text-sky-600 underline hover:bg-lightBlue hover:text-white hover:rounded-sm hover:no-underline"
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
