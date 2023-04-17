import React from "react";

type TProps = {
    title: string;
    subTitle?: string;
    description?: string;
};

export const Section = ({ title, subTitle, description, children }: React.PropsWithChildren<TProps>) => {
    return (
        <section className="flex flex-col border border-slate-800 border-dotted">
            <header className="flex flex-col px-4 py-2 bg-slate-900">
                <h2 className="text-lg font-semibold text-slate-500">{title}</h2>
                {subTitle && <h3 className="text-sm text-slate-400">{subTitle}</h3>}
                {description && <p className="text-sm text-slate-400">{description}</p>}
            </header>
            <div className="border-t border-slate-800 border-dotted"></div>
            <div className="flex-grow p-4">
                {children}
            </div>
        </section>
    );
};