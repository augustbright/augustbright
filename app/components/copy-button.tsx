'use client';

import { useState } from "react";

type TProps = {
    content: string;
    className: string;
};

export const CopyButton = ({ content, className }: TProps) => {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <button
            className={`absolute right-4 top-4 text-sm text-gray-300 hover:text-gray-50 ${className}`}
            onClick={copyToClipboard}
        >{copied ? 'Copied!' : 'Copy'}</button>
    );
};
