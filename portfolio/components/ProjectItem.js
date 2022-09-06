import Image from "next/image";
import Link from "next/link";

function ProjectItem({ name, image, image_alt, technologies, intro, tags, github, link }) {
    const tagColor = { Web: "bg-blue-300", Cloud: "bg-fuchsia-300", AI: "bg-rose-300", ML: "bg-lime-300" };
    const tagList = tags.map((tag, index) => {
        return (
            <div
                key={index}
                className={`inline-flex h-5 w-10 items-center justify-center rounded-lg text-xs md:h-7 md:w-16 md:text-base ${tagColor[tag]}`}>
                {tag}
            </div>
        );
    });
    const projectName =
        github != null ? (
            <Link href={github}>
                <a className="text-lg text-sky-600 hover:text-sky-900 md:text-2xl" target="_blank">
                    {name}
                </a>
            </Link>
        ) : (
            <div className="text-lg text-sky-600 md:text-2xl">{name}</div>
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
            <Link href={github}>
                <a className="relative inline-flex h-6 w-6 lg:h-11 lg:w-11 xl:h-12 xl:w-12" target="_blank">
                    <Image className="" src="/images/github-logo.png" alt="GitHub" layout="fill" />
                </a>
            </Link>
        ) : (
            <></>
        );

    return (
        <div className="lg:4/5 w-5/6 rounded-xl border-2 border-lightBlue px-2 py-3 md:p-6 xl:w-3/5">
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
}

export default ProjectItem;
