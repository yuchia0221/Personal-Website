import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
    const { theme } = useTheme();

    return (
        <>
            <div className="flex justify-center py-20 text-center text-4xl font-semibold">Find me on</div>
            <div className="mx-auto flex w-5/6 flex-row justify-around lg:w-1/2">
                <div className="flex flex-col">
                    <Link href="https://github.com/yuchia0221" passHref>
                        <a
                            className="relative h-14 w-14 cursor-pointer justify-self-center dark:hidden lg:h-20 lg:w-20"
                            title="GitHub"
                            target="_blank"
                        >
                            <Image
                                src={
                                    theme === "dark" ? "/images/github-logo-dark.png" : "/images/github-logo-light.png"
                                }
                                layout="fill"
                                title="GitHub"
                                alt="GitHub"
                            />
                        </a>
                    </Link>
                    <Link href="https://github.com/yuchia0221" passHref>
                        <a className="py-3 text-center text-sm font-semibold lg:text-xl" target="_blank">
                            GitHub
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col">
                    <Link href="https://www.linkedin.com/in/yu-chia-chen" passHref>
                        <a
                            className="relative h-14 w-14 cursor-pointer justify-self-center rounded-lg dark:bg-white lg:h-20 lg:w-20"
                            title="Linkedin"
                            target="_blank"
                        >
                            <Image src="/images/linkedin-logo.png" layout="fill" title="Linkedin" alt="Linkedin" />
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/yu-chia-chen" passHref>
                        <a className="py-3 text-center text-sm font-semibold lg:text-xl" target="_blank">
                            Linkedin
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col">
                    <Link href="mailto:yuchiachen99@gmail.com" passHref>
                        <a
                            className="relative h-14 w-14 cursor-pointer justify-self-center lg:h-20 lg:w-20"
                            title="Email"
                        >
                            <Image src="/images/email.png" layout="fill" title="Email" alt="Email" />
                        </a>
                    </Link>
                    <Link href="mailto:yuchiachen99@gmail.com" passHref>
                        <a className="py-3 text-center text-sm font-semibold lg:text-xl">Email</a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Contact;
