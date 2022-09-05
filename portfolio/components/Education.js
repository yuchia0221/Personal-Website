import Image from "next/image";

function Education() {
    return (
        <div>
            <div className="my-5 block text-center text-xl font-semibold lg:my-6 lg:ml-48 lg:text-left lg:text-3xl">
                Education
            </div>
            <div className="grid grid-flow-row grid-cols-7 gap-8">
                <div className="relative col-span-1 col-start-2 row-span-2 h-12 w-12 justify-self-center lg:h-20 lg:w-20">
                    <Image src="/images/rice-logo.png" alt="Rice Logo" layout="fill" />
                </div>
                <div className="col-span-4 row-span-2 space-y-1 text-sm lg:text-lg">
                    <div>M.S. in Computer Science @ Rice University</div>
                    <div className="text-gray-500">Aug. 2022 - Present | Sepecializes in Systems and Security</div>
                    <div>
                        2022 Fall: Web Development and Design, Parallel Computing, Algorithms, Computer Architecture
                    </div>
                </div>
                <div className="relative col-span-1 col-start-2 row-span-2 h-12 w-12 justify-self-center lg:h-20 lg:w-20">
                    <Image src="/images/ntu-logo.png" alt="Rice Logo" layout="fill" />
                </div>
                <div className="col-span-4 row-span-2 space-y-1 text-sm lg:text-lg">
                    <div>B.A. in Economics @ National Taiwan University</div>
                    <div className="text-gray-500">Sept. 2017 - June 2021</div>
                    <div>Computer Science Courses GPA: 3.94/4.3</div>
                </div>
            </div>
        </div>
    );
}

export default Education;
