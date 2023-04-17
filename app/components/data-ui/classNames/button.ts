import classNames from "classnames";

type TParams = {
    role?: "descrtuctive";
};

export const buttonClassNames = ({ role }: TParams) =>
    classNames("border px-4 py-1", {
        "border-red-500 text-red-500 hover:text-red-900 hover:bg-red-100": role === "descrtuctive",
        "border-gray-300 text-gray-200 hover:text-gray-900 hover:bg-gray-100": !role
    });