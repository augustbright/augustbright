import React from "react";

type TProps = {
    renderControl: () => JSX.Element;
};

export const ViewControl = ({ children, renderControl }: React.PropsWithChildren<TProps>) => {
    return (
        <div className="flex gap-2">
            <div className="flex-grow">
                {children}
            </div>
            <div className="flex-none border-l border-gray-900 border-dotted">
                {renderControl()}
            </div>
        </div>
    );
};