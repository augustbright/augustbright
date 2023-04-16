'use client';

import Link from "next/link";

type TLink = {
    title: string;
    href: string;
};

const links: TLink[] = [
    { title: 'Home', href: '/' },
    // { title: 'About', href: '/about' },
];

export const SiteHeader = () => (
    <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        {
                            links.map((link) => (
                                <li key={link.title}>
                                    <Link href={link.href} className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">
                                        {link.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);