import { useContext } from "react";
import { Stack } from "../models/stack";
import { ControllerComponent } from "./types";
import { FloatAreaContext } from "../structure-components/float-area";
import { WithToolbar } from "../structure-components/with-toolbar";
import { buttonClassNames } from "../classNames/button";

type TProps<T extends unknown> = {
    stack: Stack<T>;
    itemController: ControllerComponent<T>;
};

export const StackController = <T extends unknown>({ stack, itemController: ItemController }: TProps<T>) => {
    const { setContent } = useContext(FloatAreaContext);

    const floatAreaContent = (
        <WithToolbar onClose={() => { setContent(null) }}>
            <div className="p-4">
                <ItemController onSubmit={(item) => {
                    stack.push(item);
                    setContent(null);
                }} />
            </div>
        </WithToolbar>
    );

    return (
        <div className="flex flex-col gap-y-2">
            <button className={buttonClassNames({})} onClick={() => setContent(floatAreaContent)}>Push</button>
            <button className={buttonClassNames({})} onClick={() => stack.pop()}>Pop</button>
            <button className={buttonClassNames({})} onClick={() => stack.clear()}>Clear</button>
        </div>
    )
};