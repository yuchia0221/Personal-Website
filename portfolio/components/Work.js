import Image from "next/image";

function Work() {
    return (
        <div>
            <div className="my-5 block text-center text-xl font-semibold lg:my-6 lg:ml-48 lg:text-left lg:text-3xl">
                Work Experience
            </div>
            <div className="grid grid-flow-row grid-cols-7 gap-8">
                <div className="relative col-span-1 col-start-2 row-span-2 h-12 w-12 justify-self-center lg:h-16 lg:w-16">
                    <Image src="/images/microsoft-logo.png" alt="Microsoft Logo" layout="fill" />
                </div>
                <div className="col-span-4 row-span-2 space-y-1 text-sm lg:text-lg">
                    <div>Software Engineer Intern @ Microsoft</div>
                    <div className="text-gray-500">July 2020 - July 2021</div>
                </div>
                <div className="relative col-span-1 col-start-2 row-span-2 h-8 w-20 justify-self-center lg:h-16 lg:w-40">
                    <Image src="/images/eland-logo.png" alt="Microsoft Logo" layout="fill" />
                </div>
                <div className="col-span-4 row-span-2 space-y-1 text-sm lg:text-lg">
                    <div>Data Scientist Intern @ eLand</div>
                    <div className="text-gray-500">Mar. 2020 - June 2020</div>
                </div>
            </div>
        </div>
    );
}

export default Work;
