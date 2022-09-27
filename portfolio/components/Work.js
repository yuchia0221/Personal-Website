import Image from "next/image";

const Work = () => {
    return (
        <div className="w-5/6 space-y-8 rounded-xl border-2 border-lightBlue p-4 pb-12 dark:border-lightYellow lg:w-3/4">
            <div className="block text-center text-xl font-semibold text-lightBlue dark:text-lightYellow lg:pl-5 lg:text-left lg:text-3xl">
                Work Experience
            </div>
            <div className="grid grid-flow-row grid-cols-9 gap-x-10 gap-y-8">
                <div className="relative col-span-1 col-start-2 row-span-2 h-10 w-10 justify-self-center lg:h-14 lg:w-14">
                    <Image src="/images/microsoft-logo.png" alt="Microsoft Logo" layout="fill" />
                </div>
                <div className="col-span-6 row-span-2 space-y-1 text-sm lg:text-lg">
                    <div>Software Engineer Intern @ Microsoft</div>
                    <div className="text-gray-500">July 2020 - July 2021</div>
                </div>
                <div className="relative col-span-1 col-start-2 row-span-2 h-7 w-16 self-center justify-self-center lg:h-12 lg:w-32">
                    <Image src="/images/eland-logo.png" alt="eland Logo" layout="fill" />
                </div>
                <div className="col-span-7 row-span-2 space-y-1 text-sm lg:text-lg">
                    <div>Data Scientist Intern @ eLand</div>
                    <div className="text-gray-500">Mar. 2020 - June 2020</div>
                </div>
            </div>
        </div>
    );
};

export default Work;
