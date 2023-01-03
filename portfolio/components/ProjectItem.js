import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ name, image, image_alt, technologies, intro, tags, github, link }) => {
    const tagColor = {
        Web: "w-10 rounded-lg bg-blue-300 dark:bg-blue-700 md:h-7 md:w-16",
        Cloud: "w-10 rounded-lg bg-fuchsia-300 dark:bg-fuchsia-700 md:h-7 md:w-16",
        AI: "w-10 rounded-lg bg-rose-300 dark:bg-pink-700 md:h-7 md:w-16",
        ML: "w-10 rounded-lg bg-lime-300 dark:bg-emerald-700 md:h-7 md:w-16",
        "High-Performance": "w-28 rounded-md bg-lightYellow dark:bg-yellow-600 md:w-36",
    };
    const tagList = tags.map((tag, index) => {
        return (
            <div
                key={index}
                className={`inline-flex h-7 items-center justify-center text-xs md:text-base ${tagColor[tag]}`}
            >
                {tag}
            </div>
        );
    });
    const projectName =
        github != null ? (
            <Link href={github}>
                <a
                    className="text-lg text-sky-600 hover:text-sky-900 dark:text-lightYellow dark:hover:text-yellow-500 md:text-2xl"
                    target="_blank"
                >
                    {name}
                </a>
            </Link>
        ) : (
            <div className="text-lg text-sky-600 dark:text-lightYellow md:text-2xl">{name}</div>
        );
    const websiteLink =
        link != null ? (
            <Link href={link}>
                <a className="relative inline-flex h-6 w-6 lg:h-11 lg:w-11 xl:h-12 xl:w-12" target="_blank">
                    <Image src="/images/browser.png" alt="Website" layout="fill" />
                </a>
            </Link>
        ) : (
            <></>
        );
    const githubLink =
        github != null ? (
            <>
                <Link href={github}>
                    <a
                        className="relative inline-flex h-6 w-6 dark:hidden lg:h-11 lg:w-11 xl:h-12 xl:w-12"
                        target="_blank"
                    >
                        <Image src="/images/github-logo-light.png" alt="GitHub" layout="fill" />
                    </a>
                </Link>
                <Link href={github}>
                    <a
                        className="relative hidden h-6 w-6 dark:inline-flex lg:h-11 lg:w-11 xl:h-12 xl:w-12"
                        target="_blank"
                    >
                        <Image src="/images/github-logo-dark.png" alt="GitHub" layout="fill" />
                    </a>
                </Link>
            </>
        ) : (
            <></>
        );

    return (
        <div className="w-5/6 rounded-xl border-2 border-lightBlue px-2 py-3 dark:border-lightYellow md:p-6 lg:w-4/5 xl:w-3/5">
            <div className="grid grid-flow-row grid-cols-7 place-content-center space-x-2 md:grid-cols-10">
                <div className="relative col-span-1 hidden place-self-center md:visible md:flex md:h-12 md:w-12">
                    <Image src={image} alt={image_alt} layout="fill" />
                </div>
                <div className="col-span-full col-start-1 text-xs md:col-span-7 md:col-start-2 md:text-base">
                    <div>{projectName}</div>
                    <div>{technologies}</div>
                </div>
                <div className="col-span-2 col-start-9 row-start-1 hidden space-x-3 place-self-end self-center md:flex">
                    {websiteLink}
                    {githubLink}
                </div>
                <div className="col-span-full py-2 text-xs text-gray-500 md:col-span-9 md:col-start-2 md:py-3 md:text-base">
                    {intro}
                </div>
                <div className="col-span-5 space-x-2 md:col-span-9 md:col-start-2 ">{tagList}</div>
                <div className="col-span-2 col-start-6 space-x-3 place-self-end md:hidden">
                    {websiteLink}
                    {githubLink}
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
