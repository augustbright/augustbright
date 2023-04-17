'use client';

import { ChangeEvent, useState } from "react";
import { ControllerComponent } from "./types";

export const NumberController: ControllerComponent<number> = ({ onSubmit }) => {
    const [value, setValue] = useState(0);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value))
    };

    return (
        <div className="flex gap-y-2">
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="number"
                value={value}
                onChange={onChange}
            />
            <button onClick={() => onSubmit(value)}>Set</button>
        </div>
    );
};