import { Menu, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import { Fragment, useEffect, useState } from "react";
import classNames from "../utils/classNames";

const DarkModeBtn = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderThemeChanger = () => {
        if (!mounted) return null;
        return (
            <>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="p-2">
                            <svg
                                className={classNames(
                                    theme === "light"
                                        ? "h-6 w-6 self-center fill-yellow-200 stroke-lightYellow"
                                        : "hidden"
                                )}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                            <svg
                                className={classNames(
                                    theme === "dark" ? "h-6 w-6 self-center stroke-lightYellow" : "hidden"
                                )}
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    className={classNames(theme === "dark" ? "stroke-lightYellow" : "hidden")}
                                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                                ></path>
                            </svg>
                            <svg
                                className={classNames(theme === "system" ? "h-6 w-6 self-center" : "hidden")}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                    className={classNames(
                                        theme === "system"
                                            ? "self-center stroke-lightBlue dark:stroke-lightYellow"
                                            : "hidden"
                                    )}
                                ></path>
                                <path
                                    d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={classNames(
                                        theme === "system" ? "stroke-lightBlue dark:stroke-lightYellow" : "hidden"
                                    )}
                                ></path>
                            </svg>
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-4 z-10 mt-4 w-28 rounded-md bg-white bg-opacity-95 p-1 shadow-lg ring-1 ring-lightBlue dark:bg-black dark:ring-white">
                            <Menu.Item>
                                <button
                                    onClick={() => setTheme("light")}
                                    className="justify-left relative flex w-full gap-2 rounded-md py-1.5 pl-2 hover:bg-lightBlue dark:hover:bg-lightYellow dark:hover:text-black"
                                >
                                    <svg
                                        className={classNames(
                                            theme === "light" ? "fill-yellow-200 stroke-lightYellow" : "",
                                            "self-left h-6 w-6"
                                        )}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="5"></circle>
                                        <line x1="12" y1="1" x2="12" y2="3"></line>
                                        <line x1="12" y1="21" x2="12" y2="23"></line>
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                        <line x1="1" y1="12" x2="3" y2="12"></line>
                                        <line x1="21" y1="12" x2="23" y2="12"></line>
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                    </svg>
                                    Light
                                </button>
                            </Menu.Item>
                            <Menu.Item>
                                <div className="group">
                                    <button
                                        onClick={() => setTheme("dark")}
                                        className="justify-left relative flex w-full gap-2 rounded-md py-1.5 pl-2 hover:bg-lightBlue dark:hover:bg-lightYellow dark:hover:text-black"
                                    >
                                        <svg
                                            className={classNames(
                                                theme === "dark"
                                                    ? "dark:stroke-lightYellow dark:group-hover:stroke-black"
                                                    : "",
                                                "h-6 w-6 self-center"
                                            )}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                        </svg>
                                        Dark
                                    </button>
                                </div>
                            </Menu.Item>

                            <Menu.Item>
                                <div className="group">
                                    <button
                                        onClick={() => setTheme("system")}
                                        className="justify-left relative flex w-full gap-2 rounded-md py-1.5 pl-2 hover:bg-lightBlue dark:hover:bg-lightYellow dark:hover:text-black"
                                    >
                                        <svg className="h-6 w-6 self-center" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinejoin="round"
                                                className={classNames(
                                                    theme === "system"
                                                        ? "stroke-lightBlue dark:stroke-lightYellow dark:group-hover:stroke-black"
                                                        : "",
                                                    "h-6 w-6 self-center"
                                                )}
                                            ></path>
                                            <path
                                                d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className={classNames(
                                                    theme === "system"
                                                        ? "stroke-lightBlue dark:stroke-lightYellow dark:group-hover:stroke-black"
                                                        : "",
                                                    "h-6 w-6 self-center"
                                                )}
                                            ></path>
                                        </svg>
                                        System
                                    </button>
                                </div>
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </>
        );
    };

    return <div className="relative self-center">{renderThemeChanger()}</div>;
};

export default DarkModeBtn;
