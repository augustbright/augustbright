import { PropsWithChildren } from "react";
import { buttonClassNames } from "../classNames/button";

export type TToolbarProps = {
    onClose: () => void;
};

export const Toolbar = ({ children, onClose }: PropsWithChildren<TToolbarProps>) => {
    return (
        <div className="flex">
            <div className="flex-grow">
                {children}
            </div>

            <button className={buttonClassNames({ role: "descrtuctive" })} onClick={onClose}>Close</button>
        </div>
    );
};