'use client';

import { useEffect, useState } from "react";
import { ViewComponent } from "./types";
import { Stack } from "../models/stack";

type TProps<TItem> = {
    stack: Stack<TItem>;
    itemView: ViewComponent<TItem>;
};

export const StackView = <TItem,>({ stack, itemView: ItemView }: TProps<TItem>) => {
    const [_, setCount] = useState(0);
    useEffect(() => {
        return stack.subscribe(() => {
            setCount(count => count + 1);
        });
    }, [stack]);

    return (
        <div className="flex flex-col-reverse p-2 border-b-4 border-l border-r border-green-600 gap-y-2">
            {stack.data.map((item, index) => (
                <div key={index} className="flex-grow">
                    <ItemView data={item} />
                </div>
            ))}
        </div>
    )
};