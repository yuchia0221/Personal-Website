import Image from "next/image";
import Link from "next/link";

function Contact() {
    return (
        <>
            <div className="block p-12 text-center text-4xl font-semibold lg:p-24">Find me on</div>
            <div className="grid grid-flow-row grid-cols-7 lg:grid-cols-11">
                <Link href="https://github.com/yuchia0221" passHref>
                    <a
                        className="relative col-start-2 h-14 w-14 cursor-pointer justify-self-center lg:col-start-4 lg:h-20 lg:w-20"
                        title="GitHub"
                        target="_blank">
                        <Image src="/images/github-logo.png" layout="fill" title="GitHub" alt="GitHub" />
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/yu-chia-chen" passHref>
                    <a
                        className="relative col-start-4 h-14 w-14 cursor-pointer justify-self-center lg:col-start-6 lg:h-20 lg:w-20"
                        title="Linkedin"
                        target="_blank">
                        <Image src="/images/linkedin-logo.png" layout="fill" title="Linkedin" alt="Linkedin" />
                    </a>
                </Link>
                <Link href="mailto:yuchiachen99@gmail.com" passHref>
                    <a
                        className="relative col-start-6 h-14 w-14 cursor-pointer justify-self-center lg:col-start-8 lg:h-20 lg:w-20"
                        title="Email">
                        <Image src="/images/email.png" layout="fill" title="Email" alt="Email" />
                    </a>
                </Link>
                <Link href="https://github.com/yuchia0221" passHref>
                    <a
                        className="col-start-2 row-start-2 py-3 text-center text-sm font-semibold lg:col-start-4 lg:text-xl"
                        target="_blank">
                        GitHub
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/yu-chia-chen" passHref>
                    <a
                        className="col-start-4 row-start-2 py-3 text-center text-sm font-semibold lg:col-start-6 lg:text-xl"
                        target="_blank">
                        Linkedin
                    </a>
                </Link>
                <Link href="mailto:yuchiachen99@gmail.com" passHref>
                    <a className="col-start-6 row-start-2 py-3 text-center text-sm font-semibold lg:col-start-8 lg:text-xl">
                        Email
                    </a>
                </Link>
            </div>
        </>
    );
}

export default Contact;
