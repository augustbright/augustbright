'use client';

import classNames from "classnames";
import React, { useMemo, useState } from "react";

export const FloatAreaContext = React.createContext<{
    content: React.ReactNode;
    setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}>({
    content: null,
    setContent: () => { }
});

export const FloatArea = ({ children }: React.PropsWithChildren<{}>) => {
    const [content, setContent] = useState<React.ReactNode>(<></>);

    return (
        <FloatAreaContext.Provider value={{
            content,
            setContent
        }}>
            <div className="flex grow">
                <div className="grow">
                    {children}
                </div>
                <div className={classNames("flex-none border-l border-gray-800 border-dotted bg-slate-950", {
                    "hidden": !content
                })}>
                    {content}
                </div>
            </div>
        </FloatAreaContext.Provider>
    );
};