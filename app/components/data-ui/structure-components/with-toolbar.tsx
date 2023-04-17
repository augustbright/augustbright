import { PropsWithChildren } from "react";
import { TToolbarProps, Toolbar } from "./toolbar";

type TProps = TToolbarProps;

export const WithToolbar = ({ children, ...rest }: PropsWithChildren<TProps>) => {
    return (
        <div className="flex flex-col">
            <div className="flex-none border-b border-slate-800 p-2">
                <Toolbar {...rest} />
            </div>
            <div className="flex-grow">
                {children}
            </div>
        </div>
    );
};