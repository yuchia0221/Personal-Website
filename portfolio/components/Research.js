import Image from "next/image";
import Link from "next/link";

const Work = () => {
    return (
        <div className="w-5/6 space-y-8 rounded-xl border-2 border-lightBlue p-4 pb-12 dark:border-lightYellow lg:w-3/4">
            <div className="block text-center text-xl font-semibold text-lightBlue dark:text-lightYellow lg:pl-5 lg:text-left lg:text-3xl">
                Research Experience & Publication
            </div>
            <div className="grid grid-flow-row grid-cols-9 gap-x-10 gap-y-8">
                <div className="relative col-span-1 col-start-2 row-span-2 h-12 w-12 justify-self-center lg:h-16 lg:w-16">
                    <Image src="/images/niu-logo.png" alt="Microsoft Logo" layout="fill" />
                </div>
                <div className="col-span-6 row-span-4 space-y-1 text-sm lg:text-lg">
                    <div>Research Assistant @ Nation Ilan University</div>
                    <div className="text-gray-500">Dec. 2020 - July 2022</div>
                    <div>Supervisor: Prof. Chih-Hsien Hsia (Computer Science and Information Engineering)</div>
                    <div className="space-y-3 pt-2 lg:text-justify">
                        <p>
                            <span className="font-semibold">Yu-Chia Chen</span>, Sin-Ye Jhong, and Chih-Hsien Hsia,
                            &quot;
                            <Link href="https://doi.org/10.1145/3554923" passHref>
                                <a
                                    className="text-lightBlue hover:rounded-sm hover:bg-lightBlue hover:text-white hover:no-underline dark:text-lightYellow dark:hover:bg-lightYellow dark:hover:text-black"
                                    target="_blank"
                                >
                                    Roadside Unit-Based Unknown Object Detection in Adverse Weather Conditions for Smart
                                    Internet of Vehicles
                                </a>
                            </Link>
                            &quot; ACM Transactions on Management Information Systems (TMIS), 2021.
                        </p>
                        <p>
                            <span className="font-semibold">Yu-Chia Chen</span>, Zih-Ching Chen, and Chih-Hsien Hsia,
                            &quot;
                            <Link href="https://doi.org/10.1109/ICCE-TW52618.2021.9603205" passHref>
                                <a
                                    className="text-lightBlue hover:rounded-sm hover:bg-lightBlue hover:text-white hover:no-underline dark:text-lightYellow dark:hover:bg-lightYellow dark:hover:text-black"
                                    target="_blank"
                                >
                                    Music Mood Classification System for Streaming Platform Analysis via Deep
                                    Learning-Based Feature Extraction
                                </a>
                            </Link>
                            &quot;, in Proceedings of the IEEE International Conference on Consumer Electronics - Taiwan
                            (ICCE-TW), 2021.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
