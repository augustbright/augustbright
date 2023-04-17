'use client';
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TProps = {
    title: string;
    description: string;
    href: string;
};

export const ExperimentLink = ({ title, description, href }: TProps) => {
    const currentPathName = usePathname();
    const isActive = currentPathName === href;

    return (
        <Link className={classNames("flex flex-col group", {
            "bg-orange-600": isActive,
            "hover:bg-orange-900": !isActive,
        })} href={href}>
            <div className="px-4 py-2">
                <h2 className={classNames("text-lg font-semibold", {
                    "text-white": isActive,
                    "text-orange-500": !isActive,
                    "group-hover:text-white": !isActive,
                })}>{title}</h2>
                <p className={classNames("text-sm group-hover:text-gray-200", {
                    "text-gray-200": isActive,
                    "text-gray-500": !isActive,
                })}>{description}</p>
            </div>
        </Link>
    );
}