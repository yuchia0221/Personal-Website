import Image from "next/image";

function Work() {
    return (
        <div>
            <div className="block font-semibold text-xl my-5 text-center lg:text-3xl lg:my-6 lg:ml-48 lg:text-left">
                Work Experience
            </div>
            <div className="grid grid-cols-7 grid-flow-row gap-8">
                <div className="relative row-span-2 col-span-1 col-start-2 justify-self-center w-12 h-12 lg:w-16 lg:h-16">
                    <Image src="/microsoft-logo.png" alt="Microsoft Logo" layout="fill" />
                </div>
                <div className="row-span-2 col-span-4 text-sm lg:text-lg space-y-1">
                    <div>Software Engineer Intern @ Microsoft</div>
                    <div className="text-gray-500">July 2020 - July 2021</div>
                </div>
                <div className="relative row-span-2 col-span-1 col-start-2 justify-self-center w-20 h-8 lg:w-40 lg:h-16">
                    <Image src="/eland-logo.png" alt="Microsoft Logo" layout="fill" />
                </div>
                <div className="row-span-2 col-span-4 text-sm lg:text-lg space-y-1">
                    <div>Data Scientist Intern @ eLand</div>
                    <div className="text-gray-500">Mar. 2020 - June 2020</div>
                </div>
            </div>
        </div>
    );
}

export default Work;
