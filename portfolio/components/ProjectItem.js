import Image from "next/image";
import Link from "next/link";

function ProjectItem({ name, image, image_alt, technologies, intro, tags, github, link }) {
    const tagColor = { Web: "bg-blue-300", Cloud: "bg-fuchsia-300", AI: "bg-rose-300", ML: "bg-lime-300" };
    const tagList = tags.map((tag, index) => {
        return (
            <div key={index} className={`inline-flex h-7 w-16 items-center justify-center rounded-lg ${tagColor[tag]}`}>
                {tag}
            </div>
        );
    });
    const projectName =
        github != null ? (
            <Link href={github}>
                <a className="text-2xl text-sky-600 hover:text-sky-900" target="_blank">
                    {name}
                </a>
            </Link>
        ) : (
            <div className="text-2xl text-sky-600">{name}</div>
        );
    const websiteLink =
        link != null ? (
            <Link href={link}>
                <a className="relative inline-flex h-12 w-12" target="_blank">
                    <Image src="/images/browser.png" alt="Website" layout="fill" />
                </a>
            </Link>
        ) : (
            <></>
        );
    const githubLink =
        github != null ? (
            <Link href={github}>
                <a className="relative inline-flex h-12 w-12" target="_blank">
                    <Image className="" src="/images/github-logo.png" alt="GitHub" layout="fill" />
                </a>
            </Link>
        ) : (
            <></>
        );

    return (
        <div className="w-3/5 rounded-xl border-2 border-lightBlue px-6 py-6">
            <div className="grid grid-flow-row grid-cols-10 place-content-center space-x-2">
                <div className="relative col-span-1 h-12 w-12 place-self-center lg:h-12 lg:w-12">
                    <Image src={image} alt={image_alt} layout="fill" />
                </div>
                <div className="col-span-7 col-start-2 row-span-1 row-start-1">
                    <div>{projectName}</div>
                    <div>{technologies}</div>
                </div>
                <div className="col-span-2 col-start-9 row-start-1 items-end space-x-3 place-self-end self-center">
                    {websiteLink}
                    {githubLink}
                </div>
                <div className="col-span-9 col-start-2 row-span-2 pt-3 text-gray-500">{intro}</div>
                <div className="col-span-9 col-start-2 space-x-2 pt-3">{tagList}</div>
            </div>
        </div>
    );
}

export default ProjectItem;
