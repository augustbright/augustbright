'use client';

import Link from "next/link";

type TLink = {
    title: string;
    href: string;
};

const links: TLink[] = [
    { title: 'Home', href: '/' },
    { title: 'Experiments', href: '/experiments' },
    // { title: 'About', href: '/about' },
];

export const SiteHeader = () => (
    <header>
        <nav className="px-4 py-2 lg:px-6 bg-black border-b border-slate-600">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <div className="justify-between items-center flex w-auto">
                    <ul className="flex font-medium flex-row lg:space-x-8 mt-0">
                        {
                            links.map((link) => (
                                <li key={link.title}>
                                    <Link href={link.href} className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white lg:hover:underline" aria-current="page">
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