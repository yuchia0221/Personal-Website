import Image from "next/image";

function Education() {
    return (
        <div>
            <div className="block font-semibold text-xl my-5 text-center lg:text-3xl lg:my-6 lg:ml-48 lg:text-left">
                Education
            </div>
            <div className="grid grid-cols-7 grid-flow-row gap-8">
                <div className="relative row-span-2 col-span-1 col-start-2 justify-self-center w-12 h-12 lg:w-20 lg:h-20">
                    <Image src="/rice-logo.png" alt="Rice Logo" layout="fill" />
                </div>
                <div className="row-span-2 col-span-4 text-sm lg:text-lg space-y-1">
                    <div>M.S. in Computer Science @ Rice University</div>
                    <div className="text-gray-500">Aug. 2022 - Present | Sepecializes in Systems and Security</div>
                    <div>
                        2022 Fall: Web Development and Design, Parallel Computing, Algorithms, Computer Architecture
                    </div>
                </div>
                <div className="relative row-span-2 col-span-1 col-start-2 justify-self-center w-12 h-12 lg:w-20 lg:h-20">
                    <Image src="/ntu-logo.png" alt="Rice Logo" layout="fill" />
                </div>
                <div className="row-span-2 col-span-4 text-sm lg:text-lg space-y-1">
                    <div>B.A. in Economics @ National Taiwan University</div>
                    <div className="text-gray-500">Sept. 2017 - June 2021</div>
                    <div>Computer Science Courses GPA: 3.94/4.3</div>
                </div>
            </div>
        </div>
    );
}

export default Education;
